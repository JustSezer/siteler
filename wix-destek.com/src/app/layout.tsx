import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebsiteJsonLd, OrganizationJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wix Destek | Türkiye'nin Wix Yardım ve Danışmanlık Merkezi",
    template: "%s | Wix Destek",
  },
  description:
    "Wix site kurma, tasarım, SEO ve teknik sorunlarınız için Türkçe profesyonel destek. Wix'te sorun yaşıyorsanız uzman ekibimiz 24 saat içinde yanıt verir.",
  keywords: [
    "wix destek",
    "wix yardım",
    "wix türkçe destek",
    "wix sorun çözme",
    "wix site kurma",
    "wix teknik destek",
    "wix danışmanlık",
    "wix e-ticaret",
    "wix seo optimizasyonu",
    "wix domain bağlama",
    "wix nasıl kullanılır",
    "wix şablon seçimi",
    "wix ücretsiz site",
    "wix mobil uyumluluk",
    "wix eklenti sorunu",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Wix Destek",
    title: "Wix Destek | Türkiye'nin Wix Yardım ve Danışmanlık Merkezi",
    description:
      "Wix site kurma, tasarım, SEO ve teknik sorunlarınız için Türkçe profesyonel destek. 24 saat içinde yanıt garantisi.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Wix Destek — Profesyonel Wix Yardım ve Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Destek | Türkiye'nin Wix Yardım ve Danışmanlık Merkezi",
    description:
      "Wix site kurma, tasarım, SEO ve teknik sorunlarınız için Türkçe profesyonel destek. 24 saat içinde yanıt garantisi.",
    images: [`${SITE_URL}/opengraph-image`],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
