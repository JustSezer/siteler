import { FileText, Users, FileSignature, Truck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Başvuru",
    duration: "5 dakika",
    text: "Formu doldur: hedef bölge, yatırım aralığı, mevcut iş deneyimi, lokasyon öncelikleri.",
    deliverable: "Başvuru kaydı oluşturulur",
  },
  {
    num: "02",
    icon: Users,
    title: "Değerlendirme",
    duration: "3 iş günü",
    text: "Ekibimiz başvuruyu inceler, bölge uygunluğunu değerlendirir ve ön görüşme planlar.",
    deliverable: "Kişiye özel fizibilite raporu",
  },
  {
    num: "03",
    icon: FileSignature,
    title: "Sözleşme",
    duration: "1-2 hafta",
    text: "Rapor onaylanırsa franchise sözleşmesi imzalanır, karavan üretimi başlar.",
    deliverable: "İmzalı sözleşme + ödeme planı",
  },
  {
    num: "04",
    icon: Truck,
    title: "Teslim + Eğitim",
    duration: "6-8 hafta",
    text: "Karavan ve ekipman teslimi, 2 hafta yerinde eğitim, ilk lokasyonda açılış desteği.",
    deliverable: "Operasyona hazır ünite",
  },
];

export default function Surec() {
  return (
    <section className="relative bg-bone py-20 md:py-28 overflow-hidden">
      {/* Big backdrop number */}
      <div
        aria-hidden
        className="absolute top-10 -left-10 display-font text-[18rem] md:text-[24rem] text-ink/[0.04] leading-none select-none pointer-events-none"
      >
        04
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 bg-ink text-bone rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Süreç
            </span>
            <h2 className="display-font text-ink leading-[1.02] text-[40px] md:text-[64px]">
              Başvurudan teslimata
              <span className="block text-red">dört net adım.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink-soft text-lg leading-[1.7]">
              Toplam süre başvurudan operasyona yaklaşık 8-10 hafta. Her adımda ne bekleneceği
              ve sana neyin teslim edileceği netleştirilmiştir.
            </p>
          </div>
        </div>

        {/* Vertical timeline layout */}
        <div className="relative space-y-6">
          {/* Timeline vertical line */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[60px] top-8 bottom-8 w-0.5 bg-peach"
          />

          {steps.map((s, i) => (
            <article
              key={s.num}
              className="relative grid md:grid-cols-[140px_1fr] gap-5 md:gap-10 items-start"
            >
              {/* Step marker */}
              <div className="relative flex md:flex-col items-center gap-4 md:gap-0">
                <div className="relative flex items-center justify-center w-[120px] h-[120px] rounded-2xl bg-ink text-bone shadow-xl">
                  <div className="absolute top-3 left-3 text-[10px] text-red-soft font-bold uppercase tracking-wider">
                    Adım
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="display-font text-5xl text-red-soft leading-none">{s.num}</span>
                    <s.icon className="w-5 h-5 mt-2 text-bone/80" />
                  </div>
                </div>
                <div className="md:mt-4 md:text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted font-bold">
                    Süre
                  </p>
                  <p className="display-font text-lg text-ink">{s.duration}</p>
                </div>
              </div>

              {/* Content card */}
              <div className="card p-7 md:p-9 relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="display-font text-2xl md:text-3xl text-ink leading-tight">
                    {s.title}
                  </h3>
                  <span className="badge-outline shrink-0">
                    Adım {s.num}
                  </span>
                </div>
                <p className="text-ink-soft leading-[1.7] mb-5">{s.text}</p>

                <div className="flex items-center gap-3 pt-5 border-t border-dashed border-ink/10">
                  <span className="w-9 h-9 rounded-full bg-red/10 text-red flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted font-bold">
                      Bu adımda alacakların
                    </p>
                    <p className="display-font text-base text-ink mt-0.5">{s.deliverable}</p>
                  </div>
                </div>

                {/* Connecting arrow */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden md:flex absolute -bottom-6 left-8 items-center gap-1 text-red text-xs font-bold"
                  >
                    ↓
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <div className="bg-red text-bone rounded-2xl p-8 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-bone/10"
            />
            <p className="eyebrow-gold !text-gold mb-3">Toplam süre</p>
            <p className="display-font text-4xl md:text-5xl leading-none">~ 8-10 hafta</p>
            <p className="mt-3 text-bone/85 leading-relaxed">
              Başvurudan ilk servise kadar ortalama süre. Lokasyon izinlerine göre değişebilir.
            </p>
          </div>
          <div className="bg-ink text-bone rounded-2xl p-8 flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow-gold mb-3">Başlamaya hazır mısın?</p>
              <p className="display-font text-2xl md:text-3xl leading-tight">
                Bugün başvur, <span className="text-red-soft">3 iş günü</span> içinde fizibilite
                raporuna kavuş.
              </p>
            </div>
            <a href="#basvuru" className="btn-red shrink-0 hidden sm:inline-flex">
              Başvur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
