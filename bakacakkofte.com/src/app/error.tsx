"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen paper-warm grain flex items-center py-20">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="eyebrow mb-4">Hata</p>
        <h1 className="display-font text-3xl md:text-5xl text-ink">
          Bir şeyler <span className="italic text-red">ters gitti.</span>
        </h1>
        <p className="mt-5 text-ink-2 leading-relaxed">
          Sistem beklenmeyen bir hata verdi. Sayfayı yeniden yüklemeyi veya ana sayfaya dönmeyi
          deneyebilirsin.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn-red">
            <RefreshCcw className="w-4 h-4" /> Tekrar dene
          </button>
          <Link href="/" className="btn-outline">
            <Home className="w-4 h-4" /> Ana Sayfa
          </Link>
        </div>
      </div>
    </main>
  );
}
