export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Duzce'de Yemek",
    alternateName: "duzcedeyemek.com",
    url: "https://duzcedeyemek.com",
    description:
      "Duzce'nin yoresel lezzetleri, geleneksel tarifleri ve en iyi restoranlari. Her tabakta bir hikaye.",
    inLanguage: "tr",
    publisher: {
      "@type": "Organization",
      name: "Duzce'de Yemek",
      url: "https://duzcedeyemek.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@duzcedeyemek.com",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Duzce",
        addressRegion: "Duzce",
        addressCountry: "TR",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://duzcedeyemek.com/blog?q={search_term_string}",
      },
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

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
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
