import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

// Ensure subscribers table exists
function ensureTable() {
  const db = getDb();
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      subscribed_at TEXT NOT NULL DEFAULT (datetime('now')),
      is_active INTEGER DEFAULT 1
    )
  `);
}

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

    ensureTable();
    const db = getDb();

    try {
      db.prepare("INSERT INTO subscribers (email) VALUES (?)").run(trimmed);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "";
      if (message.includes("UNIQUE")) {
        return NextResponse.json({ success: true, message: "Zaten abonessiniz." });
      }
      throw err;
    }

    return NextResponse.json({ success: true, message: "Abonelik başarılı!" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
