import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByEmail, getSubscriberByEmail } from "@/lib/db";

export async function POST(req: NextRequest) {
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

    const existing = getSubscriberByEmail(trimmed);
    if (!existing) {
      return NextResponse.json({ success: true, message: "Bu e-posta abonelik listesinde bulunamadı." });
    }

    unsubscribeByEmail(trimmed);
    return NextResponse.json({ success: true, message: "Aboneliğiniz iptal edildi." });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
