import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #14532d, #166534)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          color: "#4ade80",
          fontWeight: 800,
          fontSize: 100,
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
