import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const { allowed } = checkRateLimit(`search:${ip}`);
  if (!allowed) {
    return NextResponse.json([], { status: 429 });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  if (!q.trim() || q.length > 100) {
    return NextResponse.json([]);
  }

  try {
    const search = `%${q}%`;
    const db = getDb();
    const posts = db.prepare(`
      SELECT id, title, slug, excerpt, published_at, reading_time
      FROM posts
      WHERE is_published = 1
        AND published_at <= datetime('now')
        AND (title LIKE ? OR excerpt LIKE ? OR tags LIKE ?)
      ORDER BY published_at DESC
      LIMIT 10
    `).all(search, search, search);

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
