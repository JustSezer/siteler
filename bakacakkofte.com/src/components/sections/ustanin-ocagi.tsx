import { Flame, Wheat, ChefHat, Utensils } from "lucide-react";
import { UnderlineSquiggle } from "@/components/decor/caravan";

const steps = [
  {
    num: "01",
    icon: Wheat,
    title: "Harç",
    sub: "Taze dana + kuzu",
    text: "Günlük gelen dana ve kuzu eti, yaklaşık 70/30 oranında karıştırılır. Tuz, karabiber ve markanın özel baharat bileşeni elle yoğrularak reçetenin özü korunur.",
    detail: "Dinlenme süresi: 4 saat · buzdolabı",
  },
  {
    num: "02",
    icon: ChefHat,
    title: "Form",
    sub: "El kesim, eşit oran",
    text: "Her köfte aynı gramajda, elle şekillendirilir. Karavan operasyonunun temposu için form standardı, pişim süresini sabit tutar.",
    detail: "Gramaj: 45 gr · tolerans ±3gr",
  },
  {
    num: "03",
    icon: Flame,
    title: "Köz",
    sub: "Meşe köz ateşi",
    text: "Karavanın içindeki profesyonel ızgara meşe kömürüyle yakılır. Doğru ısıya gelen köz üzerinde köfte; tek çevirmede dışı kıtır, içi sulu pişer.",
    detail: "Isı: 280°C · süre 4 dk",
  },
  {
    num: "04",
    icon: Utensils,
    title: "Servis",
    sub: "Sıcak lavaş, yeşillik",
    text: "Közlenmiş biberle birlikte taze lavaş üzerinde servis edilir. Yan ürün olarak ev ayranı, şalgam veya tarhana çorbası eşlik eder.",
    detail: "Servis hedefi: 5-7 dakika",
  },
];

export default function UstaninOcagi() {
  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden">
      {/* Cross pattern bg */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-ink font-bold">
                Section 04 · Usta&apos;nın Ocağı
              </span>
              <span className="h-px w-24 bg-ink/20" />
            </div>
            <h2 className="display-font text-ink leading-[0.95] text-[48px] md:text-[84px] font-semibold tracking-[-0.02em]">
              Dört adım,
              <span className="block italic font-[450] relative inline-block">
                tek kıvam
                <UnderlineSquiggle className="absolute -bottom-2 left-0 right-0 h-3 text-red" />
              </span>
              .
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-6">
            <p className="text-ink-2 leading-[1.7] opacity-85">
              Her karavanın ocağında aynı süreç, aynı süreler, aynı ısılar. Standartlaşma
              marka kalitesinin değil; her tabak köftesinin aynı olmasının garantisi.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <article
              key={s.num}
              className="relative group"
            >
              {/* Connection arrow (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-16 right-0 translate-x-full w-5 pointer-events-none z-0"
                >
                  <svg viewBox="0 0 40 12" className="w-8">
                    <path
                      d="M0 6 L36 6 M30 2 L36 6 L30 10"
                      stroke="var(--color-red)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="2 3"
                    />
                  </svg>
                </div>
              )}

              <div className="relative bg-cream border border-peach rounded-[28px] p-8 h-full flex flex-col transition-all group-hover:border-red group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Huge number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="display-font text-[72px] leading-none font-semibold text-red/25">
                    {s.num}
                  </span>
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-ink text-red-soft">
                    <s.icon className="w-5 h-5" />
                  </span>
                </div>

                <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted mb-1">
                  {s.sub}
                </p>
                <h3 className="display-font text-2xl font-semibold text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-ink-2 text-sm leading-[1.7] opacity-85 flex-1">
                  {s.text}
                </p>

                <div className="mt-6 pt-5 border-t border-dashed border-ink/25">
                  <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-red font-bold">
                    {s.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
