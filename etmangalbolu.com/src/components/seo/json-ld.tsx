export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bolu Mangal Rehberi",
    url: "https://etmangalbolu.com",
    description:
      "Bolu'da et, mangal ve köz üzerine bağımsız gastronomi rehberi.",
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: "Bolu Mangal Rehberi",
      url: "https://etmangalbolu.com",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleListJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bolu Mangal Noktaları",
    description: "Editörün seçtiği Bolu mangal mekanları rehberi",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "İbrahimin Yeri",
        url: "https://ibrahiminyeri.com",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
