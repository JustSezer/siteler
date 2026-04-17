import HeaderV4 from "@/components/v4/header";
import HeroV4 from "@/components/v4/hero";
import ManifestoV4 from "@/components/v4/manifesto";
import FiguresV4 from "@/components/v4/figures";
import HedefBayiV4 from "@/components/v4/hedef-bayi";
import KaravanV4 from "@/components/v4/karavan";
import SurecV4 from "@/components/v4/surec";
import YatirimV4 from "@/components/v4/yatirim";
import SeslerV4 from "@/components/v4/sesler";
import SssV4 from "@/components/v4/sss";
import FormV4 from "@/components/v4/form";
import CtaV4 from "@/components/v4/cta";
import FooterV4 from "@/components/v4/footer";

export default function HomePage() {
  return (
    <>
      <HeaderV4 />
      <main id="main-content">
        <HeroV4 />
        <ManifestoV4 />
        <FiguresV4 />
        <HedefBayiV4 />
        <KaravanV4 />
        <SurecV4 />
        <YatirimV4 />
        <SeslerV4 />
        <SssV4 />
        <FormV4 />
        <CtaV4 />
      </main>
      <FooterV4 />
    </>
  );
}
