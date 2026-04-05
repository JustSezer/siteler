import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://boluetlokantasi.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f0f0f",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bolu Et Lokantası | Bolu Yemekleri, Et Kültürü ve Lokanta Rehberi",
    template: "%s | Bolu Et Lokantası",
  },
  description:
    "Bolu'nun eşsiz et lezzetleri, lokanta kültürü ve geleneksel Türk mutfağı hakkında kapsamlı rehber. Bolu'nun en iyi et lokantaları ve yemek tavsiyeleri.",
  keywords: [
    "bolu et lokantası",
    "bolu lokantaları",
    "bolu yemekleri",
    "et lokantası bolu",
    "bolu restaurant",
    "geleneksel Türk mutfağı",
    "bolu mutfağı",
    "bolu et yemekleri",
    "bolu ızgara",
    "bolu kebap",
    "bolu yemek kültürü",
    "bolu gastronomi",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Bolu Et Lokantası",
    title: "Bolu Et Lokantası | Bolu Yemekleri, Et Kültürü ve Lokanta Rehberi",
    description:
      "Bolu'nun eşsiz et lezzetleri, lokanta kültürü ve geleneksel Türk mutfağı hakkında kapsamlı rehber.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Et Lokantası | Bolu Yemekleri ve Lokanta Rehberi",
    description:
      "Bolu'nun eşsiz et lezzetleri, lokanta kültürü ve geleneksel Türk mutfağı hakkında kapsamlı rehber.",
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
    <html lang="tr" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <WebsiteJsonLd />
        <link rel="alternate" type="application/rss+xml" title="Bolu Et Lokantası Blog" href="/feed.xml" />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
