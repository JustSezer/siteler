import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getDb } from '@/lib/db';

export const metadata: Metadata = {
  title: {
    absolute: 'Wix Türkçe Destek | Rehberler, İpuçları ve Kaynaklar',
  },
  description: 'Wix ile ücretsiz web sitesi nasıl kurulur? Türkçe adım adım rehberler, SEO ipuçları, e-ticaret taktikleri ve şablon önerileri burada. Hemen keşfedin.',
  alternates: { canonical: 'https://wix-destek.com.tr' },
  openGraph: {
    title: 'Wix Türkçe Destek | Rehberler, İpuçları ve Kaynaklar',
    description: 'Wix ile ücretsiz web sitesi nasıl kurulur? Türkçe adım adım rehberler, SEO ipuçları ve e-ticaret taktikleri burada.',
    url: 'https://wix-destek.com.tr',
    type: 'website',
  },
};

async function getRecentPosts() {
  try {
    const db = getDb();
    const posts = db.prepare(`
      SELECT * FROM blog_posts
      WHERE published = 1
      ORDER BY created_at DESC
      LIMIT 3
    `).all();
    return posts as Array<{
      id: number; title: string; slug: string; excerpt: string | null;
      content: string; meta_description: string | null; keywords: string | null;
      published: number; created_at: string; updated_at: string;
    }>;
  } catch {
    return [];
  }
}

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Kolay Başlangıç',
    description: 'Teknik bilgi gerektirmeden dakikalar içinde profesyonel bir web sitesi oluşturun.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: '800+ Şablon',
    description: 'Her sektör için profesyonelce tasarlanmış yüzlerce şablon arasından seçim yapın.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'E-Ticaret',
    description: 'Güçlü online mağaza araçlarıyla ürünlerinizi dünyaya satın.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'SEO Araçları',
    description: 'Dahili SEO araçlarıyla Google\'da üst sıralara çıkın ve daha fazla ziyaretçi kazanın.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobil Uyumlu',
    description: 'Tüm cihazlarda mükemmel görünen, tamamen responsive web siteleri oluşturun.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '7/24 Destek',
    description: 'Wix\'in kapsamlı destek merkezi ve topluluğuyla her an yardım alın.',
  },
];

export default async function HomePage() {
  const recentPosts = await getRecentPosts();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-500 via-secondary-600 to-primary-700 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Türkiye&apos;nin #1 Wix Destek Kaynağı
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Wix Türkçe Destek:{' '}
                <span className="text-primary-300 relative">
                  Rehberler
                </span>{' '}
                <br className="hidden sm:block" />
                ve Kaynaklar
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                Kapsamlı Türkçe rehberlerimizle Wix&apos;i en iyi şekilde kullanın.
                Web sitesi kurulumundan SEO&apos;ya, e-ticaretten blog yönetimine kadar her konuda destek burada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/git/wix-start"
                  className="bg-primary-500 hover:bg-primary-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
                >
                  Wix&apos;i Ücretsiz Dene →
                </Link>
                <Link
                  href="/blog"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
                >
                  Rehberleri İncele
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ücretsiz Plan Mevcut
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kredi Kartı Gerekmez
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Türkçe Destek
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Neden Wix?
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                230 milyondan fazla kullanıcısıyla Wix, dünyanın en popüler web sitesi oluşturma platformudur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        {recentPosts.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                    Son Rehberler
                  </h2>
                  <p className="text-gray-500">Wix hakkında en güncel bilgiler ve ipuçları</p>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  Tümünü Gör
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>

              <div className="text-center mt-10 sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors"
                >
                  Tüm Rehberleri Gör →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Hemen Başlamaya Hazır mısınız?
            </h2>
            <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
              Wix ile ücretsiz web sitenizi şimdi oluşturun. Kodlama bilgisi gerekmez,
              dakikalar içinde yayında olun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/git/wix-start"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg"
              >
                Ücretsiz Başla →
              </Link>
              <Link
                href="/git/wix-premium"
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg border border-primary-500"
              >
                Premium Planları Gör
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
