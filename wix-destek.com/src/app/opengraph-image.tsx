import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wix Destek — Profesyonel Wix Yardım ve Danışmanlık";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e40af 0%, #4338ca 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo icon */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-1px",
            marginBottom: 16,
          }}
        >
          Wix<span style={{ color: "#93c5fd" }}>Destek</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: "#bfdbfe",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Profesyonel Wix Yardım ve Danışmanlık
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 22,
            color: "#93c5fd",
            background: "rgba(255,255,255,0.1)",
            padding: "8px 24px",
            borderRadius: 40,
            marginTop: 8,
          }}
        >
          wix-destek.com
        </div>
      </div>
    ),
    { ...size }
  );
}
