import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { FAQ_ITEMS, SITE } from "@/lib/site";

const EXTRA_FAQS = [
  {
    q: "Wix site kurulumu için hangi bilgiler lazım?",
    a: "İşletme adı, logo (varsa), sayfalarda çıkmasını istediğiniz metinler, görseller ve iletişim bilgileriniz yeterli. Tema ve renk tercihinizi de konuşuyoruz. İçerik hazır değilse biz de oluşturma konusunda destek veriyoruz.",
  },
  {
    q: "Wix'te kredi kartı ile ödeme alabilir miyim?",
    a: "Türkiye'den Wix'in yerleşik kredi kartı ödeme sistemi kısıtlı çalışıyor. Biz e-ticaret kurulumlarında iyzico'yu özel entegrasyonla bağlıyoruz. Böylece yurt içi kart ödemelerini sorunsuz alabiliyorsunuz.",
  },
  {
    q: "Wix Premium plan almadan satış yapabilir miyim?",
    a: "Hayır, satış (e-ticaret) için Wix'in Business veya Business VIP planı gerekli. Ücretsiz planda sitenizi inşa edebilir ama ödeme alıp satış yapamazsınız.",
  },
  {
    q: "Wix sitem Google'da çıkmıyor, ne yapabilirim?",
    a: "Yeni site ise indekslenmesi 1-4 hafta sürebilir. Bu süreyi hızlandırmak için Search Console'a sitemap göndermek, meta title-description'ları optimize etmek ve ilk 30 günde düzenli içerik eklemek gerekir. SEO paketimiz bu süreci profesyonel yürütür.",
  },
  {
    q: "Sitem yayınlandı ama değişiklikler görünmüyor?",
    a: "Tarayıcı önbelleği ya da yayın öncesi kaydetme unutulmuş olabilir. Ctrl+Shift+R ile sert yenileme yapın. Sorun devam ederse Wix editörde 'Yayınla' (Publish) düğmesine tekrar basın. Çözülmezse WhatsApp'tan yazın, uzaktan bakalım.",
  },
  {
    q: "Wix aboneliğimi başka birine devredebilir miyim?",
    a: "Evet. Wix'te site sahipliği transferi mümkün. Alıcının Wix hesabı olmalı. Aktarma sonrası ödeme ve yönetim tamamen yeni sahibe geçer. Bu transferi biz de sizin adınıza yönetebiliriz.",
  },
  {
    q: "Çalışmaya başlamak için ödeme nasıl olacak?",
    a: "Teklif onayı sonrası %50 başlangıç, iş teslim edildiğinde %50 kalan ödeme alıyoruz. Küçük kapsamlı işlerde tek seferde ödeme alınabilir. Fatura ve mutabakat için havale/EFT ya da iyzico bağlantısı kullanıyoruz.",
  },
  {
    q: "İşi beğenmezsem ne olur?",
    a: "Her pakette belirtilen sayıda ücretsiz revizyon hakkı var. Kapsam dışı bir istek olursa önce konuşur, uygunsa ek ücret teklifini size bildiririz. Kapsam dahilindeki revizyonlar ücretsizdir.",
  },
];

const ALL_FAQS = [...FAQ_ITEMS, ...EXTRA_FAQS];

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular — Wix Destek SSS",
  description:
    "Wix Türkçe destek, fiyatlar, süreler, ödeme yöntemleri ve teknik sorular hakkında en çok merak edilenlerin yanıtları.",
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
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight tracking-tight">
          Merak ettiğiniz her şey.
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)]">
          Cevabını bulamadığınız bir şey olursa formla yazın, 24 saat içinde yanıtlayalım.
        </p>

        <div className="mt-10 space-y-3">
          {ALL_FAQS.map((item, i) => (
            <details key={i} className="card group cursor-pointer" name="faq-sss">
              <summary className="font-semibold text-[var(--navy)] list-none flex items-start justify-between gap-4">
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
          <h2 className="text-xl font-bold text-[var(--navy)]">Cevabı bulamadınız mı?</h2>
          <p className="mt-2 text-[var(--ink-soft)]">
            Sorularınızı formla gönderin ya da WhatsApp'tan yazın.
          </p>
          <Link href="/iletisim" className="btn-primary mt-5">
            İletişime geçin
          </Link>
        </div>
      </section>
    </>
  );
}
