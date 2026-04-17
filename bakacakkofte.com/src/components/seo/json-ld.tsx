import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: "Bakacak Köfte Franchise",
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    description: site.description,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phones[0].value,
    sameAs: [site.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FranchiseBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${site.url}/#franchise`,
    name: site.fullName,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/bakacak-kofte.jpg`,
    servesCuisine: ["Türk Mutfağı", "Köfte", "Izgara"],
    priceRange: "$$",
    email: site.email,
    telephone: site.phones[0].value,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "TR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: site.url,
    name: site.fullName,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
