import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

const specs = [
  { k: "Boyut", v: "2.4 × 5 m" },
  { k: "Tezgah", v: "304 paslanmaz" },
  { k: "Ocak", v: "Köz · meşe kömürü" },
  { k: "Soğutma", v: "Çift kompartıman" },
  { k: "Enerji", v: "Şebeke + jeneratör" },
  { k: "Su tankı", v: "Temiz + gri ayrı" },
];

export default function KaravanV4() {
  return (
    <section className="v4-section py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-stretch">
          {/* Visual / hero card */}
          <div className="v4-card bg-[var(--color-night)] text-[var(--color-snow)] overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-tomato)] via-[var(--color-tomato-deep)] to-[var(--color-night)] overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/karavan-1.jpg)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/85 via-[var(--color-night)]/40 to-transparent"
              />
              <div className="absolute top-5 left-5 v4-tag">
                <Truck className="w-3 h-3" /> Karavan № 01
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="v4-display-tight text-3xl sm:text-4xl text-[var(--color-snow)]">
                  2.4 × 5 m
                </p>
                <p className="v4-sans text-sm text-[var(--color-snow)]/85 mt-1">
                  Standart üretim, anahtar teslim
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <p className="v4-eyebrow !text-[var(--color-mustard)]">KARAVAN — 04</p>
              <h2 className="v4-display-tight text-3xl sm:text-4xl md:text-5xl mt-3 leading-[0.95]">
                Aynı ekipman, <span className="italic text-[var(--color-mustard)]">aynı akış.</span>
              </h2>
              <p className="v4-sans text-[var(--color-snow)]/75 mt-5 leading-relaxed flex-1">
                Her karavan birebir aynı iç düzenle teslim edilir. Bölgeler arası kalite farkı
                standardın güvencesiyle ortadan kalkar.
              </p>
              <Link href="/karavan" className="v4-btn-tomato mt-8 self-start">
                Karavan detayları <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {specs.map((s, i) => (
              <div
                key={s.k}
                className={`v4-card p-4 sm:p-5 flex flex-col justify-between min-h-[130px] ${
                  i === 0 ? "bg-[var(--color-mustard)]" : ""
                } ${i === 3 ? "bg-[var(--color-tomato)] text-[var(--color-snow)]" : ""}`}
              >
                <p
                  className={`v4-eyebrow ${
                    i === 3 ? "!text-[var(--color-snow)]/80" : ""
                  } ${i === 0 ? "!text-[var(--color-night)]/70" : ""}`}
                >
                  {s.k}
                </p>
                <p className="v4-display-tight text-xl sm:text-2xl md:text-3xl leading-tight mt-3">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
