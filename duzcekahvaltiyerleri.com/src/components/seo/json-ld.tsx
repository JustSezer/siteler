export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Düzce Kahvaltı Rehberi",
    url: "https://duzcekahvaltiyerleri.com",
    description:
      "Düzce'nin en iyi kahvaltı mekanları, serpme ve köy kahvaltısı adresleri rehberi.",
    publisher: {
      "@type": "Organization",
      name: "Düzce Kahvaltı Rehberi",
      url: "https://duzcekahvaltiyerleri.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "merhaba@duzcekahvaltiyerleri.com",
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
