"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex items-center justify-center py-32 bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">Hata</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Bir şeyler yanlış gitti
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </main>
  );
}
