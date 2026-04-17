import type { Metadata } from "next";
import { Lora, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Düzce Et Mangal | Meşe Közünde, Yolun Kenarında",
  description:
    "Düzce'nin bağımsız et ve mangal rehberi. Bakacak'tan Kaynaşlı'ya, meşe közünde pişen etin peşinde — en iyi mangal noktaları, et seçimi ve usta tavsiyeleri.",
  keywords: [
    "düzce et mangal",
    "düzce mangal",
    "bakacak mangal",
    "bakacak köfte",
    "düzce et lokantası",
    "düzce mangal nerede yenir",
    "d100 mangal",
    "kaynaşlı mangal",
    "düzce meşe közü mangal",
  ],
  authors: [{ name: "Düzce Et Mangal" }],
  openGraph: {
    title: "Düzce Et Mangal | Meşe Közünde, Yolun Kenarında",
    description:
      "Düzce'nin bağımsız et ve mangal rehberi. Bakacak'tan Kaynaşlı'ya, meşe közünde pişen etin peşinde.",
    type: "website",
    locale: "tr_TR",
    siteName: "Düzce Et Mangal",
    url: "https://duzceetmangal.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Düzce Et Mangal — Meşe közünde et",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düzce Et Mangal",
    description:
      "Düzce'nin bağımsız et ve mangal rehberi. Meşe közünde, yolun kenarında.",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  metadataBase: new URL("https://duzceetmangal.com"),
  alternates: { canonical: "https://duzceetmangal.com" },
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${lora.variable} ${newsreader.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-smoke text-charcoal">
        {children}
      </body>
    </html>
  );
}
