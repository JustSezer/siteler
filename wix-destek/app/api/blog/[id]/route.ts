import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getSessionFromCookies } from '@/lib/auth';

interface RouteParams {
  params: { id: string };
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'Geçersiz ID.' }, { status: 400 });
    }

    const db = getDb();
    const post = db.prepare('SELECT * FROM blog_posts WHERE id = ?').get(id);

    if (!post) {
      return NextResponse.json({ message: 'Yazı bulunamadı.' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ message: 'Sunucu hatası.' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const session = getSessionFromCookies();
  if (!session) {
    return NextResponse.json({ message: 'Yetkisiz erişim.' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'Geçersiz ID.' }, { status: 400 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, meta_description, keywords, published } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: 'Başlık, slug ve içerik zorunludur.' },
        { status: 400 }
      );
    }

    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').trim();

    const db = getDb();

    // Check slug uniqueness (exclude current post)
    const existing = db.prepare('SELECT id FROM blog_posts WHERE slug = ? AND id != ?').get(cleanSlug, id);
    if (existing) {
      return NextResponse.json(
        { message: 'Bu slug başka bir yazı tarafından kullanılıyor.' },
        { status: 409 }
      );
    }

    const result = db.prepare(`
      UPDATE blog_posts
      SET title = ?, slug = ?, excerpt = ?, content = ?, meta_description = ?,
          keywords = ?, published = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(
      title.trim(),
      cleanSlug,
      excerpt?.trim() || null,
      content,
      meta_description?.trim() || null,
      keywords?.trim() || null,
      published ? 1 : 0,
      id
    );

    if (result.changes === 0) {
      return NextResponse.json({ message: 'Yazı bulunamadı.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Yazı güncellendi.' });
  } catch {
    return NextResponse.json({ message: 'Sunucu hatası.' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const session = getSessionFromCookies();
  if (!session) {
    return NextResponse.json({ message: 'Yetkisiz erişim.' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'Geçersiz ID.' }, { status: 400 });
    }

    const db = getDb();
    const result = db.prepare('DELETE FROM blog_posts WHERE id = ?').run(id);

    if (result.changes === 0) {
      return NextResponse.json({ message: 'Yazı bulunamadı.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Yazı silindi.' });
  } catch {
    return NextResponse.json({ message: 'Sunucu hatası.' }, { status: 500 });
  }
}
