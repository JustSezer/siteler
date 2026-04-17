import { SwoopUnderline, LeafShape, Sparkle } from "@/components/decor/food-shapes";
import { Award, Flame, Users } from "lucide-react";

const badges = [
  { icon: Award, label: "30+ Yıl", sub: "Usta geleneği" },
  { icon: Flame, label: "Köz Ocak", sub: "Meşe kömürü" },
  { icon: Users, label: "3. Kuşak", sub: "Aile tarifi" },
];

export default function UstaPortre() {
  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden">
      <LeafShape className="absolute top-12 right-[4%] w-16 h-16 opacity-50 rotate-12" />

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 md:gap-14 items-center">
          {/* Photo side */}
          <div className="col-span-12 md:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto">
              {/* Splash bg */}
              <svg aria-hidden viewBox="0 0 400 500" className="absolute inset-0 w-full h-full -z-0">
                <path
                  d="M200 30 Q310 40 360 140 Q400 240 340 340 Q300 440 200 460 Q100 440 60 340 Q20 240 60 140 Q100 30 200 30 Z"
                  fill="var(--color-gold)"
                  opacity="0.9"
                />
              </svg>
              {/* Photo */}
              <div className="absolute inset-4 rounded-[40%_60%_40%_60%_/_60%_40%_60%_40%] overflow-hidden border-[8px] border-bone shadow-2xl bg-ink">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/bakacak-pirzola.jpg)" }}
                  aria-hidden
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(29,20,17,0) 55%, rgba(29,20,17,0.65) 92%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 text-bone">
                  <p className="script-font text-3xl text-gold leading-none">Halil İbrahim</p>
                  <p className="text-sm font-bold mt-1 uppercase tracking-wide">
                    Kurucu Usta
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-4 w-24 h-24 md:w-28 md:h-28 bg-red text-bone rounded-full flex items-center justify-center shadow-xl rotate-[8deg]">
                <div className="text-center">
                  <p className="text-[10px] font-bold tracking-wider uppercase opacity-90 leading-none">Since</p>
                  <p className="display-font text-2xl md:text-3xl leading-none mt-1">1990</p>
                </div>
              </div>
              <Sparkle className="absolute -bottom-2 -left-2 w-8 h-8" />
              <Sparkle className="absolute top-8 -left-4 w-5 h-5" />
            </div>
          </div>

          {/* Text side */}
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">Usta ve Tarif</p>
            <h2 className="display-font text-ink leading-[0.95] text-[44px] md:text-[64px]">
              <span className="script-font block text-red text-[52px] md:text-[76px] leading-none font-normal">
                Bir ocakta,
              </span>
              üç kuşak{" "}
              <span className="relative inline-block">
                sabır
                <SwoopUnderline className="absolute -bottom-3 left-0 right-0 h-4 text-orange" />
              </span>
              .
            </h2>

            <p className="mt-7 text-ink-soft text-lg leading-[1.7] max-w-xl">
              Bolu Dağı Bakacak Mevki&apos;de küçük bir aile ocağı olarak başlayan hikâye,
              kuşaklar boyu aynı baharat ve aynı köz disiplini ile sürdü. 2026&apos;da bu
              tarifi sabit dükkân dışına çıkardık: standartlaşmış karavan modeli ile
              Türkiye genelinde yola açıldık.
            </p>

            <blockquote className="mt-8 pl-6 border-l-4 border-red italic text-ink text-xl leading-relaxed">
              &ldquo;Tarif aynı — sadece ocak yerinde duramaz hâle geldi.&rdquo;
            </blockquote>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="bg-cream border-2 border-peach rounded-2xl p-4 text-center hover:border-red hover:-translate-y-1 transition-all"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red text-bone mb-3">
                    <b.icon className="w-4 h-4" />
                  </span>
                  <p className="display-font text-xl text-ink leading-tight">{b.label}</p>
                  <p className="text-xs text-muted font-semibold mt-1">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
