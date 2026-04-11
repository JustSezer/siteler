export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bolu Et Lokantası Rehberi",
    url: "https://boluetlokantasi.com",
    description:
      "Bolu'nun en iyi et lokantaları, kebapçıları ve mangal restoranları rehberi. Aşçılar diyarının yöresel et lezzetlerini keşfedin.",
    publisher: {
      "@type": "Organization",
      name: "Bolu Et Lokantası Rehberi",
      url: "https://boluetlokantasi.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@boluetlokantasi.com",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bolu",
        addressCountry: "TR",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
