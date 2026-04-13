import Header from "@/components/layout/header";
import Masthead from "@/components/sections/masthead";
import EditorsNote from "@/components/sections/editors-note";
import WhyBolu from "@/components/sections/why-bolu";
import GuideList from "@/components/sections/guide-list";
import PullQuote from "@/components/sections/pull-quote";
import CookingGuide from "@/components/sections/cooking-guide";
import LatestArticles from "@/components/sections/latest-articles";
import ReaderQuestions from "@/components/sections/reader-questions";
import ClosingCTA from "@/components/sections/closing-cta";
import Footer from "@/components/layout/footer";
import { WebSiteJsonLd, ArticleListJsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <ArticleListJsonLd />
      <Header />
      <main>
        <Masthead />
        <EditorsNote />
        <WhyBolu />
        <GuideList />
        <PullQuote />
        <CookingGuide />
        <LatestArticles />
        <ReaderQuestions />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
