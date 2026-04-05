import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Düzce Et Mangal",
  description: "Aradığınız sayfa bulunamadı.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl sm:text-9xl font-bold text-orange-200 select-none">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 mt-4 mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-stone-500 mb-8 text-sm sm:text-base">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto bg-orange-800 hover:bg-orange-900 text-white font-semibold px-6 py-3 rounded-full transition-colors text-center"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto border border-orange-800 text-orange-800 hover:bg-orange-800 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors text-center"
          >
            Blog Yazıları
          </Link>
        </div>
      </div>
    </section>
  );
}
