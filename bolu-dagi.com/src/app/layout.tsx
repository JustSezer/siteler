import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import CookieBanner from "@/components/cookie-consent/cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bolu Dagi Rehberi | Doğal Guzellikler, Aktiviteler ve Gezi Plani",
  description:
    "Bolu Dagi gezginler için kapsamli rehber. Abant Gölü, Yedigoller, kış sporlari, doğal guzellikler, konaklama ve ulaşım bilgileri.",
  keywords: [
    "bolu dagi",
    "bolu gezilecek yerler",
    "abant gölü",
    "yedigoller",
    "kartalkaya",
    "bolu turizm",
    "bolu rehberi",
  ],
  openGraph: {
    title: "Bolu Dagi Rehberi | Doğal Guzellikler, Aktiviteler ve Gezi Plani",
    description:
      "Bolu Dagi gezginler için kapsamli rehber. Doğal guzellikler, aktiviteler ve gezi plani.",
    type: "website",
    locale: "tr_TR",
    siteName: "Bolu Dagi Rehberi",
    url: "https://bolu-dagi.com",
    images: [
      {
        url: "https://bolu-dagi.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Bolu Dagi Rehberi - Doğal Guzellikler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Dagi Rehberi",
    description:
      "Bolu Dagi gezginler için kapsamli rehber. Doğal guzellikler, aktiviteler ve gezi plani.",
    images: ["https://bolu-dagi.com/og-default.jpg"],
  },
  metadataBase: new URL("https://bolu-dagi.com"),
  alternates: {
    canonical: "https://bolu-dagi.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
