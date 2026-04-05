"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-red-800 mb-3 sm:mb-4">
        Hata
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-stone-700 mb-3 sm:mb-4">
        Bir şeyler ters gitti
      </h2>
      <p className="text-stone-500 mb-6 sm:mb-8 text-sm sm:text-base">
        Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button
          onClick={reset}
          className="bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
        >
          Tekrar Dene
        </button>
        <a
          href="/"
          className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}
