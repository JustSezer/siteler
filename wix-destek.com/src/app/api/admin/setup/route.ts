import { NextRequest, NextResponse } from "next/server";
import { getUserCount, createUser } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
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
  const { allowed } = rateLimit(ip, 5, 3_600_000);
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla deneme. 1 saat bekleyin." }, { status: 429 });
  }

  const userCount = await getUserCount();
  if (userCount > 0) {
    return NextResponse.json({ error: "Kurulum zaten tamamlanmış" }, { status: 403 });
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: { username?: string; password?: string; displayName?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { username, password, displayName } = body;

  if (!username || !password || typeof username !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "Kullanıcı adı ve şifre gerekli" }, { status: 400 });
  }

  if (username.length < 3 || username.length > 50) {
    return NextResponse.json({ error: "Kullanıcı adı 3-50 karakter olmalı" }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Şifre en az 8 karakter olmalı" }, { status: 400 });
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return NextResponse.json({ error: "Kullanıcı adı sadece harf, rakam ve _ içerebilir" }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const name = displayName && typeof displayName === "string" ? displayName.slice(0, 100) : username;

  await createUser(username, passwordHash, name);

  return NextResponse.json({ success: true }, { status: 201 });
}

export async function GET() {
  const userCount = await getUserCount();
  return NextResponse.json({ setupNeeded: userCount === 0 });
}
