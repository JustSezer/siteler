import { Truck, ChefHat, Sparkles, Handshake } from "lucide-react";
import { TomatoShape, Sparkle, SwoopUnderline } from "@/components/decor/food-shapes";

const reasons = [
  {
    icon: ChefHat,
    title: "Köklü reçete",
    text: "30+ yıllık usta tarifi, karavan mutfağına uyarlanacak şekilde standardize edildi.",
  },
  {
    icon: Truck,
    title: "Anahtar teslim",
    text: "Karavan + ekipman + reçete + eğitim + marka paketi &mdash; tek pakette.",
  },
  {
    icon: Sparkles,
    title: "Düşük bariyer",
    text: "Sabit restoran maliyetine kıyasla çok daha düşük başlangıç yatırımı.",
  },
  {
    icon: Handshake,
    title: "Merkez desteği",
    text: "Tedarik, mentorluk ve pazarlama şablonları bayinin yanında.",
  },
];

export default function NedenBiz() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <TomatoShape className="absolute top-16 left-[3%] w-20 h-20 opacity-80 decor-float" />
      <Sparkle className="absolute bottom-24 right-[8%] w-8 h-8 opacity-60" />

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Neden Bakacak</p>
          <h2 className="display-font text-ink leading-[0.95] text-[44px] md:text-[64px]">
            <span className="script-font block text-red text-[52px] md:text-[76px] leading-none font-normal">
              Dört sebep,
            </span>
            tek{" "}
            <span className="relative inline-block">
              karavan
              <SwoopUnderline className="absolute -bottom-3 left-0 right-0 h-4 text-orange" />
            </span>
            .
          </h2>
          <p className="mt-6 text-ink-soft text-lg">
            Yatırımcıya hazır konsept, standart operasyon ve test edilmiş lezzet &mdash;
            kendi ocağını açmak için gerekli her şey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`card-food p-8 text-center ${i % 2 === 1 ? "md:translate-y-6" : ""}`}
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red text-bone mb-5 shadow-lg shadow-red/30">
                <r.icon className="w-7 h-7" />
              </span>
              <h3 className="display-font text-xl text-ink mb-3">{r.title}</h3>
              <p className="text-ink-soft text-sm leading-[1.7]">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
