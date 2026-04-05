import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6b1c1c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://etmangalbolu.com"),
  title: {
    default: "Et Mangal Bolu - Bolu'nun En İyi Et ve Mangal Rehberi",
    template: "%s | Et Mangal Bolu",
  },
  description:
    "Bolu'da et mangal kültürü, en iyi restoranlar, tarifler ve mangal ipuçları. Bolu'nun eşsiz et mangal deneyimini keşfedin.",
  keywords: [
    "et mangal bolu",
    "bolu mangal",
    "bolu et restoran",
    "mangal tarifleri",
    "bolu yemek",
    "et pişirme",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://etmangalbolu.com",
    siteName: "Et Mangal Bolu",
    title: "Et Mangal Bolu - Bolu'nun En İyi Et ve Mangal Rehberi",
    description:
      "Bolu'da et mangal kültürü, en iyi restoranlar, tarifler ve mangal ipuçları.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Et Mangal Bolu - Bolu'nun En İyi Et ve Mangal Rehberi",
    description:
      "Bolu'da et mangal kültürü, en iyi restoranlar, tarifler ve mangal ipuçları.",
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
    canonical: "https://etmangalbolu.com",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${lora.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://ibrahiminyeri.com" />
        <link rel="preconnect" href="https://ibrahiminyeri.com" />
        <link rel="alternate" type="application/rss+xml" title="Et Mangal Bolu RSS" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Et Mangal Bolu",
              url: "https://etmangalbolu.com",
              description: "Bolu'da et mangal kültürü ve rehberi",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://etmangalbolu.com/arama?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "İbrahim İnyeri",
                url: "https://ibrahiminyeri.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-cream text-dark">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
