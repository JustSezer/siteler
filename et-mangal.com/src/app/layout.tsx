import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://et-mangal.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Et & Mangal | Et Tarifleri, Mangal Kültürü ve Izgara Rehberi",
    template: "%s | Et & Mangal",
  },
  description:
    "Et çeşitleri, mangal tarifleri, ızgara teknikleri ve et kültürü hakkında kapsamlı rehber. En lezzetli et yemekleri ve mangal ipuçları.",
  keywords: [
    "et tarifleri",
    "mangal tarifleri",
    "ızgara teknikleri",
    "et çeşitleri",
    "mangal nasıl yapılır",
    "et pişirme",
    "kebap tarifleri",
    "mangal et",
    "dana eti",
    "kuzu eti",
    "steakhouse",
    "et yemekleri",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Et & Mangal",
    title: "Et & Mangal | Et Tarifleri, Mangal Kültürü ve Izgara Rehberi",
    description:
      "Et çeşitleri, mangal tarifleri, ızgara teknikleri ve et kültürü hakkında kapsamlı rehber.",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Et & Mangal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Et & Mangal | Et Tarifleri ve Mangal Rehberi",
    description:
      "Et çeşitleri, mangal tarifleri, ızgara teknikleri ve et kültürü hakkında kapsamlı rehber.",
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
    <html lang="tr" className={dmSans.variable}>
      <head>
        <WebsiteJsonLd />
        <link rel="alternate" type="application/rss+xml" title="Et & Mangal Blog" href="/feed.xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
