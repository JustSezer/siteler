import type { Post } from "@/lib/db";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wix Destek",
    url: SITE_URL,
    description:
      "Profesyonel Wix yardım ve danışmanlık hizmetleri. Wix site kurma, tasarım, SEO ve teknik destek.",
    inLanguage: "tr",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog/ara?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wix Destek",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      "Türkiye'deki bireysel kullanıcılar ve küçük işletmeler için Türkçe Wix yardım ve danışmanlık hizmetleri. Wix site kurma, tasarım, SEO ve teknik destek.",
    inLanguage: "tr",
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    serviceType: "Web Tasarım ve Geliştirme Danışmanlığı",
    email: "info@wix-destek.com",
    knowsAbout: [
      "Wix",
      "Web Tasarım",
      "SEO Optimizasyonu",
      "E-ticaret",
      "Web Geliştirme",
      "Domain Yönetimi",
      "Wix Sorun Çözme",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wix Destek Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wix Site Kurma",
            description: "Sıfırdan profesyonel Wix sitesi oluşturma desteği",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wix SEO Optimizasyonu",
            description: "Google sıralamalarını artırmak için Wix SEO ayarları",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wix E-Ticaret Kurulumu",
            description: "Wix üzerinde online mağaza ve ödeme sistemi entegrasyonu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wix Teknik Sorun Çözme",
            description: "Wix eklenti hataları, yavaşlama ve görünüm sorunlarının giderilmesi",
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostJsonLd({ post }: { post: Post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    image: post.cover_image || undefined,
    author: {
      "@type": "Organization",
      name: "Wix Destek",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Wix Destek",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags?.split(",").map((t) => t.trim()) || [],
    wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
    timeRequired: `PT${post.reading_time}M`,
    inLanguage: "tr",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
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
      // Son eleman için item URL opsiyoneldir (Google dokümantasyonu)
      ...(index < items.length - 1 ? { item: item.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogListJsonLd({ posts }: { posts: Post[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wix Destek Blog",
    url: `${SITE_URL}/blog`,
    description: "Wix kullanım rehberleri, ipuçları ve destek yazıları.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
