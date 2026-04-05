import type { Post } from "@/lib/db";
import { siteConfig } from "@/lib/config";

const SITE_URL = siteConfig.url;
const SITE_NAME = siteConfig.name;
const PHONE = `+9${siteConfig.phone}`;
const ADDRESS = {
  street: "D100 Karayolu",
  locality: "Kaynaşlı",
  region: "Düzce",
  postalCode: "81900",
  country: "TR",
};

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Düzce'nin en güzel kahvaltı yerleri, yöresel ürünler ve kahvaltı kültürü rehberi.",
    inLanguage: "tr",
    publisher: {
      "@type": "Organization",
      name: "İbrahim'in Yeri Et Mangal",
      url: "https://ibrahiminyeri.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "İbrahim'in Yeri Et Mangal - Düzce",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "https://ibrahiminyeri.com",
    telephone: PHONE,
    priceRange: "₺₺",
    servesCuisine: ["Türk Mutfağı", "Kahvaltı", "Et Mangal", "Yöresel Lezzetler"],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7667,
      longitude: 30.8167,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "07:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      "https://ibrahiminyeri.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ post }: { post: Post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    ...(post.tags && { keywords: post.tags }),
    ...(post.category_name && { articleSection: post.category_name }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
