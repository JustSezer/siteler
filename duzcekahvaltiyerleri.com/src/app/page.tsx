import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/db";
import { siteConfig } from "@/lib/config";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  const allPosts = getAllPosts(7);
  const [featuredPost, ...gridPosts] = allPosts;

  return (
    <>
      {/* Hero — Split Screen */}
      <section className="grid md:grid-cols-2 min-h-[75vh] md:min-h-[85vh]">
        {/* Left: Text Panel */}
        <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center px-6 sm:px-10 lg:px-16 py-10 sm:py-14 md:py-16 order-2 md:order-1">
          <div className="max-w-lg animate-fade-in-left">
            <span className="inline-block text-amber-200 text-sm font-semibold tracking-wider uppercase mb-4">
              ☀️ Düzce&apos;nin En İyi Kahvaltı Rehberi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Sabahın Tadını{" "}
              <span className="animate-shimmer-gold">Düzce&apos;de</span>{" "}
              Çıkarın
            </h1>
            <p className="text-amber-100 text-base sm:text-lg leading-relaxed mb-8">
              Yöresel bal, taze kaymak ve ev yapımı reçellerle hazırlanan nefis kahvaltı sofralarını, Düzce&apos;nin en güzel mekanlarını ve kahvaltı kültürünü keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog"
                className="bg-white text-amber-800 font-bold px-7 py-3.5 rounded-xl text-base hover:bg-amber-50 transition-all hover:scale-105 animate-soft-pulse text-center"
              >
                Yazıları Keşfet
              </Link>
              <a
                href={siteConfig.businessUrl}
                target="_blank"
                rel="dofollow"
                className="border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl text-base transition-all text-center"
              >
                {siteConfig.businessName} →
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image Panel */}
        <div className="relative min-h-[300px] sm:min-h-[400px] order-1 md:order-2">
          <Image
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Düzce kahvaltı sofrası"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent md:bg-gradient-to-l" />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl animate-fade-in-right">
            <div className="flex items-center gap-3">
              <span className="text-2xl">☕</span>
              <div>
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Sabah Keyfi</div>
                <div className="text-sm font-bold text-stone-800">Düzce&apos;de başlar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-amber-100 bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="text-3xl flex-shrink-0">🍯</div>
              <div>
                <h3 className="font-bold text-amber-900 text-base mb-1">Yöresel Ürünler</h3>
                <p className="text-sm text-stone-600 leading-relaxed">Bolu Dağı&apos;nın eşsiz organik balı, taze kaymak ve ev yapımı reçeller</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-amber-100 bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="text-3xl flex-shrink-0">🍳</div>
              <div>
                <h3 className="font-bold text-amber-900 text-base mb-1">Kahvaltı Mekanları</h3>
                <p className="text-sm text-stone-600 leading-relaxed">Düzce&apos;nin D100 çevresindeki en iyi kahvaltı adreslerini keşfedin</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-amber-100 bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="text-3xl flex-shrink-0">📖</div>
              <div>
                <h3 className="font-bold text-amber-900 text-base mb-1">Kahvaltı Tarifleri</h3>
                <p className="text-sm text-stone-600 leading-relaxed">Geleneksel Türk kahvaltısından sağlıklı tarifler ve püf noktaları</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 sm:py-12 md:py-14 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-px flex-1 bg-amber-200" />
              <h2 className="text-sm font-semibold text-amber-700 uppercase tracking-widest whitespace-nowrap">Öne Çıkan Yazı</h2>
              <div className="h-px flex-1 bg-amber-200" />
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {featuredPost.cover_image && (
                <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
                  <Image
                    src={featuredPost.cover_image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={80}
                  />
                </div>
              )}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                {featuredPost.category_name && (
                  <span className="inline-flex items-center text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-4 w-fit">
                    {featuredPost.category_name}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>{new Date(featuredPost.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="flex items-center gap-1 text-amber-700 font-semibold text-sm">
                    Devamını Oku →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Latest Blog Posts Grid */}
      {gridPosts.length > 0 && (
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Son Yazılar</h2>
              <p className="text-stone-400 text-sm sm:text-base">Kahvaltı kültürü, tarifler ve Düzce&apos;nin en güzel mekanları</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {gridPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {post.cover_image && (
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        quality={70}
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    {post.category_name && (
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full w-fit mb-2">
                        {post.category_name}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-stone-400 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-stone-300 border-t border-stone-50 pt-3 mt-auto">
                      <span>{new Date(post.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "long" })}</span>
                      <span>{post.reading_time} dk okuma</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm sm:text-base"
              >
                Tüm Yazıları Gör →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About / Business CTA */}
      <section className="py-10 sm:py-14 md:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Düzce yöresel kahvaltı"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Düzce&apos;nin Adresi</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2 mb-4 leading-tight">
                Sabah Kahvaltısından Akşam Yemeğine Kadar
              </h2>
              <p className="text-stone-500 leading-relaxed mb-3 text-sm sm:text-base">
                D100 Karayolu üzerinde, Bolu Dağı&apos;nın eşsiz doğası içinde yer alan{" "}
                <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-amber-700 font-semibold hover:text-amber-600">
                  {siteConfig.businessName}
                </a>
                , yöresel lezzetlerin en özgün halini sunmaktadır.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6 text-sm sm:text-base">
                Organik ürünler, taze malzemeler ve geleneksel tariflerle hazırlanan sofralar, Düzce&apos;nin gastronomi kültürünü yaşatmaktadır.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.links.menu}
                  target="_blank"
                  rel="dofollow"
                  className="inline-flex justify-center items-center bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Menüyü İncele
                </a>
                <a
                  href={siteConfig.links.store}
                  target="_blank"
                  rel="dofollow"
                  className="inline-flex justify-center items-center border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Yöresel Mağaza
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterForm />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-10 sm:py-14 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4 sm:mb-6">Düzce Kahvaltı Yerleri Hakkında</h2>
          <div className="prose prose-stone max-w-none space-y-3 sm:space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>Düzce kahvaltı yerleri</strong> arayanlar için hazırladığımız bu rehber, şehrin en güzel sabah mekanlarını, yöresel ürünlerini ve kahvaltı kültürünü kapsamaktadır. Bolu Dağı eteklerinde yer alan Düzce, zengin doğası ve bereketli tarım arazileriyle organik kahvaltılık ürünlerin başkentidir.
            </p>
            <p>
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-amber-700 font-semibold hover:text-amber-600">
                İbrahim&apos;in Yeri Et Mangal
              </a>{" "}
              D100 Karayolu üzerinde Kaynaşlı&apos;da konumlanan ve yörenin en köklü gastronomi mekanlarından biri olan bu adres, sabah kahvaltısından akşam yemeğine kadar geniş menüsuyla hizmet vermektedir.
            </p>
            <p>
              <a href={siteConfig.links.store} target="_blank" rel="dofollow" className="text-amber-700 font-semibold hover:text-amber-600">
                Yöresel mağazamızda
              </a>{" "}
              organik bal, taze kaymak, ev yapımı reçeller ve Düzce&apos;nin diğer doğal ürünlerini bulabilirsiniz. Düzce kahvaltı kültürünü evinize taşıyın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
