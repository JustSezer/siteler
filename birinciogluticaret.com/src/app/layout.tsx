import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.tagline} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "1946'dan bu yana Trabzon'da kömür, pelet, yakacak, organik gübre, kedi ve köpek maması toptan ve perakende satış. Saat 16:00'a kadar verilen siparişler aynı gün kargoda.",
  keywords: [
    "Birincioğlu Ticaret",
    "Trabzon kömür",
    "pelet",
    "kedi maması",
    "köpek maması",
    "organik gübre",
    "mangal kömürü",
  ],
  openGraph: {
    title: `${site.tagline} | ${site.name}`,
    description:
      "Trabzon'dan Türkiye'nin her iline aynı gün kargo. Pet shop, yakacak, gübre.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <a href="#main-content" className="skip-link">Icerige atla</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <SocialRail />
        <AccessibilityWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
