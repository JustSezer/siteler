import { NextRequest, NextResponse } from "next/server";
import { getDb, Post } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("q")?.trim();
    if (!q || q.length < 2) {
      return NextResponse.json({ error: "Arama terimi en az 2 karakter olmalı." }, { status: 400 });
    }

    const safeQuery = `%${q.substring(0, 100)}%`;
    const db = getDb();

    const posts = db.prepare(`
      SELECT p.*, c.name as category_name
      FROM posts p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.is_published = 1
        AND (p.title LIKE ? OR p.excerpt LIKE ? OR p.tags LIKE ?)
      ORDER BY p.published_at DESC
      LIMIT 20
    `).all(safeQuery, safeQuery, safeQuery) as Post[];

    return NextResponse.json(posts, {
      headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
    });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
