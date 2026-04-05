import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-green-900 mb-3 sm:mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-stone-700 mb-3 sm:mb-4">
        Sayfa Bulunamadı
      </h2>
      <p className="text-stone-500 mb-6 sm:mb-8 text-sm sm:text-base">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Link
          href="/"
          className="bg-green-900 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm sm:text-base"
        >
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/blog"
          className="border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm sm:text-base"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
