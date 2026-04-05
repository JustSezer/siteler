"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-3">Bir Hata Oluştu</h2>
      <p className="text-slate-500 mb-6">
        Beklenmedik bir hata meydana geldi. Lütfen sayfayı yenileyin veya
        sorun devam ederse{" "}
        <a href="/iletisim" className="text-blue-600 underline">
          destek alın
        </a>
        .
      </p>
      <button
        onClick={reset}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
