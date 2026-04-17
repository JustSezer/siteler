import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)",
          borderRadius: "7px",
          color: "#FFFFFF",
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        W<span style={{ color: "#F43F5E" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
