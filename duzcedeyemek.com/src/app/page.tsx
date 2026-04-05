import Link from "next/link";
import { getAllPosts } from "@/lib/db";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getAllPosts(7);
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const morePosts = posts.slice(4, 7);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#1a1a1a] overflow-hidden min-h-[480px] sm:min-h-[540px] flex items-center">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80"
            alt="Düzce yemek kültürü"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            decoding="async"
            width={1400}
            height={700}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-bold text-[#e9c46a] uppercase tracking-[0.15em] mb-4">
              Düzce Mutfak Rehberi
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-5"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Düzce&apos;nin{" "}
              <span className="text-[#c2571a]">Lezzetlerini</span>{" "}
              Keşfet
            </h1>
            <p className="text-[#c8c0b8] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Geleneksel tarifler, mekan rehberi ve Düzce mutfak kültürünü
              anlatan yazılar — hepsi burada.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-[#c2571a] hover:bg-[#a3440f] active:bg-[#8b3a0d] text-white font-bold px-6 py-3 rounded-xl transition-colors duration-150 text-sm sm:text-base"
              >
                Yazıları Keşfet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-150 text-sm sm:text-base border border-white/20"
              >
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES / HIGHLIGHTS ===== */}
      <section className="bg-white border-b border-[#ede8e0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: "Mekan Rehberi",
                desc: "Düzce'nin en iyi restoran, kafe ve yemek mekanlarına kapsamlı rehber.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Geleneksel Tarifler",
                desc: "Kuşaktan kuşağa aktarılan Düzce ve Karadeniz mutfağından otantik tarifler.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                ),
                title: "Yerel Ürünler",
                desc: "Fındık, orman balı, köy peyniri — Düzce'nin eşsiz yerel ürünleri.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#e8f4ee] flex items-center justify-center text-[#2d6a4f]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAGAZINE GRID ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Section header */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-7 bg-[#c2571a] rounded-full inline-block" />
            <h2
              className="text-xl sm:text-2xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Son Yazılar
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#c2571a] hover:text-[#a3440f] transition-colors duration-150"
          >
            Tümünü Gör &rarr;
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 text-[#6b6b6b]">
            <p className="text-lg">Henüz yazı eklenmemiş.</p>
            <p className="text-sm mt-2">Blog yazıları yakında burada olacak!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured post — large */}
            {featuredPost && (
              <article className="lg:col-span-2 bg-white rounded-2xl border border-[#ede8e0] overflow-hidden hover:border-[#c2571a] hover:shadow-xl transition-all duration-200 group flex flex-col">
                {featuredPost.cover_image ? (
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={featuredPost.cover_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      decoding="async"
                      width={800}
                      height={450}
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-[#c2571a]/10 to-[#e9c46a]/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#c2571a]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block self-start text-xs font-bold text-[#2d6a4f] bg-[#e8f4ee] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                    {featuredPost.category}
                  </span>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="text-[#1a1a1a] hover:text-[#c2571a] transition-colors duration-150"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-[#6b6b6b] text-sm sm:text-base line-clamp-3 mb-5 flex-1 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#c2571a] hover:text-[#a3440f] font-bold text-sm transition-colors duration-150 self-start"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            )}

            {/* Recent posts — sidebar stack */}
            <div className="flex flex-col gap-4">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-[#ede8e0] hover:border-[#c2571a] hover:shadow-md transition-all duration-200 p-4 flex gap-3 group"
                >
                  {post.cover_image ? (
                    <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width={80}
                        height={80}
                      />
                    </div>
                  ) : (
                    <div className="shrink-0 w-20 h-20 rounded-xl bg-[#fdf0e8] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#c2571a]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="min-w-0 flex flex-col justify-center">
                    <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider mb-1">
                      {post.category}
                    </span>
                    <h3
                      className="text-sm font-bold leading-snug line-clamp-2"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#1a1a1a] hover:text-[#c2571a] transition-colors duration-150"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#9a9a9a] mt-1">{post.reading_time} dk okuma</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ===== MORE POSTS GRID ===== */}
      {morePosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1.5 h-7 bg-[#2d6a4f] rounded-full inline-block" />
            <h2
              className="text-xl sm:text-2xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Diğer Yazılar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {morePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ===== CTA BAND ===== */}
      <section className="bg-[#c2571a] px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Tüm Düzce Lezzetlerini Keşfet
          </h2>
          <p className="text-[#f5d9c8] text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Restoranlar, geleneksel tarifler, yerel ürünler ve daha fazlası — Düzce
            mutfağının tüm zenginliğine tek yerden ulaş.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#e9c46a] hover:bg-[#d4ae55] active:bg-[#bfa048] text-[#1a1a1a] font-bold px-8 py-3.5 rounded-xl transition-colors duration-150 text-sm sm:text-base"
          >
            Tüm Yazıları Gör
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== SEO / ABOUT SECTION ===== */}
      <section className="bg-[#faf7f2] border-t border-[#ede8e0] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xl sm:text-2xl font-bold mb-6 text-center text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Düzce&apos;de Yemek Hakkında
          </h2>
          <div className="text-[#6b6b6b] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-[#1a1a1a]">Düzce&apos;de Yemek</strong>,
              Karadeniz&apos;in bereketli topraklarında filizlenen Düzce mutfak kültürünü
              keşfetmek isteyenler için hazırlanmış kapsamlı bir rehberdir. Şehrin dört
              bir yanına yayılmış restoran ve kafelerden geleneksel tariflere, yerel
              ürünlerden mekan değerlendirmelerine kadar her şeyi burada bulabilirsiniz.
            </p>
            <p>
              Fındığıyla meşhur Düzce, orman balı, taze peynir ve köy ürünleriyle de
              öne çıkan zengin bir gastronomi kültürüne sahiptir. Efteni Gölü
              kenarındaki balık restoranlarından Akçakoca yolu üzerindeki
              kahvaltıcılara, şehir merkezindeki et lokantalarından köy usulü yemek
              yapan mekanlara kadar her damak zevkine hitap eden seçenekler mevcuttur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
