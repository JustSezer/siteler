import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const specs = [
  ["Boyut", "2.4 × 5 m"],
  ["Tezgah", "304 paslanmaz"],
  ["Ocak", "Köz · meşe kömürü"],
  ["Soğutma", "Çift kompartıman"],
  ["Enerji", "Şebeke + jeneratör"],
  ["Su", "Temiz + gri ayrı"],
  ["Servis", "1 pencere · 2 personel"],
  ["Marka", "Standart vinyl + ışık"],
];

export default function KaravanV3() {
  return (
    <section className="v3-section py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <p className="v3-num">№ 04</p>
            <h2 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl mt-3 leading-[0.98] tracking-[-0.02em]">
              Aynı ekipman.
              <br />
              <span className="italic text-[var(--color-stone)]">Aynı akış.</span>
            </h2>
            <p className="v3-sans text-[var(--color-charcoal-3)] mt-6 sm:mt-8 text-base sm:text-lg font-light leading-relaxed max-w-md">
              Her karavan birebir aynı iç düzenle teslim edilir. Bölgeler arası kalite farkı
              standardın güvencesiyle ortadan kalkar.
            </p>

            <Link href="/karavan" className="v3-link mt-8 sm:mt-10">
              Karavan detayları <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="col-span-12 md:col-span-7">
            <dl className="border-t v3-rule">
              {specs.map(([k, v], i) => (
                <div
                  key={k}
                  className="grid grid-cols-12 items-baseline gap-4 py-5 sm:py-6 border-b v3-rule"
                >
                  <span className="col-span-2 v3-num">№ {String(i + 1).padStart(2, "0")}</span>
                  <dt className="col-span-5 v3-eyebrow">{k}</dt>
                  <dd className="col-span-5 v3-serif text-[var(--color-charcoal)] text-lg sm:text-2xl text-right leading-tight">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
