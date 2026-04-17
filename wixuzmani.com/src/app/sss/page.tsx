import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { FAQ_ITEMS, SITE } from "@/lib/site";

const EXTRA_FAQS = [
  {
    q: "Sözleşme modeli nasıl?",
    a: "Tüm projelerde yazılı hizmet sözleşmesi imzalanır. Sabit kapsam, sabit fiyat, teslim ve ödeme takvimi netleştirilir. Talep halinde NDA da imzalanır.",
  },
  {
    q: "Ödeme şartları?",
    a: "Proje başlangıcında %40, sprint ortasında %30, teslim onayında %30 — üç dilim. Growth (aylık retainer) paketleri her ayın ilk iş günü faturalanır.",
  },
  {
    q: "Fatura ve vergilendirme?",
    a: "Tüm işler e-fatura / e-arşiv olarak kesilir. KDV hariç fiyatlar paylaşılır. Yurt dışı müşteriler için hizmet ihracı faturası mümkündür.",
  },
  {
    q: "Kapsam değişikliklerinde ne oluyor?",
    a: "Sabit kapsam ilkesi: teklif dışı istekler için önce yazılı değişiklik notu paylaşılır; onay alınmadan ek iş yapılmaz. Bu, süreç öngörülebilirliği için kurduğumuz en temel disiplin.",
  },
  {
    q: "Ekibinize kaç kişi erişiyor?",
    a: "Bir proje için 3 kişilik çekirdek ekip çalışır (marka yönetmeni, SEO uzmanı, geliştirici) ve tek iletişim noktası proje yöneticisidir. Shared inbox yerine tek kişiye yazarsınız.",
  },
  {
    q: "Aylık rapor nasıl görünüyor?",
    a: "GA4 + Search Console + PageSpeed verileri derlenir; KPI tablosu ve o ayki uygulama özeti ile birlikte paylaşılır. İsterseniz Looker Studio paylaşımlı dashboard da kuruyoruz.",
  },
  {
    q: "Uluslararası çok dilli projeler destekleniyor mu?",
    a: "Evet. Wix Multilingual ile ek dil kurulumu, hreflang yapılandırması ve profesyonel çeviri akışı paket dışı seçenek olarak sunuluyor.",
  },
  {
    q: "Bakım paketi olmadan iş yapılıyor mu?",
    a: "Evet. Launch veya tek seferlik hizmetler bakım paketi olmadan teslim edilir; teslimden sonra bağımsızsınız. Sürekli iyileşme isteyen markalar için Growth paketi öneriyoruz.",
  },
];

const ALL_FAQS = [...FAQ_ITEMS, ...EXTRA_FAQS];

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — Wix Uzmanı Ajans",
  description:
    "Süreç, ekip, fiyat, teslim, ölçüm, sözleşme ve raporlama hakkında sıkça sorulan sorular.",
  alternates: { canonical: `${SITE.url}/sss` },
};

export default function SssPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ALL_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-6 py-16">
        <span className="eyebrow mb-3 block">Sıkça Sorulan Sorular</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
          Süreç hakkında merak edilenler.
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)]">
          Cevabını bulamadığınız bir konu olursa strateji görüşmesinde birebir konuşalım.
        </p>

        <div className="mt-10 space-y-3">
          {ALL_FAQS.map((item, i) => (
            <details key={i} className="card group cursor-pointer" name="faq-sss">
              <summary className="font-semibold text-[var(--emerald-900)] list-none flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span
                  className="flex-shrink-0 transition-transform group-open:rotate-45"
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
          ))}
        </div>

        <div className="mt-12 card text-center py-8">
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">Başka bir konu mu var?</h2>
          <p className="mt-2 text-[var(--ink-soft)]">
            Strateji görüşmesinde birebir konuşalım — 30 dakika ücretsiz.
          </p>
          <Link href="/iletisim" className="btn-primary mt-5">
            Randevu alın
          </Link>
        </div>
      </section>
    </>
  );
}
