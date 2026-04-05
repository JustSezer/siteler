import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { createSession } from "@/lib/auth";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla deneme. Lütfen bekleyin." }, { status: 429 });
  }

  let body: { username?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const { username, password } = body;

  if (!username || !password || typeof username !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "Kullanıcı adı ve şifre gerekli" }, { status: 400 });
  }

  const envUsername = process.env.ADMIN_USERNAME;
  const envPassword = process.env.ADMIN_PASSWORD;

  if (!envUsername || !envPassword) {
    return NextResponse.json({ error: "Sunucu yapılandırma hatası" }, { status: 500 });
  }

  // Timing-safe comparison
  const usernameMatch =
    username.length === envUsername.length &&
    crypto.timingSafeEqual(Buffer.from(username), Buffer.from(envUsername));

  const passwordMatch =
    password.length === envPassword.length &&
    crypto.timingSafeEqual(Buffer.from(password), Buffer.from(envPassword));

  if (!usernameMatch || !passwordMatch) {
    return NextResponse.json({ error: "Kullanıcı adı veya şifre hatalı" }, { status: 401 });
  }

  createSession(username);
  return NextResponse.json({ success: true });
}
