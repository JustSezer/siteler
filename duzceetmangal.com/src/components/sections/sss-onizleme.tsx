import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const oneSorular = [
  {
    q: "Düzce'de en iyi et mangal nerede yenir?",
    a: "Düzce'de et mangal için en bilinen bölge Kaynaşlı'daki Bakacak mevkiidir. D100 karayolu üzerinde meşe közünde et mangal sunan birçok restoran bulunur.",
  },
  {
    q: "Bakacak köfte nedir?",
    a: "Dana ve kuzu kıymasının özel oranlarda harmanlanmasıyla hazırlanan bölgesel bir lezzettir. Meşe kömürü üzerinde yavaş pişirilerek hazırlanır.",
  },
  {
    q: "İstanbul-Ankara yolunda mangal molası nerede verilir?",
    a: "En köklü mangal molası noktası Düzce Kaynaşlı'daki Bakacak mevkiidir. D100 üzerinde onlarca yıldır hizmet veren restoranlar meşe közünde et mangal sunmaktadır.",
  },
  {
    q: "Meşe kömürü mangalda ne fark yaratır?",
    a: "Meşe kömürü daha yavaş ve düzgün yanar, ete tütsümsü bir derinlik ve ayırt edici bir aroma katar. Düzce'nin meşe ormanları bu geleneğin temelidir.",
  },
];

export default function SSSOnizleme() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-forest mb-4">
              Durak 07 · Yolcunun Soruları
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal">
              Sık Sorulan Sorular
            </h2>
          </div>
          <Link
            href="/sss"
            className="font-body text-sm text-copper hover:text-copper-glow transition-colors flex items-center gap-2 underline underline-offset-4 decoration-copper/40 hover:decoration-copper"
          >
            Tüm Sorular
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-0">
          {oneSorular.map((s, i) => (
            <details key={i} className="group border-t border-bark-soft">
              <summary className="flex items-start justify-between gap-4 py-5 sm:py-6 cursor-pointer list-none">
                <h3 className="font-display text-base sm:text-lg font-semibold text-charcoal group-open:text-forest transition-colors text-left">
                  {s.q}
                </h3>
                <ChevronDown
                  size={20}
                  className="shrink-0 mt-1 text-charcoal-muted group-open:rotate-180 transition-transform"
                  aria-hidden="true"
                />
              </summary>
              <p className="font-body text-sm sm:text-base text-charcoal-soft leading-relaxed pb-6 pr-8">
                {s.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
