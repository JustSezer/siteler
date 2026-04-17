import Link from "next/link";
import { MapPin, Flame, BookOpen } from "lucide-react";

const duraklar = [
  {
    no: "01",
    title: "Bakacak Mangal Rehberi",
    desc: "D100'ün efsane durağı. Bakacak köftesinden meşe közü mangala, yolun kenarındaki geleneklerin tam rehberi.",
    href: "/bakacak-rehberi",
    icon: MapPin,
    keyword: "bakacak mangal düzce",
  },
  {
    no: "02",
    title: "Düzce'de Et Nerede Yenir?",
    desc: "Kuzu pirzoladan dana bonfileye, kasaptan sofraya — Düzce'nin et haritası. Mekanlar, fiyatlar, usta tavsiyeleri.",
    href: "/et-rehberi",
    icon: Flame,
    keyword: "düzce et lokantası",
  },
  {
    no: "03",
    title: "Duman Defteri — Blog",
    desc: "Yol notları, tarif denemeleri, mevsimsel öneriler. Düzce'nin lezzet hikâyelerini defter formatında okuyun.",
    href: "/blog",
    icon: BookOpen,
    keyword: "düzce yemek rehberi",
  },
];

export default function DurakListesi() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-smoke-deep">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-forest mb-4">
            Durak 02 · Rehber Haritası
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal">
            Nereye Bakalım?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {duraklar.map((d) => (
            <Link
              key={d.no}
              href={d.href}
              className="group relative bg-smoke rounded-lg p-6 sm:p-8 border border-bark-soft/50 hover:border-forest/40 transition-all"
            >
              {/* Durak numarası */}
              <span className="durak-number text-5xl sm:text-6xl text-bark-soft/40 absolute top-4 right-4 group-hover:text-forest/20 transition-colors">
                {d.no}
              </span>

              <d.icon
                size={24}
                className="text-forest mb-4"
                aria-hidden="true"
              />

              <h3 className="font-display text-lg sm:text-xl font-semibold text-charcoal mb-3 group-hover:text-forest transition-colors">
                {d.title}
              </h3>

              <p className="font-body text-sm text-charcoal-muted leading-relaxed mb-4">
                {d.desc}
              </p>

              <span className="font-body text-sm text-copper group-hover:text-copper-glow transition-colors">
                Oku &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="rule-thin mt-12 sm:mt-14 pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-charcoal-muted">
          <span>↓ Düzce&apos;yi keşfet</span>
          <span>N. 03</span>
        </div>
      </div>
    </section>
  );
}
