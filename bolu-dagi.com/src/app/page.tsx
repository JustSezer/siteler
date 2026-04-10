import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSplit from "@/components/sections/hero-split";
import About from "@/components/sections/about";
import Places from "@/components/sections/places";
import Activities from "@/components/sections/activities";
import Seasons from "@/components/sections/seasons";
import Food from "@/components/sections/food";
import Accommodation from "@/components/sections/accommodation";
import Transportation from "@/components/sections/transportation";
import Gallery from "@/components/sections/gallery";
import FAQ from "@/components/sections/faq";
import LatestPosts from "@/components/sections/latest-posts";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSplit />
        <About />
        <Places />
        <Activities />
        <Seasons />
        <Food />
        <Accommodation />
        <Transportation />
        <Gallery />
        <FAQ />
        <LatestPosts />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
