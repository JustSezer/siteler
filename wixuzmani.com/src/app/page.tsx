import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import Reveal from "@/components/ui/reveal";
import EditorMockup from "@/components/visuals/editor-mockup";
import LcpChart from "@/components/visuals/lcp-chart";
import {
  CASE_STUDIES,
  FAQ_ITEMS,
  HONEST_PROOF,
  PLANS,
  SERVICES,
  SITE,
  TESTIMONIALS,
} from "@/lib/site";

export default function HomePage() {
  const featured = CASE_STUDIES[0];

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
            priceRange: "₺₺₺",
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
        ]}
      />

      {/* ─────────────  HERO  ───────────── */}
      <section className="relative overflow-hidden">
        <div className="orb" style={{ top: "-120px", left: "10%", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(212,184,120,0.35), transparent 65%)" }} aria-hidden="true" />
        <div className="orb" style={{ top: "40%", right: "-80px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(59,207,149,0.30), transparent 65%)", animationDelay: "3s" }} aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-6 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald-glow)] animate-pulse" aria-hidden="true" />
                <span className="hidden sm:inline">Kurumsal Wix Ajansı · Türkiye</span>
                <span className="sm:hidden">Kurumsal Wix Ajansı</span>
              </span>
              <h1 className="mt-5 sm:mt-6 font-[family-name:var(--font-manrope)] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-extrabold text-[var(--ink)] leading-[1.05] sm:leading-[1.02] lg:leading-[1.0] tracking-[-0.035em] animate-fade-up">
                Wix&apos;te{" "}
                <span className="text-gradient">ajans kalitesi</span>,
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>ölçülebilir sonuç.
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl animate-fade-up delay-150">
                Tasarımcı, SEO uzmanı ve geliştiriciden oluşan ekiple Core Web Vitals,
                organik büyüme ve dönüşüm odaklı kurumsal projeler teslim ediyoruz.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 animate-fade-up delay-300">
                <Link href="/iletisim" className="btn-primary btn-primary-glow w-full sm:w-auto">
                  Strateji görüşmesi planla
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="/vaka-calismalari" className="btn-secondary w-full sm:w-auto">
                  Vaka çalışmalarını gör
                </Link>
              </div>
            </div>

            <div className="animate-fade-up delay-500 px-2 sm:px-6 lg:px-8 lg:pr-0 mt-4 lg:mt-0 max-w-md mx-auto lg:max-w-none">
              <EditorMockup />
            </div>
          </div>

          {/* KPI bento — 4 tiles in a row below hero */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {HONEST_PROOF.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="tile bg-grid h-full !p-4 sm:!p-6">
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[var(--ink-mute)]">
                    {s.label}
                  </p>
                  <p className="mt-2 sm:mt-3 kpi text-3xl sm:text-4xl lg:text-5xl">{s.value}</p>
                  <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-[var(--ink-mute)] leading-snug">{s.hint}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Disciplines marquee */}
        <div className="border-y border-[var(--line)]">
          <div className="marquee-wrap py-4">
            <div className="marquee-track">
              {[...Array(3)].flatMap(() =>
                ["Marka stratejisi", "UI tasarım sistemi", "Core Web Vitals", "Teknik SEO", "İçerik mimarisi", "Migration", "A/B test", "GA4 + Looker", "WCAG AA uyumu", "Schema markup"]
              ).map((item, i) => (
                <span key={i} className="flex items-center gap-6 whitespace-nowrap">
                  <span className="text-[var(--ink-soft)] text-sm font-medium">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--bronze)]" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────  SERVICES BENTO  ───────────── */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow">
            <span className="font-mono text-[10px] text-[var(--ink-mute)]">01</span>
            Hizmetler
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
            Sekiz disiplin,{" "}
            <span className="text-gradient">bir ekip.</span>
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] text-lg">
            Kurulumdan optimizasyona, SEO&apos;dan CRO&apos;ya kadar tek elden ölçülebilir teslim.
          </p>
        </Reveal>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(180px,auto)]">
          {SERVICES.map((s, i) => {
            // First tile: large 2x2 with gradient border
            const isFeature = i === 0;
            const spans = isFeature
              ? "sm:col-span-2 md:col-span-2 md:row-span-2"
              : "";
            return (
              <Reveal key={s.slug} delay={i * 50} className={spans}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className={`${isFeature ? "tile-glow tile-feature" : "tile"} bg-grid group h-full flex flex-col`}
                >
                  <div className="relative flex items-start justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[var(--bronze-dim)] border border-[rgba(212,184,120,0.25)] flex items-center justify-center" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bronze)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="font-mono text-[10px] text-[var(--ink-mute)]">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className={`relative mt-5 font-[family-name:var(--font-manrope)] font-semibold text-[var(--ink)] tracking-tight group-hover:text-[var(--bronze)] transition-colors ${isFeature ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl"}`}>
                    {s.shortTitle}
                  </h3>
                  <p className="relative mt-2 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                    {isFeature ? s.description : s.summary}
                  </p>
                  <div className="relative mt-4 pt-4 border-t border-[var(--line)] flex items-center justify-between">
                    {s.startingPrice && (
                      <p className="font-mono text-[10px] text-[var(--ink-mute)] uppercase tracking-wider">
                        {s.startingPrice.replace("Başlangıç: ", "").replace("Sabit: ", "").replace("Aylık: ", "/ay ").replace("Çeyreklik: ", "/çeyrek ")}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-[var(--bronze)] text-xs font-semibold group-hover:gap-2 transition-all">
                      Detay
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ─────────────  FEATURED CASE STUDY  ───────────── */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow">
            <span className="font-mono text-[10px] text-[var(--ink-mute)]">02</span>
            Vaka Çalışması
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
            Rakamlarla konuşan sonuç.
          </h2>
        </Reveal>

        <Reveal>
          <div className="tile-glow p-5 sm:p-8 lg:p-12 bg-grid">
            <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-10 lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge">{featured.service}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ink-mute)]">
                    · {featured.sector}
                  </span>
                </div>
                <h3 className="mt-4 sm:mt-5 font-[family-name:var(--font-manrope)] text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold text-[var(--ink)] tracking-tight leading-[1.15] sm:leading-[1.1]">
                  {featured.client}
                </h3>
                <p className="mt-4 sm:mt-5 text-[var(--ink-soft)] leading-relaxed text-[15px] sm:text-[17px]">
                  {featured.challenge}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {featured.approach.slice(0, 3).map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[var(--bronze)] flex-shrink-0" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
                {featured.quote && (
                  <blockquote className="mt-8 pl-5 border-l-2 border-[var(--bronze)]">
                    <p className="text-[var(--ink)] italic leading-relaxed">
                      &ldquo;{featured.quote.text}&rdquo;
                    </p>
                    <cite className="block mt-3 text-xs font-mono text-[var(--ink-mute)] not-italic">
                      — {featured.quote.author}
                    </cite>
                  </blockquote>
                )}
                <Link href={`/vaka-calismalari#${featured.slug}`} className="mt-8 btn-ghost">
                  Tüm vakalar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              <div>
                <div className="rounded-2xl bg-[var(--canvas-elev)] border border-[var(--line)] p-5 lg:p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <p className="text-[10px] font-semibold text-[var(--ink-mute)] uppercase tracking-[0.15em]">
                      LCP · Optimizasyon Eğrisi
                    </p>
                    <span className="font-mono text-[10px] text-[var(--mint)]">-56%</span>
                  </div>
                  <LcpChart />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-[var(--canvas-elev)] border border-[var(--line)] p-4">
                      <p className="text-[10px] font-semibold text-[var(--ink-mute)] uppercase tracking-[0.15em]">
                        {m.label}
                      </p>
                      <p className="mt-2 kpi text-2xl lg:text-3xl">{m.value}</p>
                      {m.note && (
                        <p className="mt-1 text-[10px] text-[var(--ink-mute)]">{m.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─────────────  PROCESS — 3-step bento  ───────────── */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow">
            <span className="font-mono text-[10px] text-[var(--ink-mute)]">03</span>
            Süreç
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
            Stratejiden{" "}
            <span className="text-gradient">yayına</span>, sabit kapsamla.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {[
            { t: "Strateji", d: "30 dk ücretsiz görüşme. Hedef, kısıt ve başarı ölçütleri netlendirilir; KPI tablosu birlikte kurulur.", out: "Strateji notu" },
            { t: "Kapsam", d: "Teknik audit sonrası süre, teslim ve fiyat sabitlenir. Sözleşme + talep halinde NDA imzalanır.", out: "Sözleşmeli teklif" },
            { t: "Teslim", d: "Tasarım + geliştirme sprintleri. Yayın öncesi A11y + CWV + SEO audit, teslim sonrası 30 gün bakım.", out: "Canlı site + dashboard" },
          ].map((step, i) => (
            <Reveal key={step.t} delay={i * 120}>
              <div className="tile h-full flex flex-col">
                <p className="font-mono text-xs text-[var(--ink-mute)]">STEP / {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-[family-name:var(--font-manrope)] text-5xl sm:text-6xl font-extrabold text-[var(--bronze)] leading-none tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-manrope)] text-2xl font-semibold text-[var(--ink)]">
                  {step.t}
                </h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                  {step.d}
                </p>
                <p className="mt-6 pt-4 border-t border-[var(--line)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ink-mute)]">
                  Çıktı · <span className="text-[var(--mint)] normal-case tracking-normal font-medium">{step.out}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────  PRICING  ───────────── */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow">
            <span className="font-mono text-[10px] text-[var(--ink-mute)]">04</span>
            Paketler
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
            Şeffaf kapsam, sabit fiyat.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PLANS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className={`h-full flex flex-col ${p.highlight ? "tile-glow tile-feature" : "tile"}`}>
                <div className="relative flex items-center justify-between">
                  <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold text-[var(--ink)]">
                    {p.name}
                  </h3>
                  {p.highlight && <span className="badge">Önerilen</span>}
                </div>
                <p className="relative mt-2 text-sm text-[var(--ink-mute)]">{p.tagline}</p>
                <div className="relative mt-5 sm:mt-6">
                  <p className="kpi text-3xl sm:text-4xl">{p.priceLabel}</p>
                  <p className="text-xs text-[var(--ink-mute)] mt-1">{p.priceNote}</p>
                </div>
                <ul className="relative mt-6 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-1 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim" className={`relative mt-8 ${p.highlight ? "btn-primary" : "btn-secondary"}`}>
                  {p.ctaText}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────  TESTIMONIAL BENTO  ───────────── */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow">
            <span className="font-mono text-[10px] text-[var(--ink-mute)]">05</span>
            Müşteri sözü
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
            Sonuç veren{" "}
            <span className="text-gradient">partner.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 auto-rows-[minmax(200px,auto)]">
          {TESTIMONIALS.slice(0, 4).map((t, i) => {
            const spans = i === 0 ? "sm:col-span-2 md:col-span-3" : i === 1 ? "sm:col-span-2 md:col-span-3" : "md:col-span-2";
            return (
              <Reveal key={t.name} delay={i * 80} className={spans}>
                <div className="tile h-full flex flex-col">
                  <p className="text-[var(--ink)] leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {t.result && (
                    <p className="mt-4 font-mono text-xs text-[var(--mint)] uppercase tracking-wider">
                      → {t.result}
                    </p>
                  )}
                  <div className="mt-5 pt-5 border-t border-[var(--line)] flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-[var(--bronze-dim)] text-[var(--bronze)] border border-[rgba(212,184,120,0.25)]" aria-hidden="true">
                      {t.initial}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                      <p className="text-[11px] text-[var(--ink-mute)]">{t.role} · {t.sector}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ─────────────  FAQ  ───────────── */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="text-center mb-12">
          <span className="eyebrow">
            <span className="font-mono text-[10px] text-[var(--ink-mute)]">06</span>
            Sıkça Sorulan
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
            Süreç hakkında.
          </h2>
        </Reveal>

        <div className="space-y-2">
          {FAQ_ITEMS.slice(0, 6).map((item, i) => (
            <Reveal key={i} delay={i * 50}>
              <details className="tile group cursor-pointer">
                <summary className="font-[family-name:var(--font-manrope)] text-base sm:text-lg font-semibold text-[var(--ink)] list-none flex items-start justify-between gap-3 sm:gap-4">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--bronze-dim)] border border-[rgba(212,184,120,0.25)] flex items-center justify-center text-[var(--bronze)] transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[var(--ink-soft)] leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link href="/sss" className="btn-ghost">
            Tüm soruları gör
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </Reveal>
      </section>

      {/* ─────────────  FINAL CTA  ───────────── */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pb-20 sm:pb-24 lg:pb-32">
        <Reveal>
          <div className="tile-glow tile-feature bg-grid py-14 sm:py-20 px-5 sm:px-8 text-center relative overflow-hidden">
            <div className="orb" style={{ top: "-80px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "radial-gradient(circle, rgba(212,184,120,0.2), transparent 65%)" }} aria-hidden="true" />
            <span className="relative eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald-glow)] animate-pulse" aria-hidden="true" />
              30 dakika · Ücretsiz
            </span>
            <h2 className="relative mt-5 sm:mt-6 font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--ink)] tracking-[-0.03em] leading-[1.08] sm:leading-[1.02]">
              Sıradaki vaka çalışması{" "}
              <span className="text-gradient">seninki olsun.</span>
            </h2>
            <p className="relative mt-5 sm:mt-6 text-[var(--ink-soft)] text-base sm:text-lg max-w-xl mx-auto">
              Projeniz uygun değilse dürüstçe söyleriz — süre kaybı yok.
            </p>
            <div className="relative mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center">
              <Link href="/iletisim" className="btn-primary btn-primary-glow w-full sm:w-auto">
                Randevu al
              </Link>
              <a href={SITE.whatsapp.link} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                WhatsApp ile yaz
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
