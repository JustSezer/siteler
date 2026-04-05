import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { createLead } from "@/lib/db";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed } = rateLimit(ip, 3, 300_000); // 3 per 5 minutes

  if (!allowed) {
    return NextResponse.json(
      { error: "Çok fazla talep gönderildi. Lütfen 5 dakika bekleyin." },
      { status: 429 }
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: { name?: string; email?: string; phone?: string; subject?: string; message?: string; _honeypot?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot check
  if (body._honeypot) {
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message || !subject) {
    return NextResponse.json({ error: "Ad, e-posta, konu ve mesaj zorunludur" }, { status: 400 });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || typeof subject !== "string") {
    return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000 || subject.length > 100) {
    return NextResponse.json({ error: "Alan uzunluğu aşıldı" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Geçersiz e-posta adresi" }, { status: 400 });
  }

  // Save to database
  try {
    await createLead({
      name: name.slice(0, 100),
      email: email.slice(0, 200),
      phone: phone && typeof phone === "string" ? phone.slice(0, 20) : null,
      subject: subject.slice(0, 100),
      message: message.slice(0, 5000),
    });
  } catch {
    return NextResponse.json({ error: "Talep kaydedilemedi." }, { status: 500 });
  }

  // Also send via email (FormSubmit)
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@wix-destek.com";

  try {
    await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: name.slice(0, 100),
        email: email.slice(0, 200),
        message: `Konu: ${subject}\nTelefon: ${phone || "-"}\n\n${message.slice(0, 5000)}`,
        _subject: `Wix Destek Talebi - ${subject} (${name.slice(0, 50)})`,
      }),
    });
  } catch {
    // E-posta gönderilemese de talep DB'ye kaydedildi, başarılı say
  }

  return NextResponse.json({ success: true });
}
