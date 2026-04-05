import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/db";
import { siteConfig } from "@/lib/config";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  const latestPosts = getAllPosts(6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Düzce Et Mangal - Meşe közünde mangal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
              style={{ left: `${20 + i * 15}%`, top: `${10 + i * 12}%`, animationDelay: `${i * 1.2}s` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Düzce&apos;nin <span className="animate-shimmer">Mangal Lezzeti</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-200 mb-6 sm:mb-8 animate-fade-in-up-delay max-w-2xl mx-auto leading-relaxed">
            Meşe kömürü ateşinde pişen geleneksel lezzetler, mangal tarifleri ve et rehberi. Düzce mangal kültürünün en kapsamlı adresi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-2">
            <Link href="/blog" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all hover:scale-105 animate-pulse-glow text-center">
              Tarifleri Keşfet
            </Link>
            <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="w-full sm:w-auto border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all hover:scale-105 text-center">
              {siteConfig.businessName} →
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-800 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div><div className="text-2xl sm:text-3xl font-bold text-amber-400">30+</div><div className="text-xs sm:text-sm mt-1">Yıllık Tecrübe</div></div>
          <div><div className="text-2xl sm:text-3xl font-bold text-amber-400">50+</div><div className="text-xs sm:text-sm mt-1">Mangal Tarifi</div></div>
          <div><div className="text-2xl sm:text-3xl font-bold text-amber-400">100%</div><div className="text-xs sm:text-sm mt-1">Doğal Meşe Közü</div></div>
          <div><div className="text-2xl sm:text-3xl font-bold text-amber-400">Düzce</div><div className="text-xs sm:text-sm mt-1">D100 Karayolu</div></div>
        </div>
      </section>

      {/* About */}
      <section className="py-10 sm:py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 mb-4 sm:mb-6">Düzce Mangal Kültürü</h2>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Düzce, Bolu Dağı&apos;nın eteklerinde, doğanın kalbinde yer alan mangal kültürünün en köklü adreslerinden biridir. Yörenin zengin orman yapısından elde edilen meşe kömürü, ete eşsiz bir lezzet katarken, geleneksel pişirme teknikleri nesilden nesile aktarılmaktadır.
              </p>
              <p className="text-stone-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-orange-700 font-semibold hover:text-orange-600">
                  {siteConfig.businessName}
                </a>, bu geleneği 30 yılı aşkın süredir sürdürmekte ve Düzce&apos;nin mangal kültürünü Türkiye&apos;ye tanıtmaktadır.
              </p>
              <a href={siteConfig.links.about} target="_blank" rel="dofollow" className="inline-block bg-orange-800 hover:bg-orange-900 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors text-sm sm:text-base">
                Hikayemizi Okuyun →
              </a>
            </div>
            <div className="relative aspect-[4/3] sm:aspect-auto">
              <Image src="https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Düzce mangal kültürü" width={600} height={400} sizes="(max-width: 768px) 100vw, 50vw" className="rounded-2xl shadow-xl w-full h-full object-cover" loading="lazy" quality={75} />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 mb-3 sm:mb-4">Son Yazılar</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-sm sm:text-base">Mangal tarifleri, et seçim rehberleri ve Düzce&apos;nin yöresel lezzetleri hakkında en güncel içerikler.</p>
          </div>
          {latestPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden active:scale-[0.98] md:hover:-translate-y-1">
                  {post.cover_image && (
                    <div className="aspect-video overflow-hidden relative">
                      <Image src={post.cover_image} alt={post.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" quality={70} />
                    </div>
                  )}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {post.category_name && <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">{post.category_name}</span>}
                    <h3 className="text-base sm:text-lg font-bold text-stone-800 mt-2.5 sm:mt-3 mb-1.5 sm:mb-2 group-hover:text-orange-700 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-stone-500 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs text-stone-400">
                      <span>{new Date(post.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span>{post.reading_time} dk okuma</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-stone-400"><p className="text-lg">Henüz blog yazısı eklenmemiş.</p></div>
          )}
          {latestPosts.length > 0 && (
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/blog" className="inline-block bg-orange-800 hover:bg-orange-900 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-colors text-sm sm:text-base">Tüm Yazıları Gör →</Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-900 to-stone-900 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Düzce&apos;nin Efsane Mangal Lezzetini Tatmaya Hazır mısınız?</h2>
          <p className="text-stone-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">D100 Karayolu üzerinde, Bolu Dağı&apos;nın eşsiz doğası içinde sizi bekliyoruz.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href={siteConfig.links.menu} target="_blank" rel="dofollow" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all hover:scale-105 text-center">Menümüze Göz Atın</a>
            <a href={siteConfig.links.directions} target="_blank" rel="dofollow" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-stone-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all text-center">Nasıl Gidilir?</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 sm:py-16 bg-stone-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6"><NewsletterForm /></div>
      </section>

      {/* SEO Content */}
      <section className="py-10 sm:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6">Düzce Et Mangal Hakkında</h2>
          <div className="prose prose-stone max-w-none space-y-3 sm:space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>Düzce et mangal</strong> denildiğinde akla ilk gelen isim olan{" "}
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-orange-700 font-semibold hover:text-orange-600">İbrahim&apos;in Yeri</a>,
              Bolu Dağı eteklerinde D100 Karayolu üzerinde konumlanan, 30 yılı aşkın tecrübesiyle bölgenin en köklü et mangal restoranıdır.
            </p>
            <p>Düzce&apos;nin eşsiz doğası ve meşe ormanlarından elde edilen doğal kömürle hazırlanan mangal lezzetleri, yörenin gastronomi kültürünün en önemli parçasıdır.</p>
            <p>
              <a href={siteConfig.links.store} target="_blank" rel="dofollow" className="text-orange-700 font-semibold hover:text-orange-600">Yöresel mağazamızda</a>{" "}
              Düzce&apos;nin doğal ürünlerini, ev yapımı reçelleri ve geleneksel lezzetleri bulabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
