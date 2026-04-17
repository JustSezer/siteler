import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Wix Uzmanı — Ölçülebilir Sonuç Veren Wix Ajansı";
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
            "radial-gradient(1200px 600px at 100% 0%, rgba(201,169,97,0.35), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(47,168,124,0.18), transparent 55%), linear-gradient(135deg, #062A20 0%, #0A3D2E 55%, #0F4F3C 100%)",
          color: "#FAFAF7",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              textTransform: "lowercase",
            }}
          >
            wix<span style={{ color: "#C9A961", margin: "0 6px" }}>·</span>uzmanı
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A961",
              marginBottom: 24,
            }}
          >
            Kurumsal Wix Ajansı
          </span>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Wix&apos;te ajans kalitesi,</span>
            <span
              style={{
                background: "linear-gradient(90deg, #C9A961, #FAFAF7 60%, #C9A961)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              ölçülebilir sonuç.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            paddingTop: 20,
            borderTop: "1px solid rgba(250,250,247,0.14)",
          }}
        >
          <span style={{ fontSize: 22, color: "#C9A961" }}>Core Web Vitals garantili</span>
          <span style={{ fontSize: 22, color: "#FAFAF7", opacity: 0.5 }}>•</span>
          <span style={{ fontSize: 22, color: "#C9A961" }}>Sabit kapsam</span>
          <span style={{ fontSize: 22, color: "#FAFAF7", opacity: 0.5 }}>•</span>
          <span style={{ fontSize: 22, color: "#C9A961" }}>KVKK uyumlu</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
