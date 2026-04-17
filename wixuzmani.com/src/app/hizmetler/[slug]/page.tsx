import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/json-ld";
import ContactForm from "@/components/forms/contact-form";
import { SERVICES, SITE, TRUST_SIGNALS } from "@/lib/site";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const url = `${SITE.url}/hizmetler/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.shortTitle,
            name: service.title,
            description: service.description,
            provider: { "@type": "ProfessionalService", name: SITE.fullName, url: SITE.url },
            areaServed: { "@type": "Country", name: "Turkey" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE.url },
              { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE.url}/hizmetler` },
              {
                "@type": "ListItem",
                position: 3,
                name: service.shortTitle,
                item: `${SITE.url}/hizmetler/${service.slug}`,
              },
            ],
          },
        ]}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-5 lg:px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-[var(--ink-mute)]">
          <li><Link href="/" className="hover:text-[var(--emerald-900)]">Ana Sayfa</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/hizmetler" className="hover:text-[var(--emerald-900)]">Hizmetler</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--ink-soft)] font-semibold">{service.shortTitle}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-5xl px-5 lg:px-6 py-10 lg:py-14">
        <span className="eyebrow mb-3 block">Hizmet detayı</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-[1.1] tracking-tight">
          {service.title}
        </h1>
        <p className="mt-5 text-lg text-[var(--ink-soft)] leading-relaxed max-w-3xl">
          {service.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-6 pb-2">
          {service.startingPrice && (
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--ink-mute)] font-semibold">
                Fiyat
              </p>
              <p className="text-xl font-bold text-[var(--emerald-900)]">{service.startingPrice}</p>
            </div>
          )}
          {service.duration && (
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--ink-mute)] font-semibold">
                Süre
              </p>
              <p className="text-xl font-bold text-[var(--emerald-900)]">{service.duration}</p>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-6 pb-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[var(--emerald-900)]">Kapsam</h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[var(--ink-soft)] leading-relaxed">
                  <span
                    className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "var(--bronze-soft)" }}
                    aria-hidden="true"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--bronze-active)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[var(--emerald-900)]">Neden biz?</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {TRUST_SIGNALS.slice(0, 6).map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[var(--ink-soft)] text-sm">
                    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-6 lg:p-7 h-fit lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-[var(--emerald-900)]">Strateji görüşmesi</h2>
            <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
              Projeyi paylaşın, ilk iş günü içinde sabit fiyat teklifimizle dönelim.
            </p>
            <div className="mt-5">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--surface-alt)] mt-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-6 py-16">
            <h2 className="text-2xl font-bold text-[var(--emerald-900)]">Benzer hizmetler</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/hizmetler/${r.slug}`}
                  className="card group"
                >
                  <h3 className="text-base font-bold text-[var(--emerald-900)] group-hover:text-[var(--bronze-hover)]">
                    {r.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
