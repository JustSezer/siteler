export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bolu Dagi Rehberi",
    url: "https://bolu-dagi.com",
    description:
      "Bolu Dagi ve çevresindeki doğal guzellikler, aktiviteler ve gezi plani hakkında kapsamli rehber.",
    publisher: {
      "@type": "Organization",
      name: "Bolu Dagi Rehberi",
      url: "https://bolu-dagi.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bolu-dagi.com/og-default.jpg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@bolu-dagi.com",
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
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bolu-dagi.com/?q={search_term_string}",
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

export function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Bolu Dagi nerede?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bolu Dagi, Türkiye'nin Bati Karadeniz Bölgesi'nde yer alir. Istanbul'a 262 km (3 saat), Ankara'ya 191 km (2.5 saat) mesafededir.",
        },
      },
      {
        "@type": "Question",
        name: "Bolu Dagi'na ne zaman gidilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dört mevsim ziyaret edilebilir. Kış aylarinda kayak (Kartalkaya), yaz aylarinda trekking ve kamp, sonbaharda fotograf (Yedigoller), ilkbaharda doğa yuruyusu için idealdir.",
        },
      },
      {
        "@type": "Question",
        name: "Kartalkaya kayak sezonu ne zaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kartalkaya kayak sezonu genellikle Aralik-Mart arasi sürer. 22 pist ve 2.200 metre zirve yuksekligine sahiptir.",
        },
      },
      {
        "@type": "Question",
        name: "Bolu'da ne yenir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bolu, Türkiye'nin ascilar diyaridir. Bolu kebabi, Mengen mutfagi, Abant alabaligi, dag mantisi, orman kebabi ve yöresel peynir-kaymak basta gelen lezzetlerdir.",
        },
      },
      {
        "@type": "Question",
        name: "Abant Gölü'ne nasıl gidilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Abant Gölü, Bolu şehir merkezine 32 km uzakliktadir. Özel arac veya Bolu merkezinden kalkan minibuslerle ulaşım mumkundur.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
