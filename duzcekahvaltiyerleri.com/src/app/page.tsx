import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Kultur from "@/components/sections/kultur";
import Editor from "@/components/sections/editor";
import Lezzetler from "@/components/sections/lezzetler";
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
        <Kultur />
        <Editor />
        <Lezzetler />
        <LatestPosts />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
