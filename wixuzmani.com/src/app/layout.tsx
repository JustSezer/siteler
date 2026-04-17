import type { Metadata } from "next";
import { Inter, Manrope, Caveat } from "next/font/google";
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
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Wix Uzmanı — Ölçülebilir Sonuç Veren Wix Ajansı",
    template: "%s | Wix Uzmanı",
  },
  description: SITE.description,
  keywords: [
    "wix ajansı",
    "wix danışmanlık",
    "wix kurumsal site",
    "wix premium tasarım",
    "wix e-ticaret ajansı",
    "wix seo ajansı",
    "wix core web vitals",
    "wix migration",
    "wix cro",
    "wix bakım paketi",
  ],
  openGraph: {
    title: "Wix Uzmanı — Ölçülebilir Sonuç Veren Wix Ajansı",
    description: SITE.description,
    type: "website",
    locale: "tr_TR",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Uzmanı — Ölçülebilir Sonuç Veren Wix Ajansı",
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
    <html lang="tr" className={`${inter.variable} ${manrope.variable} ${caveat.variable} h-full antialiased`}>
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
