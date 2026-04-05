"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">Hata</h1>
      <p className="text-lg text-stone-600 mb-8">
        Bir şeyler yanlış gitti. Lütfen tekrar deneyin.
      </p>
      <button onClick={reset} className="btn-primary">
        Tekrar Dene
      </button>
    </div>
  );
}
