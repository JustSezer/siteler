import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

interface RouteParams {
  params: { code: string };
}

interface RedirectRecord {
  id: number;
  code: string;
  target_url: string;
  clicks: number;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const { code } = params;

    if (!code || code.length > 100) {
      return NextResponse.json({ message: 'Geçersiz kod.' }, { status: 400 });
    }

    const db = getDb();
    const record = db.prepare('SELECT * FROM redirects WHERE code = ?').get(code) as RedirectRecord | null;

    if (!record) {
      return NextResponse.json({ message: 'Yönlendirme bulunamadı.' }, { status: 404 });
    }

    // Increment click count
    db.prepare('UPDATE redirects SET clicks = clicks + 1 WHERE code = ?').run(code);

    return NextResponse.json({
      target_url: record.target_url,
      clicks: record.clicks + 1,
    });
  } catch {
    return NextResponse.json({ message: 'Sunucu hatası.' }, { status: 500 });
  }
}
