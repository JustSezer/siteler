import type { Metadata } from "next";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import { Playfair_Display, Lora, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.fullName,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mangal rehberi",
    "et rehberi",
    "nasıl mangal yakılır",
    "en iyi mangal eti",
    "ızgara pişirme",
    "kömür mü odun mu",
    "et dinlendirme",
    "marinasyon",
    "kuzu pirzola pişirme",
    "dana antrikot",
    "mangal sıcaklığı",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: site.fullName,
    description: site.description,
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    url: site.url,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: site.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  metadataBase: new URL(site.url),
  alternates: { canonical: site.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
