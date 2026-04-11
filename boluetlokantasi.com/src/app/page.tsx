import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import MeatTypes from "@/components/sections/meat-types";
import Restaurants from "@/components/sections/restaurants";
import Cooking from "@/components/sections/cooking";
import Testimonials from "@/components/sections/testimonials";
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
        <MeatTypes />
        <Restaurants />
        <Cooking />
        <Testimonials />
        <LatestPosts />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
