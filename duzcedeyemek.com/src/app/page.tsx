import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Gastronomy from "@/components/sections/gastronomy";
import Routes from "@/components/sections/routes";
import Restaurants from "@/components/sections/restaurants";
import Seasonal from "@/components/sections/seasonal";
import LatestPosts from "@/components/sections/latest-posts";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";
import CookieBanner from "@/components/cookie-consent/cookie-banner";
import { WebSiteJsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Gastronomy />
        <Routes />
        <Restaurants />
        <Seasonal />
        <LatestPosts />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
