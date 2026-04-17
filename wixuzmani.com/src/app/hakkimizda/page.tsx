import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { SITE, TRUST_SIGNALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda — Türkiye'nin Wix Uzman Ekibi",
  description:
    "Tasarımcı, SEO uzmanı ve geliştiriciden oluşan ajans ekibi. İş hedefinden hareket eden, ölçülebilir sonuç teslim eden yaklaşım.",
  alternates: { canonical: `${SITE.url}/hakkimizda` },
};

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE.url}/hakkimizda`,
          about: {
            "@type": "Organization",
            name: SITE.fullName,
            url: SITE.url,
            email: SITE.email,
            foundingDate: String(SITE.foundedYear),
          },
        }}
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-16">
        <span className="eyebrow mb-3 block">Hakkımızda</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
          Ajans süreci, platform uzmanlığı.
        </h1>
        <p className="mt-5 text-lg text-[var(--ink-soft)] leading-relaxed">
          Wix Uzmanı, Türkiye&apos;de Wix platformuna ajans disipliniyle yaklaşan bağımsız
          bir ekiptir. 40&apos;ı aşkın kurumsal projede marka stratejisi, SEO mimarisi,
          performans optimizasyonu ve dönüşüm programları teslim ettik.
        </p>
        <p className="mt-4 text-[var(--ink-soft)] leading-relaxed">
          Wix Studio / Editor X üzerinde ajans kalitesi arayan markalar için kuruldu:
          marka atölyesiyle başlayan, KPI ile biten; iş hedefinden hareket eden bir
          çalışma modeli. Başka platformla uğraşmıyoruz; tam odak Wix.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 pb-10">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { n: "40+", t: "Teslim edilen kurumsal proje" },
            { n: "-58%", t: "Ortalama LCP iyileşmesi" },
            { n: "3 uzman", t: "Her projede çekirdek ekip" },
          ].map((stat) => (
            <div key={stat.t} className="card text-center py-8">
              <p className="kpi text-4xl">{stat.n}</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)] font-semibold">{stat.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-[var(--emerald-900)]">
          Çalışma ilkelerimiz
        </h2>
        <ul className="mt-6 space-y-4">
          {TRUST_SIGNALS.map((t) => (
            <li key={t} className="flex items-start gap-3 text-[var(--ink-soft)] leading-relaxed">
              <span
                className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "var(--bronze-soft)" }}
                aria-hidden="true"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--bronze-active)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-10">
        <div className="card bg-[var(--surface-alt)] border-none p-8">
          <h2 className="text-2xl font-bold text-[var(--emerald-900)]">
            Neden yalnızca Wix?
          </h2>
          <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">
            Birden çok platformda sıradan işler çıkarmak yerine tek platformda derin uzmanlık
            kurduk. Wix Studio&apos;nun her kısıtını, her esnekliğini ve kurumsal projelerde
            nasıl ölçekleneceğini biliyoruz. Bu odak, her proje teslim süresini ve maliyetini
            öngörülebilir hale getiriyor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-14">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--emerald-900)]">
            Tanışalım.
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            30 dakikalık strateji görüşmesinde projenizi birlikte değerlendirelim.
          </p>
          <Link href="/iletisim" className="btn-primary mt-6">
            Randevu alın
          </Link>
        </div>
      </section>
    </>
  );
}
