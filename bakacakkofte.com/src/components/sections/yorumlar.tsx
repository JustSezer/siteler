import { Star, Quote } from "lucide-react";
import { UnderlineSquiggle } from "@/components/decor/caravan";

const reviews = [
  {
    name: "Mola veren sürücü",
    location: "D100 · Bolu Dağı geçişi",
    date: "Karavan № 01 · Kaynaşlı",
    text: "Yolda 3 saat sonra gördüğüm karavan tam anlamıyla kurtardı. Köfte taptaze, ayran öz. Buradan geçip uğramayan kaybeder.",
  },
  {
    name: "Üniversite öğrencisi",
    location: "Yerleşke girişi",
    date: "Karavan etkinliği",
    text: "Kampüsün önünde kurulan karavanın müdavimiyim. 10 dakikada köfte hazır, ayran yanında — hem doyuruyor hem otantik kalıyor.",
  },
  {
    name: "Festival ziyaretçisi",
    location: "Açık hava etkinliği",
    date: "Kış pop-up'ı",
    text: "Etkinlik alanının en kalabalık durağı Bakacak Köfte karavanıydı. Köz kokusu uzaktan davet ediyor, servis inanılmaz hızlı.",
  },
];

export default function Yorumlar() {
  return (
    <section className="relative bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-ink font-bold">
                Section 05 · Sesler
              </span>
              <span className="h-px w-24 bg-ink/20" />
            </div>
            <h2 className="display-font text-ink leading-[0.95] text-[48px] md:text-[80px] font-semibold tracking-[-0.02em]">
              Köz başında
              <span className="inline-block ml-4 italic font-[450] text-red relative">
                sohbet
                <UnderlineSquiggle className="absolute -bottom-2 left-0 right-0 h-3" />
              </span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-6">
            <p className="text-ink-2 leading-[1.7] opacity-85">
              Müşteri izlenimleri. Her yeni lokasyonda bu defter büyüyor — franchise başvurusu
              ile kendi karavanınızın sesini de eklemek mümkün.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative bg-cream border border-peach rounded-[28px] p-8 md:p-10 flex flex-col"
              style={{ transform: i === 1 ? "translateY(24px)" : undefined }}
            >
              <Quote className="w-10 h-10 text-red/30 mb-4" />

              <div className="flex items-center gap-0.5 text-red mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="display-font text-ink text-xl md:text-2xl italic leading-[1.35] flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-dashed border-ink/25">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="display-font text-ink font-semibold">{r.name}</p>
                    <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted mt-1">
                      {r.location}
                    </p>
                  </div>
                  <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted shrink-0">
                    № 0{i + 1}
                  </p>
                </div>
                <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-red mt-2">
                  {r.date}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
