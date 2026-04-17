import type { Metadata } from "next";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";
import { OrganizationJsonLd, FranchiseBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { Manrope, JetBrains_Mono, Space_Grotesk, IBM_Plex_Mono, Instrument_Serif, Inter_Tight, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-v2",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-v2",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif-v3",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-v3",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display-v4",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bakacak Köfte Bayilik · Karavan Franchise Sistemi",
    template: `%s · ${site.name}`,
  },
  description:
    "Bakacak Köfte karavan bayilik sistemi. Anahtar teslim ekipman, eğitim, reçete ve marka desteğiyle Türkiye geneli franchise fırsatı. Başvuru açık.",
  keywords: [
    "köfte bayilik", "karavan bayilik", "köfte franchise", "mobil köfte bayilik",
    "food truck franchise", "karavan yatırım", "düşük yatırım franchise",
    "Türkiye franchise", "bayilik fırsatı", "anahtar teslim iş",
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
    title: "Bakacak Köfte Bayilik · Karavan Franchise Sistemi",
    description:
      "Anahtar teslim karavan bayilik modeli. Ekipman + eğitim + marka + reçete tek pakette. Türkiye geneli başvuru açık.",
    images: [{ url: "/images/bakacak-kofte.jpg", width: 1200, height: 630, alt: "Bakacak Köfte Bayilik" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakacak Köfte Bayilik",
    description:
      "Anahtar teslim karavan bayilik modeli. Türkiye geneli başvuru açık.",
    images: ["/images/bakacak-kofte.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${jetbrains.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${instrumentSerif.variable} ${interTight.variable} ${bricolage.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">İçeriğe atla</a>
        {children}
        <CookieBanner />
        <AccessibilityWidget />
        <OrganizationJsonLd />
        <FranchiseBusinessJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
