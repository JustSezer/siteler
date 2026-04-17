import Link from "next/link";
import { ArrowRight, Check, Flame } from "lucide-react";
import { ChilliShape, TomatoShape, Sparkle, SwoopUnderline } from "@/components/decor/food-shapes";

const perks = [
  "Karavan + köz ızgara sistemi tam ekipmanla",
  "2 haftalık yerinde operasyon eğitimi",
  "30+ yıllık usta reçetesi ve merkezi tedarik",
  "Marka görsel kimlik paketi + sosyal medya şablonları",
];

export default function OzelTeklif() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-cream">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        <div className="relative red-panel rounded-[36px] overflow-hidden grain">
          {/* Decorative shapes */}
          <ChilliShape className="absolute -top-8 right-[4%] w-28 h-40 opacity-25 rotate-12" />
          <TomatoShape className="absolute -bottom-8 left-[3%] w-28 h-28 opacity-25 -rotate-12" />
          <Sparkle className="absolute top-16 left-[20%] w-8 h-8 opacity-60" />
          <Sparkle className="absolute bottom-16 right-[18%] w-6 h-6 opacity-50" />
          <Sparkle className="absolute top-32 right-[36%] w-5 h-5 opacity-60" />

          <div className="relative grid md:grid-cols-12 gap-10 p-8 md:p-14 lg:p-20">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 bg-gold text-ink px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" /> Özel Teklif · Sınırlı
              </span>

              <h2 className="display-font text-bone leading-[0.95] text-[40px] md:text-[64px] mt-6">
                <span className="script-font block text-gold text-[56px] md:text-[84px] leading-none font-normal">
                  Anahtar Teslim
                </span>
                <span className="relative inline-block">
                  Karavan Paketi
                  <SwoopUnderline className="absolute -bottom-3 left-0 right-0 h-4 text-gold" />
                </span>
              </h2>

              <p className="mt-6 text-bone/90 text-lg leading-[1.7] max-w-xl">
                İlk başvuru döneminde bayilik alanlara; ekipman + eğitim + marka paketi
                hep bir arada tek fiyatta. Rakamlar kişiye özel fizibilite raporunda paylaşılır.
              </p>

              <ul className="mt-8 grid gap-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-bone">
                    <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-bone text-red shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-semibold">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/franchise" className="btn-ink !bg-bone !text-red !border-bone hover:!bg-gold hover:!text-ink hover:!border-gold">
                  Şimdi başvur <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold border-2 border-bone/50 text-bone hover:bg-bone hover:text-red transition-colors">
                  İletişime geç
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative">
                {/* Big discount circle */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-bone text-red rounded-full flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-3 border-2 border-dashed border-red/30 rounded-full" />
                  <div className="text-center">
                    <p className="script-font text-3xl text-ink leading-none">Yatırım</p>
                    <p className="display-font text-[72px] md:text-[96px] leading-none text-red">
                      %100
                    </p>
                    <p className="script-font text-3xl text-ink leading-none">hazır!</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-ink-soft">
                      Anahtar teslim
                    </p>
                  </div>

                  {/* Star sparkles around */}
                  <Sparkle className="absolute -top-4 -left-2 w-8 h-8" />
                  <Sparkle className="absolute -bottom-2 -right-4 w-6 h-6" />
                  <Sparkle className="absolute top-1/2 -right-6 w-5 h-5" />
                </div>

                {/* Ribbon tag */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-ink text-bone px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  Franchise 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
