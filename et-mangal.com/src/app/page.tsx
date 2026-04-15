import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FireHero from "@/components/sections/fire-hero";
import KategoriGrid from "@/components/sections/kategori-grid";
import UstaIpuclari from "@/components/sections/usta-ipuclari";
import OneCikanTarifler from "@/components/sections/one-cikan-tarifler";
import PartnerOneri from "@/components/sections/partner-oneri";
import CtaBant from "@/components/sections/cta-bant";
import JsonLd from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    foundingDate: site.founded,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: site.url,
    inLanguage: "tr-TR",
    description: site.description,
  };

  return (
    <>
      <Header />
      <main>
        <FireHero />
        <KategoriGrid />
        <UstaIpuclari />
        <OneCikanTarifler />
        <PartnerOneri />
        <CtaBant />
      </main>
      <Footer />
      <JsonLd data={orgSchema} />
      <JsonLd data={websiteSchema} />
    </>
  );
}
