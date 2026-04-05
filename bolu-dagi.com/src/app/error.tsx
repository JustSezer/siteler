"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Uygulama hatası:", error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Bir Hata Oluştu</h1>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">Sayfa yüklenirken beklenmeyen bir hata oluştu.</p>
        <button
          onClick={reset}
          className="bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </section>
  );
}
