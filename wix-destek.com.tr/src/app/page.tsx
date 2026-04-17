import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import ContactForm from "@/components/forms/contact-form";
import Reveal from "@/components/ui/reveal";
import WixMockup from "@/components/hero/wix-mockup";
import SerpMockup from "@/components/seo/serp-mockup";
import ServiceIcon from "@/components/ui/service-icon";
import { FAQ_ITEMS, HONEST_PROOF, SERVICES, SITE, TESTIMONIALS, TRUST_SIGNALS } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export default function HomePage() {
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: SITE.fullName,
            description: SITE.description,
            url: SITE.url,
            email: SITE.email,
            areaServed: { "@type": "Country", name: "Turkey" },
            serviceType: SERVICES.map((s) => s.shortTitle),
            priceRange: "₺₺",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "120",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: SITE.url,
            name: SITE.fullName,
            inLanguage: "tr-TR",
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE.url}/sss?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-hero relative">
        <div
          className="orb"
          style={{
            top: "-80px",
            left: "-60px",
            width: "320px",
            height: "320px",
            background: "radial-gradient(circle, rgba(244,63,94,0.45), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div
          className="orb"
          style={{
            top: "40%",
            right: "-120px",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 65%)",
            animationDelay: "2s",
          }}
          aria-hidden="true"
        />
        <div
          className="orb"
          style={{
            bottom: "-140px",
            left: "35%",
            width: "280px",
            height: "280px",
            background: "radial-gradient(circle, rgba(251,191,36,0.35), transparent 65%)",
            animationDelay: "1s",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-6 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="eyebrow mb-5 animate-fade-in">
                Türkçe Wix Desteği
              </span>
              <h1 className="text-4xl lg:text-[3.5rem] font-extrabold text-[var(--ink)] leading-[1.05] tracking-tight animate-fade-up">
                Wix'te takıldığınız noktayı{" "}
                <span className="text-gradient">birlikte çözelim.</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl animate-fade-up delay-150">
                Site kurulumu, tasarım, SEO, domain ya da e-ticaret — Wix'te ne olursa olsun
                Türkçe konuşan bir uzmanla 24 saat içinde çözüme kavuşun.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-300">
                <Link href="/iletisim" className="btn-primary btn-primary-glow">
                  Ücretsiz ön görüşme alın
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="/hizmetler" className="btn-secondary">
                  Hizmetlere göz atın
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 animate-fade-up delay-500">
                {TRUST_SIGNALS.slice(0, 4).map((s) => (
                  <li
                    key={s}
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-soft)]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glow p-6 lg:p-8 animate-scale-in delay-200">
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" aria-hidden="true" />
                24 saat içinde yanıt
              </span>
              <h2 className="mt-3 text-xl font-bold text-[var(--indigo-900)]">
                Sorununuzu anlatın
              </h2>
              <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
                Form gönderince e-posta ile geri döneriz — hızlı ve Türkçe.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest proof strip */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HONEST_PROOF.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--coral)]">
                  {s.label}
                </p>
                <p className="mt-2 text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)]">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[var(--ink-mute)] leading-snug">
                  {s.hint}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 lg:px-6 py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <span className="eyebrow mb-3">Hizmetlerimiz</span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
            Wix'te ne isterseniz — <span className="text-gradient">biz zaten yaptık.</span>
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Küçük bir düzeltme olsun, sıfırdan kurulum olsun — tek kişiden tam çözüm.
            Paket dışı iş çıkmaz, sürpriz fatura olmaz.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60} as="article">
              <Link
                href={`/hizmetler/${s.slug}`}
                className="card group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <ServiceIcon slug={s.slug} />
                  {s.duration && (
                    <span className="badge">{s.duration}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[var(--indigo-900)] group-hover:text-[var(--coral)] transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                  {s.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--indigo-900)] group-hover:text-[var(--coral)]">
                  Detay
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-mesh-warm border-y border-[var(--line)] overflow-hidden">
        <div
          className="blob"
          style={{
            top: "-10%",
            right: "20%",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(251,191,36,0.3), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-6 py-16 sm:py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <span className="eyebrow mb-3">Nasıl çalışır?</span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
              Panik yapmayın. <br className="hidden md:block" />Basit 3 adım.
            </h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Sorununuzu anlatın",
                d: "Formu doldurun ya da WhatsApp'tan yazın. Sorunuzu ve Wix sitenizin adresini paylaşın.",
                tint: "tint-coral",
                accent: "var(--coral)",
                icon: (
                  <>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
                  </>
                ),
              },
              {
                n: "02",
                t: "Net teklifi alın",
                d: "24 saat içinde size bir çözüm yolu, süre ve sabit fiyat gönderiyoruz. Onayınızı bekliyoruz.",
                tint: "tint-lilac",
                accent: "var(--lilac)",
                icon: (
                  <>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </>
                ),
              },
              {
                n: "03",
                t: "Çözümü teslim alın",
                d: "Anlaştığımız sürede sorununuzu çözüyor, değişiklikleri test edip teslim ediyoruz.",
                tint: "tint-mint",
                accent: "var(--mint)",
                icon: (
                  <>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </>
                ),
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 120} className="relative">
                <div className={`card-glow h-full relative overflow-hidden ${step.tint}`}>
                  <div
                    className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${step.accent}15` }}
                    aria-hidden="true"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={step.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {step.icon}
                    </svg>
                  </div>
                  <div
                    className="text-5xl font-extrabold leading-none"
                    style={{ color: step.accent, opacity: 0.95 }}
                  >
                    {step.n}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[var(--indigo-900)]">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Why us — indigo panel */}
      <section className="mx-auto max-w-6xl px-5 lg:px-6 py-14 sm:py-20">
        <Reveal className="bg-indigo-panel rounded-3xl p-10 lg:p-16 relative">
          <div className="relative max-w-2xl">
            <span
              className="eyebrow mb-4"
              style={{ color: "var(--gold)" }}
            >
              Neden Wix Destek TR?
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              İngilizce dokümanlarda boğulmayın. <span style={{ color: "var(--gold)" }}>Türkçe uzmanla</span> konuşun.
            </h2>
          </div>

          <ul className="relative mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST_SIGNALS.map((t, i) => (
              <Reveal key={t} as="li" delay={i * 50}>
                <div className="flex items-start gap-3 text-white/90">
                  <span
                    className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full"
                    style={{ background: "rgba(244, 63, 94, 0.25)", border: "1px solid rgba(244, 63, 94, 0.4)" }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-snug">{t}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="relative mt-10 flex flex-wrap gap-3">
            <Link href="/iletisim" className="btn-primary btn-primary-glow">
              Hemen yardım alın
            </Link>
            <Link
              href="/fiyatlar"
              className="btn-secondary"
              style={{ borderColor: "white", color: "white" }}
            >
              Fiyat paketleri
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Live editor preview */}
      <section className="relative bg-mesh-mint overflow-hidden">
        <div
          className="blob"
          style={{
            top: "10%",
            left: "-6%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(16,184,166,0.45), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div
          className="blob"
          style={{
            bottom: "5%",
            right: "-4%",
            width: "280px",
            height: "280px",
            background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 65%)",
            animationDelay: "2s",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <WixMockup />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow mb-3">Ekran Paylaşımlı Çalışırız</span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
              Wix panelini <span className="text-gradient">sizin adınıza</span> kullanırız.
            </h2>
            <p className="mt-5 text-[var(--ink-soft)] text-lg leading-relaxed">
              Editörü açar, değişiklikleri canlı gösterir, adım adım Türkçe anlatırız.
              İstediğiniz an durdurabilir, sorabilir, beğenmediğiniz yeri revize ettirebilirsiniz.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Zoom / Meet üzerinden canlı ekran paylaşımı",
                "Değişiklikler kayıt altında, istediğiniz zaman geri alınabilir",
                "Ders modundaysak not + kayıt gönderiyoruz",
                "KVKK uyumlu; sadece izin verdiğiniz bölümlere erişiriz",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--ink-soft)]">
                  <span
                    className="mt-1 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--coral-soft)]"
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-6 py-16 sm:py-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <span className="eyebrow mb-3">Müşteri yorumları</span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
              Bir grup Wix kullanıcısı <span className="text-gradient">ne diyor?</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => {
              const tints = ["tint-coral", "tint-mint", "tint-lilac", "tint-gold", "tint-sky", "tint-indigo"];
              const avatarGradients = [
                "linear-gradient(135deg, var(--coral), var(--gold))",
                "linear-gradient(135deg, var(--mint), var(--sky))",
                "linear-gradient(135deg, var(--lilac), var(--coral))",
                "linear-gradient(135deg, var(--gold), var(--coral))",
                "linear-gradient(135deg, var(--sky), var(--lilac))",
                "linear-gradient(135deg, var(--indigo-700), var(--coral))",
              ];
              return (
              <Reveal key={t.name} delay={i * 70} as="article">
                <div className={`card h-full flex flex-col ${tints[i % tints.length]}`}>
                  <div className="flex items-center gap-1 mb-4" aria-label="5 yıldız">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
                        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--ink-soft)] leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  {t.result && (
                    <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--coral)] uppercase tracking-wide">
                      <span className="w-1 h-1 rounded-full bg-[var(--coral)]" aria-hidden="true" />
                      {t.result}
                    </p>
                  )}
                  <div className="mt-4 pt-4 border-t border-[var(--line)] flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow"
                      style={{ background: avatarGradients[i % avatarGradients.length] }}
                    >
                      <Image
                        src={t.avatar}
                        alt={`${t.name} profil fotoğrafı`}
                        width={88}
                        height={88}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[var(--indigo-900)]">{t.name}</p>
                      <p className="text-xs text-[var(--ink-mute)]">{t.role} — {t.sector}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 lg:px-6 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--mint)" }}>
                <span className="w-8 h-[2px] rounded" style={{ background: "linear-gradient(90deg, var(--mint), var(--sky))" }} />
                Wix SEO
              </span>
              <h2 className="mt-5 text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
                Google'ın ilk sayfasına çıkmak,<br className="hidden md:block" />
                <span style={{ color: "var(--mint)" }}>Wix'te de mümkün.</span>
              </h2>
              <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed max-w-lg">
                Teknik altyapı, içerik, hız ve anahtar kelime stratejisi — dördünü
                de Wix panelinde tek tek ayarlıyoruz. Aylık takip raporuyla
                sıralamanızı izliyoruz.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
                <div>
                  <dt className="text-[10px] sm:text-[11px] uppercase tracking-wide font-bold text-[var(--ink-mute)]">Ortalama</dt>
                  <dd className="mt-1 text-xl sm:text-2xl font-extrabold text-[var(--indigo-900)]">6 hafta</dd>
                  <dd className="text-[11px] sm:text-xs text-[var(--ink-mute)] leading-tight">ilk sıralama artışı</dd>
                </div>
                <div>
                  <dt className="text-[10px] sm:text-[11px] uppercase tracking-wide font-bold text-[var(--ink-mute)]">LCP hedefi</dt>
                  <dd className="mt-1 text-xl sm:text-2xl font-extrabold text-[var(--indigo-900)]">&lt; 2.5sn</dd>
                  <dd className="text-[11px] sm:text-xs text-[var(--ink-mute)] leading-tight">Core Web Vitals</dd>
                </div>
                <div>
                  <dt className="text-[10px] sm:text-[11px] uppercase tracking-wide font-bold text-[var(--ink-mute)]">Aylık</dt>
                  <dd className="mt-1 text-xl sm:text-2xl font-extrabold text-[var(--indigo-900)]">4 yazı</dd>
                  <dd className="text-[11px] sm:text-xs text-[var(--ink-mute)] leading-tight">SEO içerik üretimi</dd>
                </div>
              </dl>

              <ul className="mt-8 space-y-2.5">
                {[
                  "Anahtar kelime araştırması ve sayfa eşleştirme",
                  "Meta, H1/H2, şema (structured data) optimizasyonu",
                  "Sayfa hızı: WebP, lazy load, gereksiz app temizliği",
                  "Search Console kurulumu + aylık sıralama raporu",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--ink-soft)]">
                    <span
                      className="mt-1 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full"
                      style={{ background: "var(--mint-soft)" }}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/fiyatlar#seo-buyume"
                  className="btn-primary"
                  style={{ background: "var(--mint)", boxShadow: "0 8px 20px -8px rgba(16,184,166,0.6)" }}
                >
                  SEO paketlerini incele
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="/blog/wix-seo-rehberi-2026" className="btn-ghost">
                  Önce rehberi oku
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <SerpMockup />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="mx-auto max-w-6xl px-5 lg:px-6 py-14 sm:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <div className="max-w-xl">
            <span className="eyebrow mb-3">Rehberler</span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
              Wix için Türkçe rehberlerimiz
            </h2>
          </div>
          <Link href="/blog" className="btn-ghost">
            Tümünü oku
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {recentPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} as="article">
              <Link href={`/blog/${p.slug}`} className="card group h-full flex flex-col p-0 overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--indigo-950)]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 badge" style={{ background: "rgba(255,255,255,0.95)" }}>
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[var(--indigo-900)] group-hover:text-[var(--coral)] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <p className="mt-5 text-xs font-semibold text-[var(--ink-mute)]">
                  {p.readMinutes} dk okuma
                </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-14 sm:py-20">
        <Reveal className="text-center">
          <span className="eyebrow mb-3 inline-flex">Sık Sorulan Sorular</span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
            Merak ettiğiniz her şey.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.slice(0, 6).map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="card group cursor-pointer" name="faq-home">
                <summary className="font-semibold text-[var(--indigo-900)] list-none flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span
                    className="flex-shrink-0 transition-transform duration-300 group-open:rotate-45 text-[var(--coral)]"
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link href="/sss" className="btn-ghost">
            Tüm soruları gör
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 lg:px-6 pb-20">
        <Reveal>
          <div className="card-glow text-center py-14 px-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-[1.1] tracking-tight">
              Wix sitenizi <span className="text-gradient">birlikte toparlayalım.</span>
            </h2>
            <p className="mt-5 text-[var(--ink-soft)] text-lg max-w-xl mx-auto">
              Ön görüşme ücretsiz. Teklifi beğenmezseniz hiçbir zorunluluğunuz yok.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/iletisim" className="btn-primary btn-primary-glow">
                Ücretsiz ön görüşme alın
              </Link>
              <a
                href={SITE.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp ile yazın
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
