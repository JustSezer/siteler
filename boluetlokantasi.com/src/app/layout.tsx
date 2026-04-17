import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bolu Et Lokantası Rehberi | En İyi Et Restoranları ve Kebapçılar",
  description:
    "Bolu'nun en iyi et lokantaları, kebapçıları ve mangal restoranları. Aşçılar diyarının yöresel et lezzetlerini keşfedin. Lokanta önerileri ve detaylı rehber.",
  keywords: [
    "bolu et lokantası",
    "bolu kebapçı",
    "bolu et restoranı",
    "bolu mangal",
    "bolu yemek",
    "bolu lokanta",
    "bolu dağı et",
  ],
  openGraph: {
    title: "Bolu Et Lokantası Rehberi | En İyi Et Restoranları",
    description:
      "Bolu'nun en iyi et lokantaları, kebapçıları ve mangal restoranları rehberi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Bolu Et Lokantası Rehberi",
    url: "https://boluetlokantasi.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bolu Et Lokantası Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Et Lokantası Rehberi",
    description:
      "Bolu'nun en iyi et lokantaları, kebapçıları ve mangal restoranları rehberi.",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    ],
  },
  metadataBase: new URL("https://boluetlokantasi.com"),
  alternates: {
    canonical: "https://boluetlokantasi.com",
  },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">İçeriğe atla</a>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
