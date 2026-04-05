import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const metadata: Metadata = {
  title: "Wix Destek Talebi Oluşturun — Ücretsiz İlk Danışmanlık",
  description:
    "Wix sorununuzu bize anlatın, 24 saat içinde Türkçe destek alın. Wix site kurma, tasarım, SEO ve teknik sorunlar için ücretsiz ilk danışmanlık.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/iletisim`,
    siteName: "Wix Destek",
    title: "Wix Destek Talebi Oluşturun — Ücretsiz İlk Danışmanlık",
    description:
      "Wix sorununuzu bize anlatın, 24 saat içinde Türkçe destek alın. İlk danışmanlık ücretsiz.",
  },
  alternates: {
    canonical: `${SITE_URL}/iletisim`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "İletişim", url: `${SITE_URL}/iletisim` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-slate-700">İletişim</span>
      </nav>

      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
          Wix Destek Talebi Oluşturun
        </h1>
        <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
          Formu doldurun, uzman ekibimiz 24 saat içinde size ulaşsın. İlk danışmanlık ücretsizdir.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Sol: Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Neden Biz?</h2>

          {[
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Hızlı Yanıt",
              desc: "24 saat içinde size geri dönüş garantisi",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Deneyimli Ekip",
              desc: "5+ yıl Wix platformu deneyimi",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "İlk Danışmanlık Ücretsiz",
              desc: "Probleminizi anlayıp çözümü birlikte belirleyelim",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "E-posta",
              desc: "info@wix-destek.com",
              isLink: true,
              href: "mailto:info@wix-destek.com",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                {item.isLink ? (
                  <a href={item.href} className="text-blue-600 hover:text-blue-700 text-sm">
                    {item.desc}
                  </a>
                ) : (
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                )}
              </div>
            </div>
          ))}

          {/* Destek konuları */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mt-6">
            <h3 className="font-semibold text-slate-800 mb-3">Destek Verdiğimiz Konular</h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {[
                "Wix site kurma ve yayına alma",
                "Wix tasarım ve özelleştirme",
                "Wix e-ticaret mağazası",
                "Domain bağlama ve DNS",
                "Wix SEO optimizasyonu",
                "Wix eklenti sorunları",
                "Wix mobil görünüm",
                "Wix premium plan seçimi",
              ].map((konu) => (
                <li key={konu} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {konu}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sağ: Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
