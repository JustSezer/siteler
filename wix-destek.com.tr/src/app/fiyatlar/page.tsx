import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import JsonLd from "@/components/seo/json-ld";
import { PLANS, SEO_PLANS, SERVICES, SITE, TRUST_SIGNALS, type Plan } from "@/lib/site";
import ServiceIcon, { getServiceIcon } from "@/components/ui/service-icon";

export const metadata: Metadata = {
  title: "Paketler — Wix Hizmet ve SEO Paket Seçenekleri",
  description:
    "Wix destek, kurulum, tasarım ve SEO paketleri. Her iş için uygun kapsam; şeffaf işleyiş, sabit teklif. Size özel fiyat için iletişime geçin.",
  alternates: { canonical: `${SITE.url}/fiyatlar` },
};

function PlanCard({ plan }: { plan: Plan }) {
  const tint =
    plan.group === "seo"
      ? plan.highlight
        ? "tint-mint"
        : "tint-sky"
      : plan.highlight
      ? "tint-coral"
      : "tint-lilac";

  return (
    <article
      id={plan.slug}
      className={`card relative flex flex-col h-full ${tint} ${
        plan.highlight ? "ring-2 ring-[var(--coral)]" : ""
      }`}
    >
      {plan.highlight && (
        <span
          className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white rounded-full"
          style={{ background: "var(--coral)" }}
        >
          En çok tercih edilen
        </span>
      )}

      <h3 className="text-xl font-bold text-[var(--indigo-900)]">{plan.name}</h3>
      <p className="text-sm text-[var(--ink-soft)] mt-1">{plan.tagline}</p>

      <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-[var(--coral)]">
        {plan.scope}
      </p>

      <ul className="mt-6 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-[var(--ink-soft)]"
          >
            <svg
              className="flex-shrink-0 mt-0.5"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--success)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={`/iletisim?paket=${plan.slug}`}
        className={
          plan.highlight
            ? "btn-primary w-full mt-7"
            : "btn-secondary w-full mt-7"
        }
      >
        {plan.ctaText}
      </Link>
    </article>
  );
}

export default function FiyatlarPage() {
  return (
    <>
      <JsonLd
        data={[...PLANS, ...SEO_PLANS].map((p) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.name,
          description: p.tagline,
          url: `${SITE.url}/fiyatlar#${p.slug}`,
          provider: { "@type": "Organization", name: SITE.fullName },
          serviceType: p.group === "seo" ? "SEO" : "Web Destek",
        }))}
      />

      <section className="relative bg-hero overflow-hidden">
        <div
          className="blob"
          style={{
            top: "-8%",
            left: "-6%",
            width: "340px",
            height: "340px",
            background: "radial-gradient(circle, rgba(16,184,166,0.35), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div
          className="blob"
          style={{
            bottom: "-10%",
            right: "-4%",
            width: "320px",
            height: "320px",
            background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 65%)",
            animationDelay: "2s",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-6 py-16 lg:py-20">
          <span className="eyebrow mb-3 block">Paketler</span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
            Kapsamı <span className="text-gradient">birlikte belirleyelim.</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
            Her işin ölçeği farklı. Size sabit bir tarife dayatmıyoruz — önce
            kapsamı konuşuyor, sonra size özel net bir teklif sunuyoruz.
            Aşağıdaki paketler bir başlangıç çerçevesi.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/iletisim" className="btn-primary btn-primary-glow">
              Ücretsiz teklif alın
            </Link>
            <a
              href={SITE.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp'tan yazın
            </a>
          </div>
        </div>
      </section>

      {/* Destek paketleri */}
      <section className="mx-auto max-w-6xl px-5 lg:px-6 py-16 lg:py-20">
        <Reveal className="max-w-2xl mb-12">
          <span className="eyebrow mb-3">Wix Destek Paketleri</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
            Sorundan kuruluma, destekten bakıma.
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]">
            Tek bir problemi çözmek, siteyi sıfırdan kurmak veya uzun vadeli
            bakım almak — üç ana yol.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEO paketleri */}
      <section className="bg-mesh-mint border-y border-[var(--line)] relative overflow-hidden">
        <div
          className="blob"
          style={{
            top: "20%",
            right: "-5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(14,165,233,0.3), transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-6 py-16 lg:py-20">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow mb-3" style={{ color: "var(--mint)" }}>
              Wix SEO Paketleri
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
              Google'da <span className="text-gradient">üst sıralara</span> çıkalım.
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]">
              Tek seferlik kurulumdan aylık takip + içerik üretimine kadar üç
              farklı kapsam. E-ticaret sitelerine özel dönüşüm odaklı paket de dahil.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {SEO_PLANS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PlanCard plan={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet özetleri */}
      <section className="mx-auto max-w-5xl px-5 lg:px-6 py-14 sm:py-20">
        <Reveal className="max-w-2xl mb-10">
          <span className="eyebrow mb-3">Paket harici hizmetler</span>
          <h2 className="mt-4 text-2xl lg:text-3xl font-extrabold text-[var(--indigo-900)] leading-tight tracking-tight">
            Noktasal işler için hizmet listesi
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Aşağıdaki her hizmet paket dışı tek seferlik alınabilir. Kapsam + süre
            üzerine konuşalım, size özel teklifi hazırlayalım.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {SERVICES.map((s) => {
            const cfg = getServiceIcon(s.slug);
            return (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className={`card group flex items-start gap-4 ${cfg.tint}`}
              >
                <ServiceIcon slug={s.slug} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[var(--indigo-900)] group-hover:text-[var(--coral)] transition-colors">
                    {s.shortTitle}
                  </p>
                  {s.duration && (
                    <p className="text-xs text-[var(--ink-mute)] mt-1">
                      {s.duration}
                    </p>
                  )}
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--ink-mute)] group-hover:text-[var(--coral)] group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 lg:px-6 pb-20">
        <Reveal>
          <div className="bg-indigo-panel rounded-3xl p-10 lg:p-14 relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Emin değil misiniz?
              </h2>
              <p className="mt-4 text-white/85 max-w-xl">
                20 dakikalık ücretsiz ön görüşmede durumunuzu anlatın, size en
                uygun paketi birlikte bulalım. Sürpriz fatura yok, sabit teklif.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {TRUST_SIGNALS.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-white/90 text-sm"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/iletisim" className="btn-primary mt-7">
                Ücretsiz ön görüşme alın
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
