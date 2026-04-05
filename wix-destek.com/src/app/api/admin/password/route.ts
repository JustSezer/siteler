import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated, getSessionUser, verifyPassword, hashPassword } from "@/lib/auth";
import { getUserByUsername, updateUserPassword } from "@/lib/db";
import { verifyCsrfFromRequest } from "@/lib/csrf";
import { rateLimit } from "@/lib/rate-limit";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function PUT(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed } = rateLimit(`pw:${ip}`, 5, 300_000);
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla deneme. 5 dakika bekleyin." }, { status: 429 });
  }

  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!verifyCsrfFromRequest(request)) {
    return NextResponse.json({ error: "Geçersiz CSRF token" }, { status: 403 });
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: { currentPassword?: string; newPassword?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { currentPassword, newPassword } = body;

  if (!currentPassword || !newPassword || typeof currentPassword !== "string" || typeof newPassword !== "string") {
    return NextResponse.json({ error: "Mevcut şifre ve yeni şifre gerekli" }, { status: 400 });
  }

  if (newPassword.length < 8) {
    return NextResponse.json({ error: "Yeni şifre en az 8 karakter olmalı" }, { status: 400 });
  }

  const username = await getSessionUser();
  if (!username) {
    return NextResponse.json({ error: "Session error" }, { status: 401 });
  }

  const user = await getUserByUsername(username);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const isCurrentValid = await verifyPassword(currentPassword, user.password_hash);
  if (!isCurrentValid) {
    return NextResponse.json({ error: "Mevcut şifre yanlış" }, { status: 403 });
  }

  const newHash = await hashPassword(newPassword);
  await updateUserPassword(user.id, newHash);

  return NextResponse.json({ success: true });
}
