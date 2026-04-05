import { notFound, redirect } from 'next/navigation';
import { getDb } from '@/lib/db';

interface PageProps {
  params: { code: string };
}

interface RedirectRecord {
  id: number;
  code: string;
  target_url: string;
  clicks: number;
  created_at: string;
}

async function getRedirect(code: string): Promise<RedirectRecord | null> {
  try {
    const db = getDb();
    const record = db.prepare('SELECT * FROM redirects WHERE code = ?').get(code);
    if (record) {
      // Increment click count
      db.prepare('UPDATE redirects SET clicks = clicks + 1 WHERE code = ?').run(code);
    }
    return record as RedirectRecord | null;
  } catch {
    return null;
  }
}

export default async function RedirectPage({ params }: PageProps) {
  const record = await getRedirect(params.code);

  if (!record) {
    notFound();
  }

  redirect(record.target_url);
}
