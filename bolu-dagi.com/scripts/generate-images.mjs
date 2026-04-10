import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

// OG Default Image (1200x630)
async function generateOgImage() {
  const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a3009;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#2d5016;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a3009;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="mountain" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style="stop-color:#4a7c2e;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#2d5016;stop-opacity:0.2" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <!-- Mountains silhouette -->
    <polygon points="0,630 150,350 300,420 450,280 600,380 750,250 900,350 1050,300 1200,400 1200,630" fill="url(#mountain)" opacity="0.5"/>
    <polygon points="0,630 200,400 400,480 550,350 700,430 850,320 1000,400 1200,450 1200,630" fill="url(#mountain)" opacity="0.3"/>
    <!-- Mountain icon -->
    <g transform="translate(540, 160)">
      <polygon points="60,0 120,100 0,100" fill="none" stroke="#c49b2a" stroke-width="3"/>
      <polygon points="90,30 130,100 50,100" fill="none" stroke="#c49b2a" stroke-width="2" opacity="0.6"/>
    </g>
    <!-- Title -->
    <text x="600" y="320" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">Bolu Dagi</text>
    <text x="600" y="380" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle" opacity="0.8">Rehberi</text>
    <!-- Subtitle -->
    <text x="600" y="440" font-family="Arial, sans-serif" font-size="20" fill="#c49b2a" text-anchor="middle" letter-spacing="4">KESFET / YASA / HATIRLA</text>
    <!-- URL -->
    <text x="600" y="560" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.5">bolu-dagi.com</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, "og-default.jpg"));
  console.log("og-default.jpg created (1200x630)");
}

// Apple Touch Icon (180x180)
async function generateAppleTouchIcon() {
  const svg = `
  <svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2d5016" />
        <stop offset="100%" style="stop-color:#1a3009" />
      </linearGradient>
    </defs>
    <rect width="180" height="180" rx="40" fill="url(#bg)"/>
    <!-- Mountain -->
    <g transform="translate(50, 40)">
      <polygon points="40,0 80,70 0,70" fill="none" stroke="#c49b2a" stroke-width="3"/>
      <polygon points="55,20 85,70 25,70" fill="none" stroke="#c49b2a" stroke-width="2" opacity="0.6"/>
    </g>
    <!-- Text -->
    <text x="90" y="140" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">BD</text>
    <text x="90" y="162" font-family="Arial, sans-serif" font-size="11" fill="white" text-anchor="middle" opacity="0.7">Rehberi</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("apple-touch-icon.png created (180x180)");
}

// Favicon (32x32)
async function generateFavicon() {
  const svg = `
  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#2d5016"/>
    <g transform="translate(6, 4)">
      <polygon points="10,0 20,16 0,16" fill="none" stroke="#c49b2a" stroke-width="1.5"/>
    </g>
    <text x="16" y="28" font-family="Arial" font-size="8" font-weight="bold" fill="white" text-anchor="middle">BD</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(publicDir, "favicon.png"));
  console.log("favicon.png created (32x32)");
}

await generateOgImage();
await generateAppleTouchIcon();
await generateFavicon();
console.log("All images generated!");
