"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#FAFAF9",
          color: "#1C1917",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "2rem", color: "#B91C1C", marginBottom: "1rem" }}>
            Beklenmeyen Hata
          </h1>
          <p style={{ color: "#78716C", marginBottom: "2rem" }}>
            Bir şeyler yanlış gitti. Lütfen sayfayı yenileyin.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#B91C1C",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Tekrar Dene
          </button>
        </div>
      </body>
    </html>
  );
}
