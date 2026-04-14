import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Düzce Kahvaltı Yerleri | En İyi Serpme & Köy Kahvaltısı Mekanları",
  description:
    "Düzce'nin en iyi kahvaltı mekanları, serpme kahvaltı yerleri ve köy kahvaltısı adresleri. Editör seçimi, yöresel lezzetler ve gerçek adreslerle kapsamlı rehber.",
  keywords: [
    "düzce kahvaltı",
    "düzce kahvaltı yerleri",
    "düzce serpme kahvaltı",
    "düzce köy kahvaltısı",
    "düzce en iyi kahvaltı",
    "düzce kahvaltı mekanları",
    "bolu dağı kahvaltı",
    "düzce yayla kahvaltısı",
  ],
  openGraph: {
    title: "Düzce Kahvaltı Yerleri | En İyi Mekanlar Rehberi",
    description:
      "Düzce'nin en iyi serpme, köy ve yayla kahvaltı mekanlarını keşfedin.",
    type: "website",
    locale: "tr_TR",
    siteName: "Düzce Kahvaltı",
    url: "https://duzcekahvaltiyerleri.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Düzce Kahvaltı Yerleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düzce Kahvaltı Yerleri | En İyi Mekanlar Rehberi",
    description:
      "Düzce'nin en iyi serpme, köy ve yayla kahvaltı mekanlarını keşfedin.",
    images: [
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80",
    ],
  },
  metadataBase: new URL("https://duzcekahvaltiyerleri.com"),
  alternates: { canonical: "https://duzcekahvaltiyerleri.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
