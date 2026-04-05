import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

async function getLatestPosts() {
  return prisma.post.findMany({
    where: { published: true },
    include: { category: true, tags: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}

async function getCategories() {
  return prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
  });
}

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getLatestPosts(),
    getCategories(),
  ]);

  return (
    <>
      {/* HERO — Mangal fotoğrafı + bordo overlay */}
      <section className="relative overflow-hidden min-h-[540px] sm:min-h-[620px] flex items-center">
        {/* Arka plan fotoğrafı */}
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&auto=format&fit=crop&q=80"
          alt="Bolu mangal kültürü"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Bordo overlay — boluetlokantasi.com'dan belirgin biçimde farklı */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b1c1c]/95 via-[#6b1c1c]/70 to-stone-900/40" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Sol: Başlık + CTA */}
            <div>
              <span className="inline-block text-[#d4a017] text-sm font-semibold tracking-widest uppercase mb-4 border border-[#d4a017]/50 px-3 py-1 rounded-full bg-black/20">
                Bolu&apos;nun Geleneksel Mangal Kültürü
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#faf7f0] leading-tight mb-6">
                Bolu&apos;da Et &amp; Mangal{" "}
                <span className="text-[#d4a017]">Sanatı</span>
              </h1>
              <p className="text-stone-200 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Nesiller boyu aktarılan tarifler, seçkin etler ve açık ateşin
                buluşması. Bolu&apos;nun köklü mangal geleneğini keşfedin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/blog"
                  className="bg-[#d4a017] text-[#2c1810] px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors duration-150 font-bold min-h-[44px] inline-flex items-center justify-center text-center"
                >
                  Hikayeleri Keşfet
                </Link>
                <Link
                  href="/kategoriler"
                  className="border-2 border-[#faf7f0]/60 text-[#faf7f0] px-6 py-3 rounded-lg hover:border-[#d4a017] hover:text-[#d4a017] transition-colors duration-150 font-semibold min-h-[44px] inline-flex items-center justify-center text-center"
                >
                  Tariflere Bak
                </Link>
              </div>
            </div>

            {/* Sağ: Stat badge'leri */}
            <div className="flex flex-col gap-4 lg:items-end">
              {[
                { rakam: "20+", etiket: "Yıllık Gelenek" },
                { rakam: "100+", etiket: "Tarif ve Yazı" },
                { rakam: "Bolu", etiket: "Özgün Tadı" },
              ].map((item) => (
                <div
                  key={item.etiket}
                  className="border border-[#d4a017]/60 bg-black/30 backdrop-blur-sm rounded-xl px-6 py-4 min-w-[200px] flex items-center gap-4"
                >
                  <span className="font-serif text-3xl font-bold text-[#d4a017]">
                    {item.rakam}
                  </span>
                  <span className="text-[#faf7f0] text-sm font-medium">
                    {item.etiket}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLIK BÖLÜMÜ — Alternating layout */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Bölüm 1: Sol metin / Sağ renkli panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-4">
                Mangal Teknikleri
              </h2>
              <div className="w-12 h-0.5 bg-secondary mb-5" />
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Doğru ateş mesafesinden et dinlendirme süresine kadar,
                mükemmel mangal için bilmeniz gereken her şey. Bolu
                ustalarından öğrenilmiş geleneksel yöntemler.
              </p>
              <Link
                href="/kategoriler"
                className="text-primary font-semibold hover:text-red-900 transition-colors duration-150 inline-flex items-center gap-1"
              >
                Teknikleri İncele &rarr;
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary to-red-900 rounded-2xl p-8 text-cream min-h-[200px] flex flex-col justify-center">
              <p className="font-serif text-lg italic leading-relaxed">
                &ldquo;İyi bir mangal sadece ateş değil, sabır, seçim
                ve gelenektir.&rdquo;
              </p>
              <span className="text-secondary text-sm mt-4 font-semibold">
                — Bolu Mangal Ustası
              </span>
            </div>
          </div>

          {/* Bölüm 2: Sol renkli panel / Sağ metin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 text-cream min-h-[200px] flex flex-col justify-center order-last md:order-first">
              <ul className="space-y-3 text-sm">
                {["Dana antrikot", "Kuzu kaburga", "Ciğer şiş", "Dana bonfile"].map((et) => (
                  <li key={et} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{et}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-4">
                Et Seçimi Sırları
              </h2>
              <div className="w-12 h-0.5 bg-secondary mb-5" />
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Hangi kesimin mangalda daha lezzetli olduğunu, nasıl marine
                edileceğini ve Bolu kasaplarından en taze eti nasıl seçeceğinizi
                öğrenin.
              </p>
              <Link
                href="/blog"
                className="text-primary font-semibold hover:text-red-900 transition-colors duration-150 inline-flex items-center gap-1"
              >
                Rehberi Oku &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG YAZILARI — Krem kartlar, bordo sol bant */}
      <section className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-2">
            Son <span className="text-primary">Yazılar</span>
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mt-3" />
        </div>
        {posts.length === 0 ? (
          <p className="text-center text-stone-500 text-base">
            Henüz yazı eklenmemiş. Yakında içerikler gelecek!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        {posts.length > 0 && (
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="btn-primary"
            >
              Tüm Yazıları Gör
            </Link>
          </div>
        )}
      </section>

      {/* KATEGORİLER */}
      {categories.length > 0 && (
        <section className="bg-surface py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-2">
                <span className="text-secondary">Kategoriler</span>
              </h2>
              <div className="w-12 h-0.5 bg-secondary mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/kategoriler/${cat.slug}`}
                  className="bg-white rounded-xl p-4 sm:p-6 text-center border-2 border-transparent hover:border-primary transition-colors duration-150 shadow-sm hover:shadow-md min-h-[44px]"
                >
                  <h3 className="font-serif font-bold text-base sm:text-lg text-dark">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    {cat._count.posts} yazı
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALINTI/QUOTE BANT */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <svg className="w-8 h-8 text-secondary/60 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-xl sm:text-2xl font-medium text-cream italic leading-relaxed mb-4">
            Bolu&apos;nun mangal kültürü, sadece yemek değil, bir yaşam
            biçimidir.
          </blockquote>
          <div className="w-12 h-0.5 bg-secondary mx-auto mt-4" />
        </div>
      </section>

      {/* SEO METİN */}
      <section className="bg-cream py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-3 text-center">
            Bolu&apos;da Et Mangal Kültürü
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-8" />
          <div className="prose prose-stone max-w-none text-stone-700 text-base leading-relaxed space-y-4">
            <p>
              Bolu, Türkiye&apos;nin en köklü gastronomi şehirlerinden biridir.
              Coğrafi konumu, temiz su kaynakları ve verimli toprakları
              sayesinde Bolu&apos;da yetişen hayvanların eti kendine özgü bir
              lezzete sahiptir.
            </p>
            <p>
              Geleneksel Bolu mangal kültüründe en önemli unsur, etin
              taze ve yerel olmasıdır. Yüzyıllık kasap geleneğiyle şekillenen
              bu kültür, her yıl yüzlerce ziyaretçiyi Bolu&apos;ya çekmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Backlink Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center">
        <div className="bg-gradient-to-r from-dark to-stone-800 rounded-2xl p-6 sm:p-10 text-white border border-stone-700">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-cream">
            Daha Fazla İçerik İçin
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-base sm:text-lg mb-6 text-stone-300">
            Et, mangal ve gastronomi dünyasında daha fazla içerik için{" "}
            <strong className="text-cream">İbrahim İnyeri</strong>&apos;ni ziyaret edin.
          </p>
          <a
            href="https://ibrahiminyeri.com"
            target="_blank"
            rel="dofollow"
            className="inline-block bg-secondary text-dark px-8 py-4 rounded-lg font-bold hover:bg-amber-500 transition-colors duration-150 min-h-[44px]"
          >
            ibrahiminyeri.com &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
