import { CaravanSilhouette, WaxSeal } from "@/components/decor/caravan";

const stats = [
  { num: "30+", label: "Yıl usta geleneği", sub: "Bolu Dağı Bakacak Mevki" },
  { num: "81", label: "İl franchise hedefi", sub: "Türkiye geneli" },
  { num: "08", label: "Çekirdek ürün", sub: "İmza · Izgara · Çorba · İçecek" },
  { num: "02", label: "Kişi ekip büyüklüğü", sub: "Kompakt, hızlı servis" },
  { num: "05'", label: "Dk servis hedefi", sub: "Pişim + servis döngüsü" },
  { num: "1x1", label: "Karavan modeli", sub: "Standart iç düzen" },
];

export default function Rakamlarla() {
  return (
    <section className="relative bg-ink text-bone py-24 md:py-32 overflow-hidden">
      {/* Outline caravan */}
      <CaravanSilhouette className="absolute -top-10 -right-10 w-[420px] text-red/15 pointer-events-none rotate-[-6deg]" />

      {/* Diagonal pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-bone) 0 1px, transparent 1px 22px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-red-soft font-bold">
                Section 05 · Rakamlar
              </span>
              <span className="h-px w-24 bg-bone/20" />
            </div>
            <h2 className="display-font text-bone leading-[0.92] text-[48px] md:text-[96px] font-semibold tracking-[-0.02em]">
              Marka,
              <span className="italic font-[450] text-red-soft"> rakamlarla.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-6 flex md:justify-end">
            <WaxSeal className="w-28 h-28 text-red-soft" text="Doğrulanmış · 2026" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-bone/10 rounded-3xl overflow-hidden border border-bone/10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative bg-ink p-8 md:p-10 flex flex-col gap-3 hover:bg-ink-2 transition-colors"
            >
              <span className="mono-font text-[10px] uppercase tracking-[0.3em] text-red-soft font-bold">
                № {String(i + 1).padStart(2, "0")}
              </span>
              <p className="display-font text-[84px] md:text-[112px] leading-[0.9] text-bone font-semibold tracking-[-0.04em]">
                {s.num}
              </p>
              <div>
                <p className="display-font text-xl md:text-2xl text-bone font-semibold">
                  {s.label}
                </p>
                <p className="text-bone/60 text-sm mt-1 leading-relaxed">
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
