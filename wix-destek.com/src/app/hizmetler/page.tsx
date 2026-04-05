import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const metadata: Metadata = {
  title: "Wix Destek Hizmetleri ve Fiyatları — Wix Danışmanlık Paketleri",
  description:
    "Wix site kurma, tasarım, SEO ve teknik destek paketlerimizi inceleyin. Temel, Profesyonel ve Kurumsal hizmet seçenekleriyle ihtiyacınıza uygun Wix danışmanlığı alın.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/hizmetler`,
    siteName: "Wix Destek",
    title: "Wix Destek Hizmetleri ve Fiyatları",
    description:
      "Wix site kurma, tasarım, SEO ve teknik destek paketleri. İhtiyacınıza uygun paketi seçin, uzman desteği alın.",
  },
  alternates: {
    canonical: `${SITE_URL}/hizmetler`,
  },
};

const plans = [
  {
    name: "Temel",
    badge: null,
    price: "₺499",
    period: "tek seferlik",
    description: "Wix'e yeni başlayanlar ve tek seferlik sorun çözümü için ideal.",
    color: "border-slate-200",
    headerBg: "bg-slate-50",
    buttonClass: "bg-slate-800 hover:bg-slate-900 text-white",
    features: [
      "1 adet teknik sorun çözümü",
      "Adım adım kurulum rehberi",
      "Domain bağlama ve DNS yardımı",
      "E-posta ile destek",
      "48 saat yanıt süresi",
    ],
    notIncluded: [
      "Tasarım özelleştirme",
      "SEO optimizasyonu",
      "Öncelikli destek",
    ],
  },
  {
    name: "Profesyonel",
    badge: "En Popüler",
    price: "₺999",
    period: "tek seferlik",
    description: "Kapsamlı kurulum, tasarım ve SEO optimizasyonu için tam paket.",
    color: "border-blue-500",
    headerBg: "bg-blue-600",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
    features: [
      "Site kurulumu + tasarım özelleştirme",
      "SEO temel optimizasyonu (meta, başlıklar)",
      "E-ticaret veya blog kurulumu",
      "Domain + SSL yapılandırması",
      "Mobil uyumluluk kontrolü",
      "E-posta ile öncelikli destek",
      "24 saat yanıt süresi",
    ],
    notIncluded: [
      "Aylık bakım",
      "İçerik yazımı",
    ],
  },
  {
    name: "Kurumsal",
    badge: null,
    price: "Özel",
    period: "fiyatlandırma",
    description: "Sürekli Wix bakımı, aylık güncelleme ve öncelikli destek isteyen işletmeler için.",
    color: "border-purple-200",
    headerBg: "bg-purple-50",
    buttonClass: "bg-purple-700 hover:bg-purple-800 text-white",
    features: [
      "Aylık sınırsız teknik destek",
      "Düzenli SEO takibi ve raporlama",
      "İçerik güncellemeleri",
      "Yeni sayfa ve bölüm ekleme",
      "Performans izleme",
      "Telefon + WhatsApp destek",
      "4 saat yanıt süresi",
      "Aylık video görüşme",
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    q: "Paket satın aldıktan sonra ne yapmalıyım?",
    a: "İletişim formumuzu doldurarak hangi paketi seçtiğinizi ve Wix sorunuzu belirtin. Belirlenen süre içinde size ulaşıp süreci başlatacağız.",
  },
  {
    q: "Ödeme nasıl yapılıyor?",
    a: "İletişime geçtikten sonra banka havalesi veya kredi kartı ile ödeme yapabilirsiniz. Kurumsal paket için aylık veya yıllık ödeme seçenekleri mevcuttur.",
  },
  {
    q: "Sorunum çözülmezse ne olur?",
    a: "Teknik desteğimiz sorun tamamen çözülene kadar devam eder. Çözüm sağlanamayan durumlarda ücret iadesi yapılır.",
  },
  {
    q: "Hangi Wix planında destek veriyorsunuz?",
    a: "Wix'in tüm planlarında (ücretsiz, Core, Business, Business Elite) destek veriyoruz.",
  },
];

export default function HizmetlerPage() {
  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-slate-700">Hizmetler</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Wix Destek Paketleri
        </h1>
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Wix sitenizi kurmak, büyütmek veya teknik sorunları çözmek için ihtiyacınıza uygun paketi seçin.
          İlk danışmanlık her pakette <strong className="text-slate-700">ücretsizdir</strong>.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border-2 ${plan.color} overflow-hidden flex flex-col shadow-sm`}
          >
            {/* Card Header */}
            <div className={`${plan.headerBg} px-6 py-6`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-lg font-bold ${plan.headerBg === "bg-blue-600" ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </span>
                {plan.badge && (
                  <span className="bg-white text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
              </div>
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.headerBg === "bg-blue-600" ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.headerBg === "bg-blue-600" ? "text-blue-100" : "text-slate-500"}`}>
                  / {plan.period}
                </span>
              </div>
              <p className={`text-sm mt-2 ${plan.headerBg === "bg-blue-600" ? "text-blue-100" : "text-slate-500"}`}>
                {plan.description}
              </p>
            </div>

            {/* Features */}
            <div className="px-6 py-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700">{f}</span>
                </div>
              ))}
              {plan.notIncluded.map((f) => (
                <div key={f} className="flex items-start gap-2.5 opacity-40">
                  <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-slate-500">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
              <Link
                href="/iletisim"
                className={`block text-center font-semibold px-4 py-3 rounded-xl transition-colors duration-150 text-sm ${plan.buttonClass}`}
              >
                {plan.price === "Özel" ? "Teklif Al" : "Hemen Başla"}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-8 mb-16 text-center">
        <p className="text-slate-700 text-base sm:text-lg font-medium mb-6">
          Hangi paketi seçeceğinizden emin değil misiniz? Ücretsiz danışmanlık için bize yazın.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 mb-6">
          {[
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Çözüm garantisi" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "24s içinde yanıt" },
            { icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z", label: "İlk danışmanlık ücretsiz" },
            { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "5+ yıl deneyim" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
        >
          Ücretsiz Danışmanlık Al
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Sıkça Sorulan Sorular</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">{faq.q}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
