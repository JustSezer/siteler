import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import IstatistikBant from "@/components/sections/istatistik-bant";
import YolcununNotu from "@/components/sections/yolcunun-notu";
import BakacakSpotlight from "@/components/sections/bakacak-spotlight";
import DurakListesi from "@/components/sections/durak-listesi";
import NedenDuzce from "@/components/sections/neden-duzce";
import PullQuote from "@/components/sections/pull-quote";
import PisirmeRehberi from "@/components/sections/pisirme-rehberi";
import BolgeKartlari from "@/components/sections/bolge-kartlari";
import SonYazilar from "@/components/sections/son-yazilar";
import SSSOnizleme from "@/components/sections/sss-onizleme";
import CtaBant from "@/components/sections/cta-bant";
import Footer from "@/components/layout/footer";
import { WebSiteJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <LocalBusinessJsonLd />
      <Header />
      <main>
        <Hero />
        <IstatistikBant />
        <YolcununNotu />
        <BakacakSpotlight />
        <DurakListesi />
        <NedenDuzce />
        <PullQuote />
        <PisirmeRehberi />
        <BolgeKartlari />
        <SonYazilar />
        <SSSOnizleme />
        <CtaBant />
      </main>
      <Footer />
    </>
  );
}
