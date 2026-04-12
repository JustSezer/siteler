export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Düzce Yemek Rehberi",
    url: "https://duzcedeyemek.com",
    description:
      "Düzce'nin yöresel lezzetleri, en iyi restoranları, gezi rotaları ve gastronomi rehberi.",
    publisher: {
      "@type": "Organization",
      name: "Düzce Yemek Rehberi",
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
        addressLocality: "Düzce",
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
