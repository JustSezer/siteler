import { NextRequest, NextResponse } from "next/server";
import { createSubscriber, getSubscribers, unsubscribeByEmail } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyCsrfFromRequest } from "@/lib/csrf";

export async function GET() {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }
  try {
    const subscribers = getSubscribers();
    return NextResponse.json(subscribers);
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const { allowed, retryAfter } = checkRateLimit(`newsletter:${ip}`);
  if (!allowed) {
    return NextResponse.json(
      { error: "Çok fazla deneme. Lütfen bekleyin." },
      {
        status: 429,
        headers: retryAfter ? { "Retry-After": String(retryAfter) } : {},
      }
    );
  }

  try {
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Geçersiz istek." }, { status: 415 });
    }

    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "E-posta adresi gerekli." }, { status: 400 });
    }

    const trimmed = email.toLowerCase().trim();
    if (trimmed.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return NextResponse.json({ error: "Geçersiz e-posta adresi." }, { status: 400 });
    }

    try {
      createSubscriber(trimmed);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "";
      if (message.includes("UNIQUE")) {
        return NextResponse.json({ success: true, message: "Zaten abonesiniz." });
      }
      throw err;
    }

    return NextResponse.json({ success: true, message: "Abonelik başarılı!" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }
  if (!verifyCsrfFromRequest(req)) {
    return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });
  }
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "E-posta adresi gerekli." }, { status: 400 });
    }
    unsubscribeByEmail(email.trim().toLowerCase());
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
