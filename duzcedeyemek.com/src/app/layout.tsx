import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Düzce Yemek Rehberi | Gastronomi & Turizm",
  description:
    "Düzce'nin yöresel lezzetleri, en iyi restoranları, gezi rotaları ve gastronomi rehberi. Akçakoca'dan yaylalara, fındıktan balığa keşfedin.",
  keywords: [
    "düzce yemek",
    "düzce restoran",
    "akçakoca",
    "düzce gezi",
    "düzce turizm",
    "düzce kahvaltı",
    "düzce lezzet",
  ],
  openGraph: {
    title: "Düzce Yemek Rehberi | Gastronomi & Turizm",
    description:
      "Düzce'nin yöresel lezzetleri, gezi rotaları ve gastronomi rehberi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Düzce Yemek Rehberi",
    url: "https://duzcedeyemek.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Düzce Yemek Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düzce Yemek Rehberi | Gastronomi & Turizm",
    description:
      "Düzce'nin yöresel lezzetleri, gezi rotaları ve gastronomi rehberi.",
    images: [
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80",
    ],
  },
  metadataBase: new URL("https://duzcedeyemek.com"),
  alternates: { canonical: "https://duzcedeyemek.com" },
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
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
