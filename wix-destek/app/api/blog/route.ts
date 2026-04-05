import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getSessionFromCookies } from '@/lib/auth';

// Simple rate limiting for GET requests
const apiRateLimit = new Map<string, { count: number; resetAt: number }>();

function checkApiRateLimit(ip: string, limit = 60): boolean {
  const now = Date.now();
  const entry = apiRateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    apiRateLimit.set(ip, { count: 1, resetAt: now + 60 * 1000 });
    return true;
  }

  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

function getIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for') || 'unknown';
}

export async function GET(request: NextRequest) {
  const ip = getIp(request);
  if (!checkApiRateLimit(ip)) {
    return NextResponse.json({ message: 'Rate limit aşıldı.' }, { status: 429 });
  }

  try {
    const db = getDb();
    const { searchParams } = new URL(request.url);
    const all = searchParams.get('all') === 'true';

    const posts = all
      ? db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all()
      : db.prepare('SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC').all();

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ message: 'Sunucu hatası.' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = getSessionFromCookies();
  if (!session) {
    return NextResponse.json({ message: 'Yetkisiz erişim.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, excerpt, content, meta_description, keywords, published } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: 'Başlık, slug ve içerik zorunludur.' },
        { status: 400 }
      );
    }

    // Sanitize slug
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').trim();

    const db = getDb();

    // Check slug uniqueness
    const existing = db.prepare('SELECT id FROM blog_posts WHERE slug = ?').get(cleanSlug);
    if (existing) {
      return NextResponse.json(
        { message: 'Bu slug zaten kullanılıyor.' },
        { status: 409 }
      );
    }

    const result = db.prepare(`
      INSERT INTO blog_posts (title, slug, excerpt, content, meta_description, keywords, published)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      title.trim(),
      cleanSlug,
      excerpt?.trim() || null,
      content,
      meta_description?.trim() || null,
      keywords?.trim() || null,
      published ? 1 : 0
    );

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Yazı oluşturuldu.' }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Sunucu hatası.' }, { status: 500 });
  }
}
