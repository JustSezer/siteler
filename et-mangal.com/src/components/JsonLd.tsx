import type { Post } from "@/lib/db";

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Et & Mangal",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://et-mangal.com",
    description:
      "Et çeşitleri, mangal tarifleri, ızgara teknikleri ve et kültürü hakkında kapsamlı rehber.",
    inLanguage: "tr",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL || "https://et-mangal.com"}/blog/ara?q={search_term_string}`,
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
    url: `https://et-mangal.com/blog/${post.slug}`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    image: post.cover_image || undefined,
    author: {
      "@type": "Organization",
      name: "Et & Mangal",
      url: "https://et-mangal.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Et & Mangal",
      url: "https://et-mangal.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://et-mangal.com/blog/${post.slug}`,
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
    name: "Et & Mangal Blog",
    url: "https://et-mangal.com/blog",
    description: "Et tarifleri, mangal teknikleri ve ızgara ipuçları hakkında yazılar.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://et-mangal.com/blog/${post.slug}`,
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
