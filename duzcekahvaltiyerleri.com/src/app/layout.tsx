import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebSiteSchema, LocalBusinessSchema } from "@/components/JsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#b45309",
};

export const metadata: Metadata = {
  title: "Düzce Kahvaltı Yerleri | En İyi Sabah Mekanları ve Kahvaltı Rehberi",
  description:
    "Düzce'nin en güzel kahvaltı yerlerini keşfedin. Yöresel ürünler, organik bal, taze kaymak ve ev yapımı reçellerle hazırlanan nefis sabah sofralarının adresi. Düzce kahvaltı rehberi.",
  keywords: [
    "düzce kahvaltı yerleri",
    "düzce kahvaltı",
    "kahvaltı mekanları",
    "türk kahvaltısı",
    "yöresel kahvaltı",
    "organik bal",
    "düzce restoran",
    "sabah kahvaltısı",
    "düzce yöresel ürünler",
    "kahvaltı tarifleri",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://duzcekahvaltiyerleri.com",
    siteName: "Düzce Kahvaltı Yerleri",
    title: "Düzce Kahvaltı Yerleri | En İyi Sabah Mekanları ve Kahvaltı Rehberi",
    description:
      "Düzce'nin en güzel kahvaltı yerleri, yöresel ürünler ve sabah sofrası rehberi.",
    images: [
      {
        url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Düzce Kahvaltı Yerleri",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://duzcekahvaltiyerleri.com",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ibrahiminyeri.com" />
        <link rel="alternate" type="application/rss+xml" title="Düzce Kahvaltı Yerleri Blog" href="/feed.xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <WebSiteSchema />
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
