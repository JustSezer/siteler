import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import SkipToContent from "@/components/a11y/skip-to-content";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bolu Dağı Kahvaltı | Yöresel Sabah Sofraları Rehberi",
  description:
    "Bolu Dağı'nda kuymak, serpme kahvaltı, tereyağlı göz, kestane balı ve daha fazlası. Yöresel sabah sofralarının kokusu, tarifi ve nerede yenir rehberi.",
  keywords: [
    "bolu dağı kahvaltı",
    "bolu kahvaltı mekanları",
    "bolu kahvaltı yerleri",
    "bolu dağı serpme kahvaltı",
    "bolu dağı köy kahvaltısı",
    "kuymak tarifi",
    "bolu kestane balı",
    "abant kahvaltı",
    "istanbul ankara yolu kahvaltı mola",
    "bolu dağı kahvaltı fiyatları",
    "bolu dağında kahvaltı nerede yapılır",
    "köy tereyağı",
    "bolu sabah kahvaltısı",
  ],
  openGraph: {
    title: "Bolu Dağı Kahvaltı | Yöresel Sabah Sofraları",
    description:
      "Bolu Dağı'nın en sıcak kahvaltı sofraları, yöresel tarifleri ve önerilen mekanları.",
    type: "website",
    locale: "tr_TR",
    siteName: "Bolu Dağı Kahvaltı",
    url: "https://boludagikahvalti.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Dağı Kahvaltı | Yöresel Sabah Sofraları",
    description:
      "Bolu Dağı'nın en sıcak kahvaltı sofraları, yöresel tarifleri ve önerilen mekanları.",
  },
  metadataBase: new URL("https://boludagikahvalti.com"),
  alternates: { canonical: "https://boludagikahvalti.com" },
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
      className={`${inter.variable} ${crimson.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
