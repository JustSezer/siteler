import { Truck, Flame, Users } from "lucide-react";

const points = [
  {
    icon: Truck,
    title: "Hareketli istasyon",
    text: "Sabit dükkan kira yükü yok. Karavan, ocağı yatırımcının olduğu yere taşır.",
    bg: "bg-[var(--color-snow)]",
    iconBg: "bg-[var(--color-tomato)]",
  },
  {
    icon: Flame,
    title: "Tek bir kıvam",
    text: "Reçete, pişim, servis — her noktada aynı standartla. Marka tutarlılığı kritik.",
    bg: "bg-[var(--color-tomato)] text-[var(--color-snow)]",
    iconBg: "bg-[var(--color-snow)] !text-[var(--color-tomato)]",
  },
  {
    icon: Users,
    title: "İki kişilik ekip",
    text: "Kompakt operasyon. 5-7 dakikada sipariş-pişim-servis döngüsü tamamlanır.",
    bg: "bg-[var(--color-mustard)]",
    iconBg: "bg-[var(--color-night)] !text-[var(--color-mustard)]",
  },
];

export default function ManifestoV4() {
  return (
    <section className="v4-section py-14 sm:py-20 md:py-24 border-t-2 border-[var(--color-night)]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="v4-eyebrow mb-4">FELSEFE — 01</p>
          <h2 className="v4-display-tight text-[var(--color-night)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] [text-wrap:balance]">
            Sabit restoran değil,
            <br />
            <span className="italic">hareketli istasyon.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {points.map((p) => (
            <div
              key={p.title}
              className={`v4-card ${p.bg} p-5 sm:p-7 flex flex-col`}
            >
              <span
                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${p.iconBg} text-[var(--color-snow)]`}
              >
                <p.icon className="w-6 h-6" />
              </span>
              <h3 className="v4-display-tight text-2xl sm:text-3xl leading-tight">
                {p.title}
              </h3>
              <p className={`v4-sans text-base mt-3 leading-relaxed ${
                p.bg.includes("tomato") ? "text-[var(--color-snow)]/90" :
                p.bg.includes("mustard") ? "text-[var(--color-night)]/85" :
                "text-[var(--color-graphite)]"
              }`}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
