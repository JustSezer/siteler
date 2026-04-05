import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Wix Türkçe Destek | Rehberler, İpuçları ve Kaynaklar',
    template: '%s | Wix Destek',
  },
  description: 'Wix platformu için kapsamlı Türkçe rehberler, ipuçları ve destek kaynakları. Web sitesi kurulumu, SEO, e-ticaret ve şablon konularında adım adım kılavuzlar.',
  keywords: ['wix destek', 'wix türkçe rehber', 'wix nasıl kullanılır', 'wix yardım', 'wix web sitesi kurma'],
  authors: [{ name: 'Wix Destek', url: 'https://wix-destek.com.tr' }],
  creator: 'Wix Destek',
  publisher: 'Wix Destek',
  metadataBase: new URL('https://wix-destek.com.tr'),
  alternates: {
    canonical: 'https://wix-destek.com.tr',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://wix-destek.com.tr',
    siteName: 'Wix Destek',
    title: 'Wix Türkçe Destek | Rehberler, İpuçları ve Kaynaklar',
    description: 'Wix platformu için kapsamlı Türkçe rehberler, ipuçları ve destek kaynakları. Web sitesi kurulumu, SEO ve e-ticaret konularında uzman desteği.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix Türkçe Destek | Rehberler, İpuçları ve Kaynaklar',
    description: 'Wix platformu için kapsamlı Türkçe rehberler, ipuçları ve destek kaynakları.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Wix Destek',
  url: 'https://wix-destek.com.tr',
  description: 'Wix platformu için kapsamlı Türkçe rehberler, ipuçları ve destek kaynakları.',
  inLanguage: 'tr-TR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wix-destek.com.tr/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wix Destek',
  url: 'https://wix-destek.com.tr',
  logo: {
    '@type': 'ImageObject',
    url: 'https://wix-destek.com.tr/logo.svg',
    width: 200,
    height: 60,
  },
  description: 'Türkiye\'nin önde gelen Wix destek ve rehber platformu.',
  foundingDate: '2024',
  areaServed: 'TR',
  knowsLanguage: 'tr',
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
