import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCta from "@/components/layout/sticky-cta";
import Hero from "@/components/sections/hero";
import ImzaTabaklar from "@/components/sections/imza-tabaklar";
import Hikaye from "@/components/sections/hikaye";
import Konum from "@/components/sections/konum";
import BasindaStrip from "@/components/sections/basinda-strip";
import GaleriGrid from "@/components/sections/galeri-grid";
import JsonLd from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    alternateName: site.fullName,
    description: site.description,
    url: site.url,
    telephone: site.phones[0].display,
    email: site.email,
    priceRange: "₺₺",
    servesCuisine: ["Turkish", "Kebab", "Breakfast", "Grill"],
    image: [`${site.url}/images/bakacak-kofte.jpg`, `${site.url}/images/bakacak-pirzola.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.maps.coords.lat,
      longitude: site.maps.coords.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      site.social.instagram,
      site.social.youtube,
      site.social.facebook,
      site.brandUrl,
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImzaTabaklar />
        <Hikaye />
        <Konum />
        <BasindaStrip />
        <GaleriGrid />
      </main>
      <Footer />
      <StickyCta />
      <JsonLd data={localBusinessSchema} />
    </>
  );
}
