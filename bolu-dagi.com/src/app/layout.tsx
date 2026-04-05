import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebSiteSchema, LocalBusinessSchema } from "@/components/JsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#14532d",
};

export const metadata: Metadata = {
  title: "Bolu Dağı | Doğa, Kültür ve Keşif Rehberi",
  description:
    "Bolu Dağı'nın eşsiz doğası, yürüyüş rotaları, gastronomi kültürü ve mevsimsel güzellikleri hakkında kapsamlı rehber. Türkiye'nin en etkileyici dağ geçidini keşfedin.",
  keywords: [
    "bolu dağı",
    "bolu dağı yürüyüş",
    "bolu dağı doğa",
    "bolu dağı restoran",
    "bolu dağı gezi",
    "bolu dağı fotoğraf",
    "abant gölü",
    "yedigöller",
    "bolu dağı tüneli",
    "d100 bolu",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://bolu-dagi.com",
    siteName: "Bolu Dağı",
    title: "Bolu Dağı | Doğa, Kültür ve Keşif Rehberi",
    description: "Bolu Dağı'nın eşsiz doğası, yürüyüş rotaları ve gastronomi kültürü hakkında kapsamlı rehber.",
    images: [
      {
        url: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Bolu Dağı",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bolu-dagi.com",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ibrahiminyeri.com" />
        <link rel="alternate" type="application/rss+xml" title="Bolu Dağı Blog" href="/feed.xml" />
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
