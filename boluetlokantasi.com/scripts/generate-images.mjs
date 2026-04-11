import { createCanvas } from "canvas";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

// OG Image: 1200x630
function generateOG() {
  const w = 1200;
  const h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext("2d");

  // Gradient background
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#5C1010");
  grad.addColorStop(1, "#8B1A1A");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Gold accent line
  ctx.fillStyle = "#C8A951";
  ctx.fillRect(w / 2 - 60, 200, 120, 4);

  // Title
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 56px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Bolu Et Lokantası", w / 2, 300);
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("Rehberi", w / 2, 370);

  // Subtitle
  ctx.fillStyle = "#D4BA6A";
  ctx.font = "24px sans-serif";
  ctx.fillText("Aşçılar Diyarının En İyi Et Lokantaları", w / 2, 440);

  // URL
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "20px sans-serif";
  ctx.fillText("boluetlokantasi.com", w / 2, 560);

  const buffer = canvas.toBuffer("image/jpeg", { quality: 0.9 });
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-default.jpg"), buffer);
  console.log("OG image generated: public/og-default.jpg");
}

// Apple Touch Icon: 180x180
function generateAppleTouchIcon() {
  const s = 180;
  const canvas = createCanvas(s, s);
  const ctx = canvas.getContext("2d");

  // Background
  const grad = ctx.createLinearGradient(0, 0, s, s);
  grad.addColorStop(0, "#8B1A1A");
  grad.addColorStop(1, "#5C1010");
  ctx.fillStyle = grad;

  // Rounded rect
  const r = 32;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(s - r, 0);
  ctx.quadraticCurveTo(s, 0, s, r);
  ctx.lineTo(s, s - r);
  ctx.quadraticCurveTo(s, s, s - r, s);
  ctx.lineTo(r, s);
  ctx.quadraticCurveTo(0, s, 0, s - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  // Text
  ctx.fillStyle = "#C8A951";
  ctx.font = "bold 72px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("BE", s / 2, s / 2);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(PUBLIC_DIR, "apple-touch-icon.png"), buffer);
  console.log("Apple touch icon generated: public/apple-touch-icon.png");
}

try {
  generateOG();
  generateAppleTouchIcon();
  console.log("All images generated successfully.");
} catch (err) {
  console.error("Error generating images:", err.message);
  console.log(
    "Note: This script requires the 'canvas' package. Install with: npm install canvas"
  );
}
