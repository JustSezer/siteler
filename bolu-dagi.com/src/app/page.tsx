import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/db";
import { siteConfig } from "@/lib/config";

const TOPICS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Doğa & Yürüyüş",
    desc: "Patikalar, yürüyüş rotaları ve doğa rehberleri",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Mevsimler",
    desc: "Sonbahar renkleri, kış karı, bahar açılışı",
    color: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.049 1.837 2.13v6.078" />
      </svg>
    ),
    title: "Gastronomi",
    desc: "Bolu Dağı lezzetleri ve yöresel mutfak",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: "Fotoğrafçılık",
    desc: "En iyi çekim noktaları ve ışık rehberi",
    color: "bg-violet-50 text-violet-700 border-violet-200",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Seyahat Rehberi",
    desc: "Konaklama, ulaşım ve pratik bilgiler",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Flora & Fauna",
    desc: "Bolu ormanlarının zengin biyoçeşitliliği",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    iconBg: "bg-teal-100 text-teal-600",
  },
];

export default function HomePage() {
  const posts = getAllPosts(9);
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 7);

  return (
    <>
      {/* ── Hero: Split Layout ── */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="animate-fade-left">
              <div className="inline-flex items-center gap-2 bg-green-400/15 border border-green-400/30 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                D100 Karayolu, Türkiye
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Bolu Dağı&apos;nı<br />
                <span className="text-green-400">Keşfedin</span>
              </h1>
              <p className="text-green-200 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Türkiye&apos;nin en etkileyici dağ geçidi. Sonbahar ormanları, yürüyüş rotaları, yöresel lezzetler ve unutulmaz manzaralar sizi bekliyor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-950 font-bold px-7 py-3.5 rounded-xl transition-colors text-base"
                >
                  Yazıları Keşfet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
                <a
                  href={siteConfig.businessUrl}
                  target="_blank"
                  rel="dofollow"
                  className="inline-flex items-center justify-center gap-2 border-2 border-green-400/50 text-green-300 hover:border-green-400 hover:text-green-200 font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
                >
                  {siteConfig.businessName}
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-8 pt-8 border-t border-green-700/50 grid grid-cols-3 gap-4">
                {[
                  { value: "1000m+", label: "Rakım" },
                  { value: "30+", label: "Yıllık Gelenek" },
                  { value: "4", label: "Mevsim Güzelliği" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-300">{stat.value}</div>
                    <div className="text-xs text-green-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image mosaic */}
            <div className="animate-fade-right hidden lg:grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Bolu Dağı sonbahar"
                    fill
                    priority
                    sizes="300px"
                    className="object-cover animate-gentle-pulse"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 to-transparent" />
                </div>
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Yürüyüş rotası"
                    fill
                    sizes="300px"
                    className="object-cover"
                    quality={70}
                  />
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Bolu Dağı lezzet"
                    fill
                    sizes="300px"
                    className="object-cover"
                    quality={70}
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Orman yolu"
                    fill
                    sizes="300px"
                    className="object-cover"
                    quality={70}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Mobile: single hero image */}
            <div className="lg:hidden relative h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bolu Dağı"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Topics Grid ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-950">Konulara Göre Keşfet</h2>
            <p className="text-green-700 mt-2 text-sm sm:text-base">İlginizi çeken alandan okumaya başlayın</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {TOPICS.map((topic) => (
              <Link
                key={topic.title}
                href="/blog"
                className={`group flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all hover:shadow-md active:scale-[0.97] text-center ${topic.color}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${topic.iconBg} group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm leading-tight">{topic.title}</div>
                  <div className="text-xs opacity-70 mt-0.5 leading-tight hidden sm:block">{topic.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featuredPost && (
        <section className="py-12 sm:py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-1 h-6 bg-green-500 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-green-950">Öne Çıkan Yazı</h2>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid md:grid-cols-2 gap-6 md:gap-8 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 active:scale-[0.99]"
            >
              {featuredPost.cover_image && (
                <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px] overflow-hidden">
                  <Image
                    src={featuredPost.cover_image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={75}
                  />
                </div>
              )}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                {featuredPost.category_name && (
                  <span className="inline-block text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3 w-fit">
                    {featuredPost.category_name}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-green-700 leading-relaxed text-sm sm:text-base mb-4 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-green-500 mt-auto">
                  <span>{new Date(featuredPost.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="flex items-center gap-1 font-medium text-green-600 group-hover:gap-2 transition-all">
                    Devamını Oku
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Blog Posts List ── */}
      {otherPosts.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-green-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-green-950">Son Yazılar</h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
                Tümünü Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-green-200 hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                >
                  {post.cover_image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-green-50">
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
                  <div className="p-4 sm:p-5">
                    {post.category_name && (
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full border border-green-100">
                        {post.category_name}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-2.5 mb-1.5 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
                      <span>{new Date(post.published_at).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}</span>
                      <span className="text-green-500">{post.reading_time} dk</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Tüm Blog Yazıları
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA: İbrahim'in Yeri ── */}
      <section className="py-12 sm:py-16 bg-green-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0 400 L200 0 L400 400 Z" fill="white" />
            <path d="M50 400 L250 0 L450 400 Z" fill="white" />
            <path d="M-50 400 L150 0 L350 400 Z" fill="white" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            D100 Karayolu Üzerinde
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Bolu Dağı&apos;nın Efsanevi Lezzetini<br className="hidden sm:block" /> Yerinde Tatmak İster misiniz?
          </h2>
          <p className="text-green-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            30 yılı aşkın tecrübesiyle{" "}
            <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-green-400 hover:text-green-300 font-semibold">
              İbrahim&apos;in Yeri Et Mangal
            </a>
            , meşe közünde pişen eşsiz lezzetleriyle sizi bekliyor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.links.menu}
              target="_blank"
              rel="dofollow"
              className="w-full sm:w-auto bg-green-400 hover:bg-green-300 text-green-950 font-bold px-8 py-3.5 rounded-xl transition-colors text-base text-center"
            >
              Menüyü İncele
            </a>
            <a
              href={siteConfig.links.directions}
              target="_blank"
              rel="dofollow"
              className="w-full sm:w-auto border-2 border-green-400/50 text-green-300 hover:border-green-400 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base text-center"
            >
              Nasıl Gidilir? →
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      <section className="py-10 sm:py-14 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-green-950 mb-4 sm:mb-6">Bolu Dağı Hakkında</h2>
          <div className="prose max-w-none text-green-800 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              <strong>Bolu Dağı</strong>, İstanbul-Ankara karayolu güzergahı üzerinde, Batı Karadeniz Bölgesi&apos;nin kalbinde yer alan eşsiz bir doğa hazinesidir. Deniz seviyesinden yaklaşık 1.100 metreye kadar yükselen bu görkemli dağ geçidi, her mevsim farklı bir güzellik sunar.
            </p>
            <p>
              Zengin meşe, kayın ve gürgen ormanlarıyla kaplı Bolu Dağı, özellikle sonbahar aylarında binlerce ziyaretçiyi büyüleyen renk şöleniyle ünlüdür. Yaz aylarında ise serin havası ve yeşilin her tonuyla kaçış noktasına dönüşür.
            </p>
            <p>
              D100 karayolunun bu efsanevi güzergahında, 30 yılı aşkın süredir hizmet veren{" "}
              <a href={siteConfig.businessUrl} target="_blank" rel="dofollow" className="text-green-700 font-semibold hover:text-green-600">
                İbrahim&apos;in Yeri Et Mangal
              </a>
              , hem yerel halkın hem de yolcuların vazgeçilmez durağı olmuştur. Meşe kömüründe pişen etlerin eşsiz aroması, Bolu Dağı deneyimini tamamlayan en önemli unsurlardan biridir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
