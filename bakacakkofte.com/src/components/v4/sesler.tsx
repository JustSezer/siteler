import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Karavan sistemini tek seferde kurmak imkansız geliyordu — anahtar teslim paket sayesinde 6 haftada açıldık.",
    who: "Pilot bayi adayı",
    where: "İç Anadolu",
    bg: "bg-[var(--color-snow)]",
  },
  {
    text: "Sabit kira ve dekorasyon yükü olmadan markalı bir gastronomi işletmesi açtım. Bölge esnekliği rakipsiz.",
    who: "İlk grup bayi",
    where: "Karadeniz hattı",
    bg: "bg-[var(--color-tomato)] text-[var(--color-snow)]",
  },
  {
    text: "Reçete ve tedarik merkezden geldiği için ürün kalitesi sapmıyor. Müşteri her gün aynı kıvamı bekleyerek geliyor.",
    who: "Operasyon değerlendirmesi",
    where: "Ege bölgesi",
    bg: "bg-[var(--color-mustard)]",
  },
];

export default function SeslerV4() {
  return (
    <section className="v4-section-butter py-14 sm:py-20 md:py-24 border-t-2 border-[var(--color-night)]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9 md:mb-12">
          <div>
            <p className="v4-eyebrow mb-3">SAHADAN — 07</p>
            <h2 className="v4-display-tight text-[var(--color-night)] text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
              Pilot dönem <span className="italic">notları.</span>
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--color-tomato)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="v4-display text-sm text-[var(--color-night)] ml-2">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className={`v4-card p-5 sm:p-7 ${r.bg} flex flex-col ${
                i === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <Quote
                className={`w-9 h-9 mb-5 ${
                  r.bg.includes("tomato") ? "text-[var(--color-snow)]/40" :
                  r.bg.includes("mustard") ? "text-[var(--color-night)]/30" :
                  "text-[var(--color-tomato)]/35"
                }`}
              />
              <blockquote className="v4-display text-lg sm:text-xl leading-snug flex-1">
                {r.text}
              </blockquote>
              <figcaption className={`mt-7 pt-5 border-t ${
                r.bg.includes("tomato") ? "border-[var(--color-snow)]/20" :
                "border-[var(--color-night)]/15"
              }`}>
                <p className="v4-display-tight text-base">{r.who}</p>
                <p className={`v4-sans text-xs mt-1 ${
                  r.bg.includes("tomato") ? "text-[var(--color-snow)]/75" :
                  r.bg.includes("mustard") ? "text-[var(--color-night)]/65" :
                  "text-[var(--color-graphite)]"
                }`}>
                  {r.where}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
