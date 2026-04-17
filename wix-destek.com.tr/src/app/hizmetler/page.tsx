import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { SERVICES, SITE } from "@/lib/site";
import ServiceIcon, { getServiceIcon } from "@/components/ui/service-icon";

export const metadata: Metadata = {
  title: "Wix Hizmetleri — Kurulum, Tasarım, SEO, E-Ticaret",
  description:
    "Wix platformunda ihtiyacınız olan tüm profesyonel hizmetler tek çatı altında. Site kurulumu, tasarım düzenleme, SEO, domain bağlama, e-ticaret ve birebir eğitim.",
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

      <section className="relative bg-hero overflow-hidden">
        <div
          className="blob"
          style={{
            top: "-10%",
            right: "-5%",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-6 py-16 lg:py-20">
          <span className="eyebrow mb-3 block">Hizmetler</span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
            Wix'te ne isterseniz — <span className="text-gradient">tek çatı altında.</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
            Küçük bir düzeltmeden sıfırdan kuruluma, SEO'dan e-ticarete kadar
            Wix sitenizle ilgili tüm ihtiyaçlarınız için net kapsamlı hizmet paketleri.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6 py-14 sm:py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => {
            const cfg = getServiceIcon(s.slug);
            return (
            <article key={s.slug} className={`card flex flex-col ${cfg.tint}`}>
              <div className="flex items-start gap-4 mb-3">
                <ServiceIcon slug={s.slug} />
                <h2 className="text-xl font-bold text-[var(--indigo-900)] flex-1 leading-snug">
                  {s.title}
                </h2>
              </div>
              <p className="mt-1 text-[var(--ink-soft)] leading-relaxed">
                {s.description}
              </p>

              <ul className="mt-4 space-y-2">
                {s.bullets.slice(0, 4).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cfg.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-4">
                {s.duration && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--ink-mute)] font-semibold">
                      Tahmini süre
                    </p>
                    <p className="text-[var(--indigo-900)] font-bold">{s.duration}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--ink-mute)] font-semibold">
                    Teklif
                  </p>
                  <p className="text-[var(--indigo-900)] font-bold">Kapsama göre</p>
                </div>
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
            );
          })}
        </div>

        <div className="mt-12 card text-center py-10">
          <h2 className="text-2xl font-bold text-[var(--navy)]">
            Listede aradığınızı bulamadınız mı?
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Wix ile ilgili farklı bir konu olursa yine yardım edebiliriz. Önce konuşalım.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/iletisim" className="btn-primary">
              Ücretsiz ön görüşme alın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
