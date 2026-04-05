import { redirect } from 'next/navigation';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
import { getSessionFromCookies } from '@/lib/auth';
import { getDb } from '@/lib/db';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  published: number;
  created_at: string;
  updated_at: string;
}

async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const db = getDb();
    return db.prepare('SELECT id, title, slug, published, created_at, updated_at FROM blog_posts ORDER BY created_at DESC').all() as BlogPost[];
  } catch {
    return [];
  }
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export default async function AdminBlogPage() {
  const session = getSessionFromCookies();
  if (!session) {
    redirect('/admin');
  }

  const posts = await getAllPosts();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog Yazıları</h1>
            <p className="text-gray-500 mt-1">{posts.length} yazı bulundu</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Yeni Yazı
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-sm">Henüz blog yazısı yok.</p>
              <Link href="/admin/blog/new" className="text-primary-600 text-sm font-medium mt-2 inline-block">
                İlk yazıyı ekle →
              </Link>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Başlık</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Slug</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Durum</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Tarih</th>
                  <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900 text-sm line-clamp-1">{post.title}</p>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-gray-400 text-xs font-mono">{post.slug}</span>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${post.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {post.published ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-gray-400 text-xs">{formatDate(post.created_at)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                          title="Görüntüle"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                        <Link
                          href={`/admin/blog/${post.id}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors p-1"
                          title="Düzenle"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
