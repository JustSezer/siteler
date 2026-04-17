import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Wix Destek TR — Türkçe Wix Uzmanından Profesyonel Yardım";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1200px 600px at 100% 0%, rgba(244,63,94,0.45), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(251,191,36,0.28), transparent 55%), linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #3730A3 100%)",
          color: "#FFFFFF",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Wix<span style={{ color: "#F43F5E" }}>.</span> Destek
          </span>
          <span style={{ fontSize: 20, color: "#C7C5E2", marginLeft: 4 }}>
            .com.tr
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#FBBF24",
              marginBottom: 24,
            }}
          >
            Türkçe Wix Desteği
          </span>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Wix'te takıldığınız noktayı</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #F43F5E, #FBBF24 60%, #6366F1)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              birlikte çözelim.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <span style={{ fontSize: 22, color: "#C7C5E2" }}>
            24 saat içinde yanıt
          </span>
          <span style={{ fontSize: 22, color: "#C7C5E2" }}>•</span>
          <span style={{ fontSize: 22, color: "#C7C5E2" }}>
            Sabit fiyat
          </span>
          <span style={{ fontSize: 22, color: "#C7C5E2" }}>•</span>
          <span style={{ fontSize: 22, color: "#C7C5E2" }}>
            KVKK uyumlu
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
