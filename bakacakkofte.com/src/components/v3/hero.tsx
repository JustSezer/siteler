import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroV3() {
  return (
    <section className="relative v3-section pt-32 sm:pt-36 md:pt-44 pb-20 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* top meta */}
        <div className="flex items-center justify-between gap-4 mb-16 md:mb-24">
          <p className="v3-eyebrow flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)]" />
            Karavan Bayilik · 2026
          </p>
          <p className="v3-eyebrow hidden md:block">Bakacak Mevki, Bolu Dağı · 81/81 il</p>
        </div>

        {/* main editorial headline */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="v3-serif text-[var(--color-charcoal)] text-[52px] sm:text-[80px] md:text-[112px] lg:text-[148px] xl:text-[176px] leading-[0.95] tracking-[-0.025em] [text-wrap:balance]">
              Köz, karavan
              <br />
              ve <span className="italic text-[var(--color-terracotta)]">otuz yıllık</span>
              <br />
              bir tarif.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pb-8">
            <p className="v3-sans text-[var(--color-charcoal-3)] text-base sm:text-lg leading-[1.65] max-w-md font-light">
              Bolu Dağı&apos;nın usta köfte tarifini standart karavan, ekipman, eğitim ve marka
              desteğiyle anahtar teslim bayilik paketi olarak Türkiye geneline açıyoruz.
            </p>
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/franchise" className="v3-btn justify-center sm:justify-start">
                Bayilik başvurusu <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#niyet" className="v3-btn-ghost justify-center sm:justify-start">
                Manifesto
              </Link>
            </div>
          </div>
        </div>

        {/* bottom meta strip */}
        <div className="mt-20 md:mt-32 pt-8 border-t v3-rule grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {[
            ["№ 01", "Kuruluş", "1990"],
            ["№ 02", "Karavan", "2026"],
            ["№ 03", "Ekip", "2 kişi"],
            ["№ 04", "Açılış", "6–8 hafta"],
          ].map(([n, k, v]) => (
            <div key={k}>
              <p className="v3-num">{n}</p>
              <p className="v3-eyebrow mt-1.5 !text-[var(--color-stone)]">{k}</p>
              <p className="v3-serif text-[var(--color-charcoal)] text-3xl md:text-4xl mt-2 leading-none">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
