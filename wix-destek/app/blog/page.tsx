import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getDb } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Wix Rehberleri ve İpuçları',
  description: 'Wix hakkında kapsamlı Türkçe rehberler: web sitesi kurulumu, SEO optimizasyonu, e-ticaret, şablon seçimi ve Wix vs WordPress karşılaştırması.',
  alternates: { canonical: 'https://wix-destek.com.tr/blog' },
  openGraph: {
    title: 'Wix Rehberleri ve İpuçları | Wix Destek',
    description: 'Wix hakkında kapsamlı Türkçe rehberler: web sitesi kurulumu, SEO, e-ticaret ve daha fazlası.',
    url: 'https://wix-destek.com.tr/blog',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Ana Sayfa',
      item: 'https://wix-destek.com.tr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://wix-destek.com.tr/blog',
    },
  ],
};

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  meta_description: string | null;
  keywords: string | null;
  published: number;
  created_at: string;
  updated_at: string;
}

async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const db = getDb();
    const posts = db.prepare(`
      SELECT * FROM blog_posts
      WHERE published = 1
      ORDER BY created_at DESC
    `).all();
    return posts as BlogPost[];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Wix Türkçe Rehberleri
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Wix hakkında bilmeniz gereken her şey: kurulum rehberleri, SEO ipuçları,
                e-ticaret tavsiyeleri ve Wix vs WordPress karşılaştırmaları.
              </p>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-lg">Henüz blog yazısı yok.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Featured first post */}
              {posts.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <BlogCard post={posts[0]} featured />
                  </div>
                </div>
              )}

              {/* Rest of posts */}
              {posts.length > 1 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Tüm Yazılar</h2>
                  <div className="space-y-4">
                    {posts.slice(1).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
