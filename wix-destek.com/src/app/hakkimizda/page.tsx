import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const metadata: Metadata = {
  title: "Hakkımızda — Türkiye'nin Wix Destek ve Danışmanlık Uzmanları",
  description:
    "Wix Destek ekibi olarak 5+ yıllık deneyimle Türkiye'deki Wix kullanıcılarına Türkçe yardım ve danışmanlık hizmeti sunuyoruz. Wix sorunlarınızı hızla çözüyoruz.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/hakkimizda`,
    siteName: "Wix Destek",
    title: "Hakkımızda — Türkiye'nin Wix Destek ve Danışmanlık Uzmanları",
    description:
      "5+ yıllık Wix deneyimiyle Türkiye'deki kullanıcılara Türkçe destek sağlıyoruz. Wix site kurma, tasarım, SEO ve teknik sorun çözme konularında uzmanız.",
  },
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Hakkımızda", url: `${SITE_URL}/hakkimizda` },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-slate-700">Hakkımızda</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        Wix Destek Hakkında — Türkiye&apos;nin Wix Danışmanlık Ekibi
      </h1>

      {/* Intro */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <p className="text-slate-700 text-lg leading-relaxed">
          <strong className="text-blue-700">Wix Destek</strong>, Türkiye&apos;deki bireysel kullanıcılara ve küçük işletmelere
          Wix platformunda profesyonel destek sağlayan bağımsız bir danışmanlık hizmetidir.
          5 yılı aşkın Wix deneyimimizle yüzlerce müşteriye yardımcı olduk.
        </p>
      </div>

      {/* Mission */}
      <div className="prose max-w-none text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Misyonumuz</h2>
        <p className="leading-relaxed mb-6">
          Wix güçlü bir web sitesi oluşturma platformu olmasına rağmen, pek çok kullanıcı
          teknik detaylar, SEO ayarları, e-ticaret entegrasyonları veya tasarım özelleştirmeleri
          konusunda zorlanmaktadır. Misyonumuz, bu kullanıcıların Wix&apos;in tüm potansiyelinden
          yararlanmasını sağlamaktır.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ne Yapıyoruz?</h2>
        <ul className="space-y-3 mb-6">
          {[
            "Wix site kurma ve yayına alma sürecinde adım adım rehberlik",
            "Profesyonel tasarım önerileri ve özelleştirme desteği",
            "E-ticaret mağazası kurulumu ve ödeme sistemi entegrasyonu",
            "Google sıralamalarını artırmak için SEO optimizasyonu",
            "Domain, DNS ve SSL kurulumu",
            "Teknik sorunların hızlı teşhisi ve çözümü",
            "Wix uygulamaları ve eklentileri konusunda danışmanlık",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Neden Wix Destek?</h2>
        <p className="leading-relaxed mb-4">
          Türkçe kaynak sıkıntısı çeken Wix kullanıcılarının yanında olmak için yola çıktık.
          Wix&apos;in İngilizce belgelerini çevirmek yerine, Türk kullanıcıların gerçek ihtiyaçlarını
          anlayarak pratik çözümler üretiyoruz.
        </p>
        <p className="leading-relaxed mb-8">
          Blog yazılarımız, yüzlerce Wix sorusunu çözerken edindiğimiz deneyimleri aktarıyor.
          Destek talebinizi bizimle paylaşın; kişiselleştirilmiş çözümler sunalım.
        </p>
      </div>

      {/* Uyarı: Bağımsız hizmet */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-amber-800 text-sm">
            <strong>Yasal Not:</strong> Wix Destek, Wix.com ile resmi bir bağlantısı olmayan bağımsız bir danışmanlık hizmetidir.
            Wix ve Wix logosu Wix.com Ltd. şirketinin tescilli markalarıdır.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-xl p-6 text-center text-white">
        <h2 className="text-xl font-bold mb-2">Wix Sorununuzu Çözelim</h2>
        <p className="text-blue-100 text-sm mb-4">İlk danışmanlık ücretsiz — hemen başlayalım.</p>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
        >
          Destek Talebi Oluştur
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
