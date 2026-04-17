import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Duzce'de Yemek | Yoresel Lezzetler, Tarifler ve Restoran Rehberi",
    template: "%s | Duzce'de Yemek",
  },
  description:
    "Duzce'nin yoresel lezzetleri, geleneksel tarifleri ve en iyi restoranlari. Mamursa'dan isli baliga, Akcakoca sahilinden Karduz yaylasina Duzce lezzet rehberi.",
  keywords: [
    "duzce yemekleri",
    "duzce yoresel yemekler",
    "duzce restoranlari",
    "duzce kahvalti",
    "duzce nerede yenir",
    "duzce lezzetleri",
    "duzce mutfagi",
    "akcakoca yemekleri",
    "duzce restoran onerileri",
    "mamursa tarifi",
    "duzce meshur yemekleri",
    "duzce yemek rehberi",
  ],
  openGraph: {
    title: "Duzce'de Yemek — Her Tabakta Bir Hikaye",
    description:
      "Duzce'nin yoresel lezzetleri, geleneksel tarifleri ve en iyi restoranlari.",
    type: "website",
    locale: "tr_TR",
    siteName: "Duzce'de Yemek",
    url: "https://duzcedeyemek.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Duzce'de Yemek — Yoresel Lezzetler Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duzce'de Yemek — Her Tabakta Bir Hikaye",
    description:
      "Duzce'nin yoresel lezzetleri, geleneksel tarifleri ve en iyi restoranlari.",
    images: [
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80",
    ],
  },
  metadataBase: new URL("https://duzcedeyemek.com"),
  alternates: { canonical: "https://duzcedeyemek.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${nunito.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">İçeriğe atla</a>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
