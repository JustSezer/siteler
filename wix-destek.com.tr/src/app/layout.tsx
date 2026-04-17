import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import SkipToContent from "@/components/a11y/skip-to-content";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/whatsapp/whatsapp-float";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import A11yWidget from "@/components/a11y/a11y-widget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Wix Destek — Türkçe Wix Uzmanından Profesyonel Yardım",
    template: "%s | Wix Destek TR",
  },
  description: SITE.description,
  keywords: [
    "wix destek",
    "wix türkçe destek",
    "wix yardım",
    "wix uzmanı",
    "wix danışmanlık",
    "wix site kurulumu",
    "wix tasarım",
    "wix seo",
    "wix domain bağlama",
    "wix e-ticaret",
    "wix hata giderme",
    "wix eğitim",
    "wix türkiye",
  ],
  openGraph: {
    title: "Wix Destek — Türkçe Wix Uzmanından Profesyonel Yardım",
    description: SITE.description,
    type: "website",
    locale: "tr_TR",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Destek — Türkçe Wix Uzmanından Profesyonel Yardım",
    description: SITE.description,
  },
  metadataBase: new URL(SITE.url),
  alternates: { canonical: SITE.url },
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
  authors: [{ name: SITE.author }],
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <A11yWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
