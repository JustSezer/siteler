import type { Metadata } from "next";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import { Fraunces, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Bolu Mangal Rehberi | Et, Köz ve Ateşin Şehri",
  description:
    "Bolu'da et, mangal ve köz üzerine bağımsız gastronomi rehberi. En iyi mangal noktaları, et seçimi, pişirme teknikleri ve usta tavsiyeleri.",
  keywords: [
    "bolu mangal",
    "bolu et",
    "bolu et lokantası",
    "bolu izgara",
    "bolu kuzu pirzola",
    "bolu mangal nerede yenir",
    "bolu en iyi mangal",
    "mangal rehberi",
  ],
  authors: [{ name: "Bolu Mangal Rehberi" }],
  openGraph: {
    title: "Bolu Mangal Rehberi | Et, Köz ve Ateşin Şehri",
    description:
      "Bolu'da et, mangal ve köz üzerine bağımsız gastronomi rehberi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Bolu Mangal Rehberi",
    url: "https://etmangalbolu.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bolu Mangal Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Mangal Rehberi",
    description:
      "Bolu'da et, mangal ve köz üzerine bağımsız gastronomi rehberi.",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  metadataBase: new URL("https://etmangalbolu.com"),
  alternates: { canonical: "https://etmangalbolu.com" },
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
      className={`${fraunces.variable} ${sourceSerif.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
