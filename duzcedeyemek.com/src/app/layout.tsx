import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#c2571a",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Düzce'de Yemek | Düzce Mutfağı, Lezzetleri ve Mekan Rehberi",
    template: "%s | Düzce'de Yemek",
  },
  description:
    "Düzce'nin en lezzetli yemekleri, geleneksel tarifleri, restoran ve kafe rehberi. Düzce mutfak kültürünü keşfedin.",
  keywords: [
    "düzce yemek",
    "düzce restoran",
    "düzce mutfağı",
    "düzce lezzetleri",
    "düzce kahvaltı",
    "düzce kafe",
    "düzce mekan",
    "düzce yemek rehberi",
    "düzce geleneksel yemekler",
    "düzce et lokantası",
    "düzce balık",
    "düzce fındık",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Düzce'de Yemek",
    title: "Düzce'de Yemek | Düzce Mutfağı ve Mekan Rehberi",
    description:
      "Düzce'nin en lezzetli yemekleri, geleneksel tarifleri ve restoran rehberi.",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Düzce'de Yemek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düzce'de Yemek | Düzce Mutfağı ve Mekan Rehberi",
    description:
      "Düzce'nin en lezzetli yemekleri, geleneksel tarifleri ve restoran rehberi.",
    images: [`${SITE_URL}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <head>
        <WebsiteJsonLd />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Düzce'de Yemek Blog"
          href="/feed.xml"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
