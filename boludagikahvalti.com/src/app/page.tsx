import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Kahvaltilar from "@/components/sections/kahvaltilar";
import Mekanlar from "@/components/sections/mekanlar";
import Programlar from "@/components/sections/programlar";
import EvSofrasi from "@/components/sections/ev-sofrasi";
import LatestPosts from "@/components/sections/latest-posts";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/layout/footer";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import { WebSiteJsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Kahvaltilar />
        <Mekanlar />
        <Programlar />
        <EvSofrasi />
        <LatestPosts />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
