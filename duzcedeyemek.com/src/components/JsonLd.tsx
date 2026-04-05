import type { Post } from "@/lib/db";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com";

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Düzce'de Yemek",
    url: SITE_URL,
    description:
      "Düzce'nin en lezzetli yemekleri, geleneksel tarifleri, restoran ve kafe rehberi.",
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

export function BlogPostJsonLd({ post }: { post: Post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    image: post.cover_image || undefined,
    author: {
      "@type": "Organization",
      name: "Düzce'de Yemek",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Düzce'de Yemek",
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
      item: item.url,
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
    name: "Düzce'de Yemek Blog",
    url: `${SITE_URL}/blog`,
    description: "Düzce yemek kültürü, geleneksel tarifler ve mekan rehberi.",
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
