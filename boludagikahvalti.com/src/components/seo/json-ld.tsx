export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bolu Dağı Kahvaltı",
    url: "https://boludagikahvalti.com",
    description:
      "Bolu Dağı'nın yöresel kahvaltı sofraları, sabah ritüelleri, önerilen mekanlar ve evde hazırlanabilecek menüler.",
    publisher: {
      "@type": "Organization",
      name: "Bolu Dağı Kahvaltı",
      url: "https://boludagikahvalti.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
