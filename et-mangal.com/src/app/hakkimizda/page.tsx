import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://et-mangal.com";

export const metadata: Metadata = {
  title: "Hakkımızda | Et & Mangal - Mangal Kültürü ve Et Rehberi",
  description:
    "Et & Mangal hakkında bilgi edinin. Et tarifleri, mangal kültürü ve ızgara teknikleri konusunda Türkiye'nin kapsamlı rehberi.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-red-700">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">Hakkımızda</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Hakkımızda</h1>

      <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
        <p>
          <strong>Et & Mangal</strong>, Türk mutfağının en köklü geleneklerinden biri olan
          mangal kültürünü ve et yemeklerini modern bir bakış açısıyla ele alan kapsamlı bir
          içerik platformudur.
        </p>

        <h2>Misyonumuz</h2>
        <p>
          Amacımız, et severlere doğru bilgiyi ulaştırmak ve mangal kültürünü yaşatmaktır.
          Kasaptan doğru et seçiminden, mükemmel pişirme tekniklerine kadar ihtiyacınız olan
          tüm bilgileri uzman içeriklerimizle sunuyoruz.
        </p>

        <h2>Ne Sunuyoruz?</h2>
        <ul>
          <li><strong>Et Rehberi:</strong> Dana, kuzu, tavuk ve balık etlerinin parçaları, özellikleri ve en uygun pişirme yöntemleri</li>
          <li><strong>Mangal Teknikleri:</strong> Kömür seçiminden ateş kontrolüne, marinasyondan servis önerilerine kadar A'dan Z'ye mangal rehberi</li>
          <li><strong>Tarifler:</strong> Evde ve açık havada uygulanabilir, adım adım anlatımlı et tarifleri</li>
          <li><strong>Pişirme İpuçları:</strong> Reverse sear, sous vide, dumanlama gibi modern teknikler</li>
        </ul>

        <h2>Bize Ulaşın</h2>
        <p>
          Sorularınız, önerileriniz veya iş birliği talepleriniz için{" "}
          <Link href="/iletisim" className="text-red-700 hover:text-red-800">
            iletişim sayfamızı
          </Link>{" "}
          ziyaret edebilirsiniz.
        </p>
      </div>
    </div>
  );
}
