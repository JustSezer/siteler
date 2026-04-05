import { redirect } from 'next/navigation';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
import { getSessionFromCookies } from '@/lib/auth';
import { getDb } from '@/lib/db';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalRedirects: number;
  totalClicks: number;
}

async function getStats(): Promise<Stats> {
  try {
    const db = getDb();
    const total = (db.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number }).count;
    const published = (db.prepare('SELECT COUNT(*) as count FROM blog_posts WHERE published = 1').get() as { count: number }).count;
    const totalRedirects = (db.prepare('SELECT COUNT(*) as count FROM redirects').get() as { count: number }).count;
    const totalClicks = (db.prepare('SELECT COALESCE(SUM(clicks), 0) as total FROM redirects').get() as { total: number }).total;

    return {
      totalPosts: total,
      publishedPosts: published,
      draftPosts: total - published,
      totalRedirects,
      totalClicks,
    };
  } catch {
    return { totalPosts: 0, publishedPosts: 0, draftPosts: 0, totalRedirects: 0, totalClicks: 0 };
  }
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  published: number;
  created_at: string;
}

async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    const db = getDb();
    return db.prepare('SELECT id, title, slug, published, created_at FROM blog_posts ORDER BY created_at DESC LIMIT 5').all() as BlogPost[];
  } catch {
    return [];
  }
}

interface RedirectRecord {
  code: string;
  target_url: string;
  clicks: number;
}

async function getTopRedirects(): Promise<RedirectRecord[]> {
  try {
    const db = getDb();
    return db.prepare('SELECT code, target_url, clicks FROM redirects ORDER BY clicks DESC LIMIT 5').all() as RedirectRecord[];
  } catch {
    return [];
  }
}

export default async function DashboardPage() {
  const session = getSessionFromCookies();
  if (!session) {
    redirect('/admin');
  }

  const [stats, recentPosts, topRedirects] = await Promise.all([
    getStats(),
    getRecentPosts(),
    getTopRedirects(),
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Hoş geldiniz, <strong>{session.username}</strong>!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm font-medium">Toplam Yazı</p>
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalPosts}</p>
            <p className="text-xs text-gray-400 mt-1">{stats.publishedPosts} yayınlandı, {stats.draftPosts} taslak</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm font-medium">Yayında</p>
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.publishedPosts}</p>
            <p className="text-xs text-gray-400 mt-1">Aktif blog yazısı</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm font-medium">Yönlendirmeler</p>
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalRedirects}</p>
            <p className="text-xs text-gray-400 mt-1">Aktif affiliate link</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm font-medium">Toplam Tıklama</p>
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalClicks}</p>
            <p className="text-xs text-gray-400 mt-1">Affiliate tıklama</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between p-6 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Son Yazılar</h2>
              <Link href="/admin/blog" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Tümü →
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="font-medium text-gray-900 text-sm truncate">{post.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">/blog/{post.slug}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {post.published ? 'Yayında' : 'Taslak'}
                    </span>
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Redirects */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Affiliate Linkler</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {topRedirects.map((redirect) => (
                <div key={redirect.code} className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">/git/{redirect.code}</p>
                    <p className="text-gray-400 text-xs mt-0.5 truncate max-w-xs">{redirect.target_url}</p>
                  </div>
                  <span className="bg-primary-50 text-primary-700 text-sm font-bold px-3 py-1 rounded-lg">
                    {redirect.clicks} tık
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-900 mb-4">Hızlı İşlemler</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admin/blog/new"
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Yeni Yazı Ekle
            </Link>
            <Link
              href="/blog"
              target="_blank"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Blogu Görüntüle
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
