import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com";

export const metadata: Metadata = {
  title: "Hakkımızda | Düzce'de Yemek - Düzce Mutfağı Rehberi",
  description:
    "Düzce'de Yemek hakkında bilgi edinin. Düzce mutfak kültürü, geleneksel lezzetler ve mekan rehberi konusunda Düzce'nin kapsamlı gastronomi platformu.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">Hakkımızda</span>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <span className="w-1 h-8 bg-orange-500 rounded-full inline-block"></span>
        <h1 className="text-3xl sm:text-4xl font-bold">Hakkımızda</h1>
      </div>

      <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
        <p>
          <strong>Düzce&apos;de Yemek</strong>, Karadeniz ile İç Anadolu arasındaki bereketli
          coğrafyada gelişen Düzce mutfak kültürünü keşfetmek isteyenler için hazırlanmış
          kapsamlı bir gastronomi platformudur.
        </p>

        <h2>Misyonumuz</h2>
        <p>
          Düzce&apos;nin geleneksel lezzetlerini, yerel mekanlarını ve mutfak kültürünü hem
          Düzceli hem de şehri ziyaret eden konuklara tanıtmaktır. Köy kahvaltısından akşam
          yemeklerine, geleneksel tariflerden modern restoranların menülerine kadar her konuda
          bilgi sunmaktayız.
        </p>

        <h2>Ne Sunuyoruz?</h2>
        <ul>
          <li><strong>Mekan Rehberi:</strong> Düzce&apos;nin en iyi restoranları, kafeleri ve köy kahvaltısı mekanları</li>
          <li><strong>Geleneksel Tarifler:</strong> Mısır ekmeği, lahana çorbası, fasulye pilaki ve daha fazlası</li>
          <li><strong>Yerel Ürünler:</strong> Düzce fındığı, orman balı, kestane ve bölgeye özgü ürünler</li>
          <li><strong>Lezzet Yazıları:</strong> Düzce yemek kültürünü derinlemesine inceleyen içerikler</li>
        </ul>

        <h2>Bize Ulaşın</h2>
        <p>
          Sorularınız, önerileriniz veya iş birliği talepleriniz için{" "}
          <Link href="/iletisim" className="text-orange-600 hover:text-orange-700 font-bold">
            iletişim sayfamızı
          </Link>{" "}
          ziyaret edebilir ya da{" "}
          <a
            href="https://ibrahiminyeri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 font-bold"
          >
            ibrahiminyeri.com
          </a>{" "}
          adresini inceleyebilirsiniz.
        </p>
      </div>
    </div>
  );
}
