import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-amber-900 mb-3 sm:mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-stone-700 mb-3 sm:mb-4">
        Sayfa Bulunamadı
      </h2>
      <p className="text-stone-500 mb-6 sm:mb-8 text-sm sm:text-base">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Link
          href="/"
          className="bg-amber-800 hover:bg-amber-900 active:bg-amber-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
        >
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/blog"
          className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white active:bg-amber-900 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
