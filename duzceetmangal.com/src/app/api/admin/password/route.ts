import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getUserById, getDb } from "@/lib/db";
import { verifyCsrfFromRequest } from "@/lib/csrf";
import bcrypt from "bcryptjs";

export async function PUT(req: NextRequest) {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }
  if (!verifyCsrfFromRequest(req)) {
    return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });
  }

  try {
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Geçersiz istek formatı." }, { status: 415 });
    }

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Mevcut ve yeni şifre gerekli." }, { status: 400 });
    }

    if (typeof newPassword !== "string" || newPassword.length < 8) {
      return NextResponse.json({ error: "Yeni şifre en az 8 karakter olmalı." }, { status: 400 });
    }

    if (newPassword.length > 72) {
      return NextResponse.json({ error: "Şifre çok uzun." }, { status: 400 });
    }

    const user = getUserById(auth.userId);
    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
    }

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Mevcut şifre yanlış." }, { status: 401 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const db = getDb();
    db.prepare("UPDATE users SET password = ? WHERE id = ?").run(hashedPassword, auth.userId);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
