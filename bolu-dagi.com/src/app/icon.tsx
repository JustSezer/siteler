import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#14532d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          color: "#4ade80",
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
