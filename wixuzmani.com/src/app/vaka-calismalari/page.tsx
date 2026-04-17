import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import Reveal from "@/components/ui/reveal";
import { CASE_STUDIES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vaka Çalışmaları — Wix Projelerinde Ölçülebilir Sonuçlar",
  description:
    "Wix projelerimizde elde ettiğimiz organik trafik, Core Web Vitals ve dönüşüm iyileştirmeleri. Sektör bazlı vaka çalışmaları.",
  alternates: { canonical: `${SITE.url}/vaka-calismalari` },
};

export default function VakaCalismalariPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: `${SITE.url}/vaka-calismalari`,
          name: "Vaka Çalışmaları",
          hasPart: CASE_STUDIES.map((c) => ({
            "@type": "CreativeWork",
            name: c.client,
            about: c.sector,
            description: c.challenge,
          })),
        }}
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-6 py-16">
        <span className="eyebrow mb-3 block">Vaka Çalışmaları</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
          Rakamlarla konuşan projeler.
        </h1>
        <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          Ajans çalışmalarımızda görev ve ölçüt netti; sonuçlarımız da öyle.
          Her proje için zorluk, yaklaşım ve KPI iyileşmelerinin özeti.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-6 pb-20 space-y-8">
        {CASE_STUDIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60}>
            <article id={c.slug} className="card p-8 lg:p-10 scroll-mt-24">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="badge mb-3">{c.service}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[var(--emerald-900)]">
                    {c.client}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--ink-mute)]">{c.sector}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 mt-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--emerald-700)]">
                    Zorluk
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)] leading-relaxed">
                    {c.challenge}
                  </p>

                  <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-[var(--emerald-700)]">
                    Yaklaşım
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {c.approach.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-[var(--ink-soft)]">
                        <svg className="flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--bronze)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  {c.quote && (
                    <blockquote className="mt-8 p-5 rounded-lg bg-[var(--surface-alt)] border-l-4 border-[var(--bronze)]">
                      <p className="text-[var(--ink-soft)] italic leading-relaxed">
                        &ldquo;{c.quote.text}&rdquo;
                      </p>
                      <cite className="block mt-3 text-sm font-semibold text-[var(--emerald-900)] not-italic">
                        — {c.quote.author}
                      </cite>
                    </blockquote>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--emerald-700)]">
                    KPI İyileşmeleri
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg border border-[var(--line)] p-4 bg-[var(--paper)]">
                        <p className="text-[10px] font-semibold text-[var(--ink-mute)] uppercase tracking-wider">
                          {m.label}
                        </p>
                        <p className="mt-1 kpi text-xl">{m.value}</p>
                        {m.note && (
                          <p className="mt-1 text-[11px] text-[var(--ink-mute)]">{m.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="card-glow text-center py-14 px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--emerald-900)]">
              Bir sonraki vaka çalışmasında sizi görelim.
            </h2>
            <p className="mt-4 text-[var(--ink-soft)] max-w-xl mx-auto">
              30 dakikalık ücretsiz strateji görüşmesi. Hedef ve kısıtlarınızı
              anlatın, uygun kapsam ve ölçüt tablosunu birlikte çıkaralım.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link href="/iletisim" className="btn-primary">
                Randevu alın
              </Link>
              <Link href="/hizmetler" className="btn-secondary">
                Hizmetleri gör
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
