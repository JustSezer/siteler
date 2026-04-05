import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://boluetlokantasi.com";

export const metadata: Metadata = {
  title: "Hakkımızda | Bolu Et Lokantası - Bolu Yemek Kültürü Rehberi",
  description:
    "Bolu Et Lokantası hakkında bilgi edinin. Bolu yemekleri, et kültürü ve geleneksel Türk mutfağı konusunda kapsamlı rehberiniz.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-amber-800">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">Hakkımızda</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Hakkımızda</h1>

      <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
        <p>
          <strong>Bolu Et Lokantası</strong>, Türkiye&apos;nin lezzet başkenti olarak tanınan
          Bolu&apos;nun köklü lokanta kültürünü ve eşsiz et lezzetlerini modern bir bakış açısıyla
          ele alan kapsamlı bir içerik platformudur.
        </p>

        <h2>Misyonumuz</h2>
        <p>
          Amacımız, Bolu mutfağının zengin geleneğini yaşatmak ve yemek severlere Bolu&apos;nun
          eşsiz lezzetleri hakkında doğru bilgiyi ulaştırmaktır. Geleneksel lokanta kültüründen
          modern yorumlara, kaliteli et seçiminden Bolu yemeklerinin tarihine kadar ihtiyacınız
          olan tüm bilgileri uzman içeriklerimizle sunuyoruz.
        </p>

        <h2>Ne Sunuyoruz?</h2>
        <ul>
          <li><strong>Bolu Mutfağı Rehberi:</strong> Bolu&apos;nun meşhur yemekleri, tarihleri ve özgün yapım teknikleri</li>
          <li><strong>Et Tavsiyeleri:</strong> Kaliteli et seçimi, pişirme yöntemleri ve lokanta önerileri</li>
          <li><strong>Lokanta Rehberi:</strong> Bolu&apos;da yemek kültürü, en iyi lokantalar ve gastronomi turu önerileri</li>
          <li><strong>Geleneksel Tarifler:</strong> Nesiller boyu aktarılan geleneksel Bolu yemek tarifleri</li>
        </ul>

        <h2>Bize Ulaşın</h2>
        <p>
          Sorularınız, önerileriniz veya iş birliği talepleriniz için{" "}
          <Link href="/iletisim" className="text-amber-800 hover:text-amber-900">
            iletişim sayfamızı
          </Link>{" "}
          ziyaret edebilirsiniz.
        </p>
      </div>
    </div>
  );
}
