"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center"
      role="alert"
    >
      {/* Dekoratif ikon */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl"
        style={{
          border: "1px solid rgba(139,0,0,0.4)",
          color: "#8b0000",
          backgroundColor: "rgba(139,0,0,0.08)",
        }}
        aria-hidden="true"
      >
        !
      </div>

      <h1
        className="font-semibold mb-3"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#f5f5f5",
        }}
      >
        Bir Sorun Oluştu
      </h1>

      <p
        className="text-base leading-relaxed mb-10 max-w-md mx-auto"
        style={{ color: "#666666" }}
      >
        Sayfa yüklenirken beklenmeyen bir hata oluştu. Sayfayı yenileyerek
        tekrar deneyebilirsiniz.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={reset}
          className="hero-cta-primary inline-flex items-center justify-center gap-2 font-semibold text-sm tracking-widest uppercase px-8 py-4 min-h-[52px]"
        >
          Tekrar Dene
        </button>
        <a
          href="/"
          className="hero-cta-secondary inline-flex items-center justify-center gap-2 font-medium text-sm tracking-widest uppercase px-7 py-4 min-h-[52px]"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}
