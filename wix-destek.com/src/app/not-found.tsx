import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-3">404</h1>
      <h2 className="text-xl font-semibold text-slate-700 mb-4">Sayfa Bulunamadı</h2>
      <p className="text-slate-500 mb-8">
        Aradığınız sayfa taşınmış, silinmiş veya hiç mevcut olmamış olabilir.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/iletisim"
          className="border border-slate-300 hover:border-blue-500 text-slate-600 hover:text-blue-600 font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Destek Al
        </Link>
      </div>
    </div>
  );
}
