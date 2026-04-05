import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/db";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getAllPosts(6);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "92vh" }}
        aria-label="Ana sayfa hero"
      >
        {/* Arka plan gorseli */}
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2069&q=80"
          alt="Bolu et lokantası — ızgara et"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Degrade overlay — sol koyu, sag acilir */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(110deg, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.88) 45%, rgba(8,6,4,0.55) 75%, rgba(8,6,4,0.25) 100%)",
          }}
        />

        {/* Alt degrade — scroll icin */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          aria-hidden="true"
          style={{
            background: "linear-gradient(to bottom, transparent, #0f0f0f)",
          }}
        />

        {/* Desen kaplaması */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Hero icerigi */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36 w-full">
          <div className="max-w-2xl">

            {/* Ust etiket */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="shrink-0"
                style={{ width: "2rem", height: "1px", backgroundColor: "#d4af37" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#d4af37", letterSpacing: "0.15em" }}
              >
                Bolu&apos;da Et Yemek İçin Doğru Adres
              </span>
            </div>

            {/* Ana baslik */}
            <h1
              className="font-semibold leading-none mb-6"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3rem, 9vw, 6rem)",
                color: "#f5f5f5",
                lineHeight: "1.0",
              }}
            >
              Bolu&apos;nun{" "}
              <em
                className="gold-shimmer-text block mt-1"
                style={{ fontStyle: "italic" }}
              >
                Et Lezzeti
              </em>
            </h1>

            {/* Alt baslik */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "#a0a0a0", lineHeight: "1.75" }}
            >
              Geleneksel tarifler, günlük taze et ve Bolu usulü lezzet.
              Yüzyıllık mutfak mirasını sofralarınıza taşıyoruz.
            </p>

            {/* CTA butonlar — sadece Tailwind hover */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="hero-cta-primary inline-flex items-center gap-3 font-semibold text-sm tracking-widest uppercase px-8 py-4 min-h-[52px]"
              >
                Yazıları Keşfet
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                href="/hakkimizda"
                className="hero-cta-secondary inline-flex items-center gap-2 font-medium text-sm tracking-widest uppercase px-7 py-4 min-h-[52px]"
              >
                Hakkımızda
              </Link>
            </div>

            {/* Istatistikler */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { deger: "25+", etiket: "Yıllık Deneyim" },
                { deger: "100%", etiket: "Taze Et" },
                { deger: "500+", etiket: "Mutlu Misafir" },
              ].map((item) => (
                <div key={item.etiket} className="flex flex-col gap-1">
                  <span
                    className="text-2xl sm:text-3xl font-semibold"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "#d4af37",
                    }}
                  >
                    {item.deger}
                  </span>
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#555555", letterSpacing: "0.12em" }}
                  >
                    {item.etiket}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll gostergesi */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <div
            className="scroll-indicator w-px h-12"
            style={{
              background: "linear-gradient(to bottom, transparent, #d4af37)",
            }}
          />
        </div>
      </section>

      {/* ===== OZELLIKLER ===== */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{
          backgroundColor: "#111111",
          borderTop: "1px solid rgba(212,175,55,0.1)",
          borderBottom: "1px solid rgba(212,175,55,0.1)",
        }}
        aria-label="Özelliklerimiz"
      >
        <div className="max-w-6xl mx-auto">
          {/* Baslik */}
          <div className="text-center mb-12">
            <div className="ornament text-xs font-semibold tracking-widest uppercase mb-4 inline-flex" style={{ color: "#d4af37" }}>
              Neden Biz
            </div>
            <h2
              className="font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#f5f5f5",
              }}
            >
              Kalite ve Lezzet Standardımız
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                symbol: "✦",
                baslik: "Günlük Taze Et",
                aciklama:
                  "Sabah temin edilen, günlük taze et garantisi. Kaliteden ödün vermeden servis ediyoruz.",
                renk: "#d4af37",
              },
              {
                symbol: "◈",
                baslik: "Geleneksel Tarifler",
                aciklama:
                  "Nesilden nesile aktarılan özgün Bolu tarifleri. Yüzyıllık bilgelik, modern sunum.",
                renk: "#d4af37",
              },
              {
                symbol: "◉",
                baslik: "Bolu Mutfağı",
                aciklama:
                  "Türkiye'nin lezzet başkentinden otantik tatlar. Bolu ruhunu sofralarınıza taşıyoruz.",
                renk: "#d4af37",
              },
            ].map((item) => (
              <div
                key={item.baslik}
                className="feature-card flex flex-col items-start gap-5 p-7 sm:p-8"
              >
                {/* Ikon cercevesi */}
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "2px",
                    color: item.renk,
                    fontSize: "1.25rem",
                  }}
                  aria-hidden="true"
                >
                  {item.symbol}
                </div>
                <div>
                  <h3
                    className="font-semibold text-xl mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "#f5f5f5",
                    }}
                  >
                    {item.baslik}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                    {item.aciklama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENU VITRIN ===== */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#0f0f0f" }}
        aria-label="Öne çıkan menü"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Sol — metin */}
            <div>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-5 flex items-center gap-3"
                style={{ color: "#d4af37", letterSpacing: "0.15em" }}
              >
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "#d4af37" }}
                  aria-hidden="true"
                />
                Uzmanlık Alanımız
              </div>
              <h2
                className="font-semibold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  color: "#f5f5f5",
                  lineHeight: "1.1",
                }}
              >
                Ateşin Dili,{" "}
                <em style={{ color: "#d4af37", fontStyle: "italic" }}>
                  Etin Sanatı
                </em>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#777777", lineHeight: "1.8" }}
              >
                Bolu'nun yüzyıllık et kültürünü modern bir sunum anlayışıyla
                harmanlıyoruz. Her dilim, her pişirme derecesi özenle seçilmiş,
                titizlikle hazırlanmıştır.
              </p>

              {/* Ozellik listesi */}
              <ul className="space-y-4 mb-8">
                {[
                  "Günlük temiz et tedariki",
                  "Kıyı mangal ve ızgara çeşitleri",
                  "Geleneksel Bolu usulü pişirme",
                  "Tam porsiyon, doyurucu sunumlar",
                ].map((madde) => (
                  <li key={madde} className="flex items-start gap-3">
                    <span
                      className="mt-1 shrink-0 text-xs"
                      style={{ color: "#d4af37" }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span className="text-sm" style={{ color: "#888888" }}>
                      {madde}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/blog"
                className="hero-cta-secondary inline-flex items-center gap-3 font-medium text-sm tracking-widest uppercase px-7 py-4 min-h-[50px]"
              >
                Daha Fazlasını Oku
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Sag — gorsel */}
            <div className="relative">
              <div
                className="absolute -inset-4 opacity-20 blur-2xl rounded-full"
                style={{ backgroundColor: "#d4af37" }}
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden gold-border-glow"
                style={{ borderRadius: "4px", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80"
                  alt="Bolu et lokantası — ızgara et tabağı"
                  width={900}
                  height={600}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/2", display: "block" }}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gorsel uzerine etiket */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,6,4,0.92) 0%, transparent 100%)",
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#d4af37", letterSpacing: "0.05em" }}
                  >
                    Bolu Usulü Izgara Et
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24"
        aria-label="Son blog yazıları"
      >
        {/* Baslik */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4 ornament inline-flex"
            style={{ color: "#d4af37", letterSpacing: "0.15em" }}
          >
            İçerikler
          </div>
          <h2
            className="font-semibold mb-3"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#f5f5f5",
            }}
          >
            Son Yazılar
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "#666666" }}>
            Bolu mutfağı, et kültürü ve lokanta tavsiyeleri
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <span
              className="text-4xl block mb-4"
              style={{ color: "rgba(212,175,55,0.3)" }}
              aria-hidden="true"
            >
              ◈
            </span>
            <p className="text-sm" style={{ color: "#444444" }}>
              Henüz yazı eklenmemiş. Blog yazıları yakında burada olacak.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/blog"
              className="hero-cta-secondary inline-flex items-center gap-3 font-medium text-sm tracking-widest uppercase px-8 py-4 min-h-[50px]"
            >
              Tüm Yazıları Gör
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{
          backgroundColor: "#111111",
          borderTop: "1px solid rgba(212,175,55,0.08)",
          borderBottom: "1px solid rgba(212,175,55,0.08)",
        }}
        aria-label="Müşteri yorumları"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4 ornament inline-flex"
              style={{ color: "#d4af37" }}
            >
              Yorumlar
            </div>
            <h2
              className="font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#f5f5f5",
              }}
            >
              Misafirlerimiz Ne Diyor?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                yorum:
                  "Bolu'ya her geldiğimizde ilk durağımız burası oluyor. Et kalitesi gerçekten üstün, pişirme tam kararında.",
                isim: "Ahmet Y.",
                unvan: "İstanbul",
                puan: 5,
              },
              {
                yorum:
                  "Geleneksel Bolu mutfağını en iyi şekilde yansıtıyorlar. Porsiyonlar doyurucu, servis hızlı ve güler yüzlü.",
                isim: "Fatma K.",
                unvan: "Ankara",
                puan: 5,
              },
              {
                yorum:
                  "Mangal kültürünü yaşatıyorlar. Her şey taze, her şey özgün. Kesinlikle tavsiye ederim.",
                isim: "Murat D.",
                unvan: "Bolu",
                puan: 5,
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card p-6 sm:p-7">
                {/* Yildizlar */}
                <div className="flex gap-0.5 mb-4" aria-label={`${t.puan} yıldız`}>
                  {Array.from({ length: t.puan }).map((_, si) => (
                    <span
                      key={si}
                      className="text-base"
                      style={{ color: "#d4af37" }}
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Tirnak */}
                <p
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "#888888", lineHeight: "1.8" }}
                >
                  &ldquo;{t.yorum}&rdquo;
                </p>

                {/* Musteri */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.15)",
                      color: "#d4af37",
                      border: "1px solid rgba(212,175,55,0.25)",
                    }}
                    aria-hidden="true"
                  >
                    {t.isim.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        color: "#f5f5f5",
                      }}
                    >
                      {t.isim}
                    </p>
                    <p className="text-xs" style={{ color: "#555555" }}>
                      {t.unvan}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HAKKINDA ===== */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#0f0f0f" }}
        aria-label="Hakkımızda"
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-5"
            style={{ color: "#d4af37", letterSpacing: "0.15em" }}
          >
            Hikayemiz
          </span>
          <h2
            className="font-semibold mb-8"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
              color: "#f5f5f5",
              lineHeight: "1.15",
            }}
          >
            Bolu Et Lokantası Hakkında
          </h2>

          {/* Ayirici */}
          <div
            className="flex items-center gap-3 justify-center mb-8"
            aria-hidden="true"
          >
            <div
              className="h-px flex-1 max-w-[60px]"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5))" }}
            />
            <span className="text-xs" style={{ color: "#d4af37" }}>✦</span>
            <div
              className="h-px flex-1 max-w-[60px]"
              style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.5))" }}
            />
          </div>

          <div className="space-y-5 text-left max-w-2xl mx-auto">
            <p className="text-base leading-relaxed" style={{ color: "#888888", lineHeight: "1.85" }}>
              <strong style={{ color: "#d4af37", fontWeight: 600 }}>
                Bolu Et Lokantası
              </strong>
              , Türkiye&apos;nin lezzet başkenti Bolu&apos;nun köklü et kültürünü ve
              geleneksel lokanta geleneğini tanıtan kapsamlı bir içerik
              platformudur.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#888888", lineHeight: "1.85" }}>
              Bolu&apos;nun meşhur yemek kültüründen kaliteli et seçim rehberlerine,
              geleneksel lokanta tavsiyelerinden Türk mutfağının özgün tatlarına
              kadar ihtiyacınız olan tüm bilgileri sunuyoruz.
            </p>
          </div>

          <Link
            href="/hakkimizda"
            className="hero-cta-secondary inline-flex items-center gap-2 font-medium text-sm tracking-widest uppercase px-7 py-4 min-h-[50px] mt-10"
          >
            Daha Fazla Bilgi
          </Link>
        </div>
      </section>

      {/* ===== CTA BANDI ===== */}
      <section
        className="relative overflow-hidden py-20 sm:py-24 px-4"
        style={{ backgroundColor: "#0a0a0a" }}
        aria-label="İletişim ve rezervasyon"
      >
        {/* Arka plan parlama */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Ust gold cizgi */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          aria-hidden="true"
          style={{
            background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Ikon */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8 text-xl"
            style={{
              border: "1px solid rgba(212, 175, 55, 0.35)",
              color: "#d4af37",
            }}
            aria-hidden="true"
          >
            ◈
          </div>

          <h2
            className="font-semibold mb-4"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
              color: "#f5f5f5",
              lineHeight: "1.1",
            }}
          >
            Rezervasyon için{" "}
            <em style={{ color: "#d4af37", fontStyle: "italic" }}>
              bizi arayın
            </em>
          </h2>

          <p
            className="text-base leading-relaxed mb-10 max-w-md mx-auto"
            style={{ color: "#666666" }}
          >
            Bolu&apos;nun en iyi et lokantalarında masa ayırtmak için hemen
            iletişime geçin.
          </p>

          {/* Telefon numarasi */}
          <a
            href="tel:03740000000"
            className="inline-flex items-center gap-4 mb-8 hover:opacity-80 transition-opacity duration-150"
            aria-label="Telefon ile ara: 0374 XXX XX XX"
          >
            <span
              className="font-semibold tracking-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                color: "#d4af37",
              }}
            >
              0374 XXX XX XX
            </span>
          </a>

          {/* CTA butonlar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:03740000000"
              className="hero-cta-primary inline-flex items-center gap-3 font-semibold text-sm tracking-widest uppercase px-8 py-4 min-h-[52px] w-full sm:w-auto justify-center"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="hero-cta-secondary inline-flex items-center gap-2 font-medium text-sm tracking-widest uppercase px-7 py-4 min-h-[52px] w-full sm:w-auto justify-center"
            >
              İletişim Sayfası
            </Link>
          </div>

          {/* Calisma saatleri */}
          <p
            className="mt-8 text-xs tracking-widest uppercase"
            style={{ color: "#444444", letterSpacing: "0.12em" }}
          >
            Her Gün 11:00 — 22:00
          </p>
        </div>
      </section>
    </>
  );
}
