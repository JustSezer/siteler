import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDb } from '@/lib/db';
import { sanitizeHtml } from '@/lib/sanitize';

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

interface PageProps {
  params: { slug: string };
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const db = getDb();
    const post = db.prepare('SELECT * FROM blog_posts WHERE slug = ? AND published = 1').get(slug);
    return post as BlogPost | null;
  } catch {
    return null;
  }
}

async function getRelatedPosts(currentSlug: string): Promise<BlogPost[]> {
  try {
    const db = getDb();
    const posts = db.prepare(`
      SELECT * FROM blog_posts
      WHERE slug != ? AND published = 1
      ORDER BY RANDOM()
      LIMIT 3
    `).all(currentSlug);
    return posts as BlogPost[];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Yazı Bulunamadı' };
  }

  return {
    title: post.title,
    description: post.meta_description || post.excerpt || undefined,
    keywords: post.keywords ? post.keywords.split(',').map(k => k.trim()) : undefined,
    alternates: {
      canonical: `https://wix-destek.com.tr/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.meta_description || post.excerpt || undefined,
      type: 'article',
      url: `https://wix-destek.com.tr/blog/${post.slug}`,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || post.excerpt || undefined,
    },
  };
}

function estimateReadingTime(content: string): number {
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(wordCount / 200);
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.slug);
  const readingTime = estimateReadingTime(post.content);
  const formattedDate = formatDate(post.created_at);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Organization',
      name: 'Wix Destek',
      url: 'https://wix-destek.com.tr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wix Destek',
      url: 'https://wix-destek.com.tr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wix-destek.com.tr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://wix-destek.com.tr/blog/${post.slug}`,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://wix-destek.com.tr/og-image.jpg',
      width: 1200,
      height: 630,
    },
    keywords: post.keywords || '',
    inLanguage: 'tr-TR',
    url: `https://wix-destek.com.tr/blog/${post.slug}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Wix Destek Blog',
      url: 'https://wix-destek.com.tr/blog',
    },
  };

  const breadcrumbJsonLd = {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav
              className="flex items-center space-x-2 text-sm text-gray-500"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2 list-none p-0 m-0">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                    Anasayfa
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-primary-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-gray-900 line-clamp-1" aria-current="page">
                    {post.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span className="bg-primary-50 text-primary-700 font-semibold px-3 py-1 rounded-full">
                Wix Rehberi
              </span>
              <span>{readingTime} dakika okuma</span>
              <span>{formattedDate}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-gray-500 leading-relaxed border-l-4 border-primary-500 pl-6 italic">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Hero image placeholder */}
          <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center mb-10 shadow-lg">
            <div className="text-white text-center">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-lg font-semibold opacity-80">Wix Destek Rehberi</p>
            </div>
          </div>

          {/* Content — sanitizeHtml ile XSS koruması uygulandı */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
          />

          {/* CTA Box */}
          <div className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Wix&apos;i Hemen Deneyin!</h3>
            <p className="text-primary-100 mb-6">
              Bu rehberdeki bilgileri uygulamaya koymaya hazır mısınız? Wix ile ücretsiz başlayın.
            </p>
            <Link
              href="/git/wix-start"
              className="inline-block bg-white text-primary-600 font-bold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
            >
              Ücretsiz Web Sitesi Oluştur →
            </Link>
          </div>

          {/* Keywords */}
          {post.keywords && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3 font-medium">İlgili Konular:</p>
              <div className="flex flex-wrap gap-2">
                {post.keywords.split(',').map((keyword, i) => (
                  <span key={i} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <h3 className="font-bold text-gray-900 hover:text-primary-600 transition-colors mb-2 line-clamp-2 text-sm">
                      {relatedPost.title}
                    </h3>
                  </Link>
                  {relatedPost.excerpt && (
                    <p className="text-gray-500 text-xs line-clamp-2">{relatedPost.excerpt}</p>
                  )}
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="text-primary-600 text-xs font-semibold mt-3 inline-block hover:text-primary-700"
                  >
                    Oku →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
