import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed } = rateLimit(ip, 3, 300_000);

  if (!allowed) {
    return NextResponse.json(
      { error: "Çok fazla mesaj gönderildi. Lütfen 5 dakika bekleyin." },
      { status: 429 }
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Tüm alanlar zorunludur" }, { status: 400 });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Alan uzunluğu aşıldı" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Geçersiz e-posta adresi" }, { status: 400 });
  }

  if ((body as Record<string, unknown>)._honeypot) {
    return NextResponse.json({ success: true });
  }

  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@duzcedeyemek.com";

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: name.slice(0, 100),
        email: email.slice(0, 200),
        message: message.slice(0, 5000),
        _subject: `Düzce'de Yemek - ${name.slice(0, 50)}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." }, { status: 502 });
  }
}
