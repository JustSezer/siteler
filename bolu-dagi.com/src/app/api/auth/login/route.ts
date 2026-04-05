import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/lib/db";
import { createToken } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown";
  const { allowed, retryAfter } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: `Çok fazla deneme. ${retryAfter} saniye sonra tekrar deneyin.` },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  try {
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Geçersiz istek formatı." }, { status: 415 });
    }

    let body: { email?: string; password?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Geçersiz JSON." }, { status: 400 });
    }

    const { email, password } = body;
    if (!email || !password || typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Email ve şifre gerekli." }, { status: 400 });
    }
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Geçersiz kimlik bilgileri." }, { status: 401 });
    }
    if (password.length > 72) {
      return NextResponse.json({ error: "Geçersiz kimlik bilgileri." }, { status: 401 });
    }

    const user = getUserByEmail(email);
    if (!user) {
      await bcrypt.compare(password, "$2a$12$x".padEnd(60, "0"));
      return NextResponse.json({ error: "Geçersiz kimlik bilgileri." }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Geçersiz kimlik bilgileri." }, { status: 401 });
    }

    const token = await createToken(user.id);
    const response = NextResponse.json({ success: true, name: user.name });
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
