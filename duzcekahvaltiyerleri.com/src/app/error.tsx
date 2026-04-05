"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Bir Hata Oluştu</h2>
        <p className="text-stone-400 mb-6 text-sm">Sayfa yüklenirken bir sorun oluştu.</p>
        <button
          onClick={reset}
          className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </section>
  );
}
