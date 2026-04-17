import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
  kvkk?: boolean;
  honeypot?: string;
};

function escape(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek." },
      { status: 400 }
    );
  }

  if (data.honeypot && data.honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();
  const phone = (data.phone || "").trim();
  const service = (data.service || "").trim();
  const website = (data.website || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Ad, e-posta ve mesaj zorunludur." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Geçerli bir e-posta adresi girin." },
      { status: 400 }
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Mesaj çok kısa. Lütfen biraz daha anlatın." },
      { status: 400 }
    );
  }
  if (!data.kvkk) {
    return NextResponse.json(
      { error: "KVKK onayı gerekiyor." },
      { status: 400 }
    );
  }

  const subject = `Wix Destek TR — Yeni talep: ${name}${service ? ` (${service})` : ""}`;
  const receivedAt = new Date().toISOString();

  const body = [
    "Yeni iletişim formu talebi:",
    "",
    `Ad: ${name}`,
    `E-posta: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    service ? `Hizmet: ${service}` : null,
    website ? `Site: ${website}` : null,
    "",
    "Mesaj:",
    message,
    "",
    `Gönderim: ${receivedAt}`,
  ]
    .filter(Boolean)
    .join("\n");

  const providerUrl = process.env.CONTACT_FORWARD_URL;
  const providerKey = process.env.CONTACT_FORWARD_KEY;

  if (providerUrl) {
    try {
      const res = await fetch(providerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(providerKey ? { Authorization: `Bearer ${providerKey}` } : {}),
        },
        body: JSON.stringify({
          to: SITE.email,
          replyTo: email,
          subject,
          text: body,
          html: `<pre style="font-family:system-ui;font-size:14px;white-space:pre-wrap">${escape(body)}</pre>`,
        }),
      });

      if (!res.ok) {
        console.error("Contact forward failed:", res.status, await res.text());
        return NextResponse.json(
          { error: "Mesaj şu an iletilemedi. Lütfen WhatsApp'tan yazın." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Contact forward error:", err);
      return NextResponse.json(
        { error: "Mesaj şu an iletilemedi. Lütfen WhatsApp'tan yazın." },
        { status: 502 }
      );
    }
  } else {
    console.info(
      `[wix-destek.com.tr] Contact form → ${SITE.email}\n${body}\n---`
    );
  }

  return NextResponse.json({ ok: true });
}
