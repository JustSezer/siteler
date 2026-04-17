"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
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
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="eyebrow">Hata</p>
      <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight">
        Bir şeyler ters gitti.
      </h1>
      <p className="mt-4 text-[var(--ink-soft)] text-lg">
        Sayfa yüklenirken beklenmedik bir sorun oluştu. Sayfayı yenileyebilir
        ya da doğrudan bize yazabilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <button onClick={reset} className="btn-primary">Tekrar dene</button>
        <Link href="/iletisim" className="btn-secondary">İletişim</Link>
      </div>
    </section>
  );
}
