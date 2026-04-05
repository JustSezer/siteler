import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Bolu Dağı",
  description: "Aradığınız sayfa bulunamadı.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <div className="text-7xl sm:text-8xl font-bold text-green-100 select-none mb-2">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-green-950 mb-3">Sayfa Bulunamadı</h1>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="w-full sm:w-auto bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-center">
            Ana Sayfaya Dön
          </Link>
          <Link href="/blog" className="w-full sm:w-auto border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-6 py-3 rounded-xl transition-colors text-center">
            Blog Yazıları
          </Link>
        </div>
      </div>
    </section>
  );
}
