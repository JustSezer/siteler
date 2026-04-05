import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bolu Et Lokantası";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #92400e 0%, #1c1917 100%)",
          position: "relative",
        }}
      >
        {/* Amber sol şerit */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "8px",
            height: "630px",
            background: "#f59e0b",
          }}
        />

        {/* Site adı */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Bolu Et Lokantası
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#fde68a",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Bolu Yemekleri, Et Kültürü ve Lokanta Rehberi
        </div>

        {/* Ayraç */}
        <div
          style={{
            width: "220px",
            height: "3px",
            background: "#f59e0b",
            borderRadius: "2px",
            marginBottom: "28px",
          }}
        />

        {/* Domain */}
        <div
          style={{
            fontSize: "22px",
            color: "#fcd34d",
          }}
        >
          boluetlokantasi.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
