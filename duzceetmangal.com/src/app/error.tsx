"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Uygulama hatası:", error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-4 select-none">⚠️</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3">
          Bir Hata Oluştu
        </h1>
        <p className="text-stone-500 mb-8 text-sm sm:text-base">
          Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={reset}
          className="bg-orange-800 hover:bg-orange-900 text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </section>
  );
}
