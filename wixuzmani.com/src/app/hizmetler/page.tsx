import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler — Wix Ajans Danışmanlığı, Tasarım, SEO, Performans",
  description:
    "Kurumsal Wix site, premium tasarım, e-ticaret, SEO, performans, migration ve CRO — ajans düzeyinde ölçülebilir teslim.",
  alternates: { canonical: `${SITE.url}/hizmetler` },
};

export default function HizmetlerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE.url}/hizmetler/${s.slug}`,
            name: s.shortTitle,
            description: s.summary,
          })),
        }}
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-6 py-16 lg:py-20">
        <span className="eyebrow mb-3 block">Hizmetler</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
          Wix&apos;te ajans modu — tek ekip, sekiz disiplin.
        </h1>
        <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          Kurulum, tasarım, performans, SEO, migration, CRO ve aylık bakım. Her biri
          sabit kapsam ve KPI tablosuyla teslim edilir.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <article key={s.slug} className="card flex flex-col">
              <h2 className="text-xl font-bold text-[var(--emerald-900)]">{s.title}</h2>
              <p className="mt-2 text-[var(--ink-soft)] leading-relaxed">
                {s.description}
              </p>

              <ul className="mt-4 space-y-2">
                {s.bullets.slice(0, 4).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-4">
                {s.startingPrice && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--ink-mute)] font-semibold">
                      Fiyat
                    </p>
                    <p className="text-[var(--emerald-900)] font-bold">{s.startingPrice}</p>
                  </div>
                )}
                {s.duration && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--ink-mute)] font-semibold">
                      Süre
                    </p>
                    <p className="text-[var(--emerald-900)] font-bold">{s.duration}</p>
                  </div>
                )}
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="ml-auto btn-ghost"
                >
                  Detay
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 card text-center py-10">
          <h2 className="text-2xl font-bold text-[var(--emerald-900)]">
            Özel kapsam mı lazım?
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Listedeki paketler senin ihtiyacına uymuyorsa, 30 dakikalık ücretsiz strateji
            görüşmesinde sana özel kapsam tasarlayalım.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/iletisim" className="btn-primary">
              Strateji görüşmesi planlayın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
