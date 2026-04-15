import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBant() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-36">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center">
        <p className="eyebrow mb-6">Rehberi Takip Et</p>
        <h2 className="display-font text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.02] text-ink tracking-tight">
          Ateşi{" "}
          <span className="italic text-ember font-normal">öğren</span>,
          <br />
          eti hak et.
        </h2>
        <p className="mt-7 max-w-xl mx-auto text-[17px] leading-[1.78] text-ink-soft italic font-body">
          Rehberi bölüm bölüm okuyun; tarifleri ve tabloları dilediğinizde geri
          dönebileceğiniz şekilde kayıt altına aldık. Reklamsız, bağımsız, usta
          notlarıyla.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/mangal-rehberi" className="btn-amber">
            Mangal Rehberi
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/et-cesitleri" className="btn-line">
            Et Çeşitleri
          </Link>
        </div>
      </div>
    </section>
  );
}
