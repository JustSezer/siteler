import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { SITE, TRUST_SIGNALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda — Türkiye'nin Wix Destek Ekibi",
  description:
    "Yıllardır Wix platformunda yüzlerce siteyi hayata geçiren deneyimli ekip. Şeffaf, Türkçe ve hızlı hizmet anlayışımızla tanışın.",
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
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight tracking-tight">
          Biz kimiz?
        </h1>
        <p className="mt-5 text-lg text-[var(--ink-soft)] leading-relaxed">
          Wix Destek TR, Türkiye'de Wix kullanıcılarının takıldığı her noktada
          Türkçe profesyonel destek vermek için kurulmuş bağımsız bir uzman ekibidir.
          Yıllardır Wix platformunda site kurulumu, tasarım, SEO, domain ve
          e-ticaret projeleri yürütüyoruz.
        </p>
        <p className="mt-4 text-[var(--ink-soft)] leading-relaxed">
          Wix'in resmî bir Türkçe destek hattı yok; yardım dokümanları çoğunlukla
          İngilizce ve kullanıcı-forum tabanlı. Biz de tam bu açığı kapatmak için
          yoldayız. Tek bir net amacımız var: sorununuzu anlayıp mümkün olan en
          hızlı, en şeffaf şekilde çözmek.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 pb-10">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { n: "500+", t: "Teslim edilen proje" },
            { n: "24 sa", t: "Ortalama ilk yanıt" },
            { n: "%98", t: "Müşteri memnuniyeti" },
          ].map((stat) => (
            <div key={stat.t} className="card text-center py-7">
              <p className="text-4xl font-extrabold text-[var(--orange)]">{stat.n}</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)] font-semibold">{stat.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-[var(--navy)]">
          Çalışma ilkelerimiz
        </h2>
        <ul className="mt-6 space-y-4">
          {TRUST_SIGNALS.map((t) => (
            <li key={t} className="flex items-start gap-3 text-[var(--ink-soft)] leading-relaxed">
              <span
                className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "var(--orange-soft)" }}
                aria-hidden="true"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--orange-active)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-10">
        <div className="card bg-[var(--surface)] border-none p-8">
          <h2 className="text-2xl font-bold text-[var(--navy)]">
            Neden sadece Wix?
          </h2>
          <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">
            Birçok platformda ortalama işler yapmaktansa tek platformda çok iyi
            olmayı seçtik. Wix'in her köşesini, her sınırını ve her gizli özelliğini
            biliyoruz. Sorununuz Wix'se — yeri burası.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-14">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--navy)]">
            Tanışalım mı?
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Ön görüşme ücretsiz. Size en uygun çözümü birlikte bulalım.
          </p>
          <Link href="/iletisim" className="btn-primary mt-6">
            Ücretsiz ön görüşme alın
          </Link>
        </div>
      </section>
    </>
  );
}
