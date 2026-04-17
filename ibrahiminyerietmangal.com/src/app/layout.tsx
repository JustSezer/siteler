import type { Metadata } from "next";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.fullName,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "İbrahim'in Yeri",
    "Bolu Dağı Et Mangal",
    "Bolu Dağı kahvaltı",
    "Kaynaşlı restoran",
    "Düzce et mangal",
    "Bakacak Köfte",
    "Bakacak Pirzola",
    "7/24 kahvaltı",
    "D100 mola",
    "Bolu Dağı lokantası",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
    images: [
      {
        url: "/images/bakacak-kofte.jpg",
        width: 1200,
        height: 630,
        alt: "Bakacak Köftesi — İbrahim'in Yeri imza lezzeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
    images: ["/images/bakacak-kofte.jpg"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">Icerige atla</a>
        {children}
        <CookieBanner />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
