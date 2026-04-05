import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebSiteSchema, LocalBusinessSchema } from "@/components/JsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1c1917",
};

export const metadata: Metadata = {
  title: "Düzce Et Mangal | Mangal Kültürü, Et Tarifleri ve Izgara Rehberi",
  description:
    "Düzce'nin en lezzetli et mangal deneyimi. Meşe kömürü ateşinde pişen geleneksel lezzetler, mangal tarifleri, et rehberi ve ızgara teknikleri. Düzce et mangal kültürünün en kapsamlı rehberi.",
  keywords: [
    "düzce et mangal",
    "düzce mangal",
    "et tarifleri",
    "mangal tarifleri",
    "ızgara teknikleri",
    "kuzu pirzola",
    "adana kebap",
    "düzce restoran",
    "meşe közü mangal",
    "et mangal düzce",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://duzceetmangal.com",
    siteName: "Düzce Et Mangal",
    title: "Düzce Et Mangal | Mangal Kültürü, Et Tarifleri ve Izgara Rehberi",
    description:
      "Düzce'nin en lezzetli et mangal deneyimi. Meşe kömürü ateşinde pişen geleneksel lezzetler, mangal tarifleri ve ızgara teknikleri.",
    images: [
      {
        url: "https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Düzce Et Mangal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://duzceetmangal.com",
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
        <link rel="alternate" type="application/rss+xml" title="Düzce Et Mangal Blog" href="/feed.xml" />
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
