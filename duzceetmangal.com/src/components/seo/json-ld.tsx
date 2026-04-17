import { site } from "@/lib/site";
import { partner } from "@/lib/partner";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.name,
        alternateName: site.fullName,
        url: site.url,
        description: site.description,
        inLanguage: "tr",
        potentialAction: {
          "@type": "SearchAction",
          target: `${site.url}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: partner.name,
        description: partner.tagline,
        url: partner.url,
        telephone: partner.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bakacak Mevkii",
          addressLocality: "Kaynaşlı",
          addressRegion: "Düzce",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7412,
          longitude: 30.3898,
        },
        servesCuisine: ["Türk Mutfağı", "Et Mangal", "Izgara"],
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      }}
    />
  );
}

export function FAQJsonLd({
  questions,
}: {
  questions: { q: string; a: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${site.url}/blog/${slug}`,
        datePublished,
        author: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        inLanguage: "tr",
      }}
    />
  );
}
