import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { PLANS, SERVICES, SITE, TRUST_SIGNALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiyatlar — Şeffaf Wix Ajans Paketleri",
  description:
    "Launch, Scale ve Growth paketleri + hizmet bazlı fiyatlandırma. Her teklif sabit kapsam ve KPI tablosu içerir.",
  alternates: { canonical: `${SITE.url}/fiyatlar` },
};

export default function FiyatlarPage() {
  return (
    <>
      <JsonLd
        data={PLANS.map((p) => ({
          "@context": "https://schema.org",
          "@type": "Offer",
          name: p.name,
          description: p.tagline,
          price: p.priceLabel.replace(/[^\d]/g, ""),
          priceCurrency: "TRY",
          url: `${SITE.url}/fiyatlar#${p.slug}`,
          seller: { "@type": "Organization", name: SITE.fullName },
        }))}
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-6 py-16">
        <span className="eyebrow mb-3 block">Fiyatlar</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
          Şeffaf kapsam, sabit fiyat.
        </h1>
        <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          Projeniz için Launch, Scale veya Growth paketlerinden birini seçin
          ya da özel kapsam tasarlayalım. Fiyatlar KDV hariçtir.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <article
              key={plan.slug}
              id={plan.slug}
              className={
                plan.highlight
                  ? "card relative border-2 border-[var(--bronze)]"
                  : "card"
              }
            >
              {plan.highlight && (
                <span
                  className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--emerald-900)] rounded-full"
                  style={{ background: "var(--bronze)" }}
                >
                  Önerilen
                </span>
              )}
              <h2 className="text-xl font-bold text-[var(--emerald-900)]">{plan.name}</h2>
              <p className="text-sm text-[var(--ink-soft)] mt-1">{plan.tagline}</p>

              <div className="mt-5 pb-5 border-b border-[var(--line)]">
                <p className="text-3xl font-extrabold text-[var(--emerald-900)]">
                  {plan.priceLabel}
                </p>
                <p className="text-xs text-[var(--ink-mute)] font-semibold uppercase tracking-wide mt-1">
                  {plan.priceNote}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/iletisim"
                className={plan.highlight ? "btn-primary w-full mt-7" : "btn-secondary w-full mt-7"}
              >
                {plan.ctaText}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-6 pb-16">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-[var(--emerald-900)]">Hizmet bazlı başlangıç fiyatları</h2>
          <p className="mt-2 text-[var(--ink-soft)]">
            Paketler dışı tek seferlik projeler için başlangıç fiyatları:
          </p>

          <div className="mt-6 divide-y divide-[var(--line)]">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="py-4 flex flex-wrap items-center gap-4 justify-between"
              >
                <div>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="font-semibold text-[var(--emerald-900)] hover:text-[var(--bronze)]"
                  >
                    {s.shortTitle}
                  </Link>
                  {s.duration && (
                    <p className="text-xs text-[var(--ink-mute)] mt-0.5">
                      {s.duration}
                    </p>
                  )}
                </div>
                <p className="font-bold text-[var(--emerald-900)]">{s.startingPrice || "—"}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[var(--ink-mute)]">
            * Fiyatlar başlangıçtır ve işin kapsamına göre değişebilir. Net teklif için
            <Link href="/iletisim" className="ml-1 text-[var(--bronze)] underline underline-offset-2">
              iletişime geçin
            </Link>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-6 pb-20">
        <div className="bg-emerald-panel rounded-2xl p-8 lg:p-12 relative">
          <h2 className="relative text-2xl lg:text-3xl font-bold text-[var(--cream)]">
            Emin değil misiniz?
          </h2>
          <p className="relative mt-3 text-[var(--cream)]/80 max-w-xl">
            30 dakikalık strateji görüşmesinde projeyi birlikte analiz edelim;
            doğru paketi birlikte seçelim.
          </p>
          <ul className="relative mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-2">
            {TRUST_SIGNALS.slice(0, 4).map((t) => (
              <li key={t} className="flex items-start gap-2 text-[var(--cream)]/90 text-sm">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bronze)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <Link href="/iletisim" className="btn-primary mt-7 relative">
            Strateji görüşmesi planlayın
          </Link>
        </div>
      </section>
    </>
  );
}
