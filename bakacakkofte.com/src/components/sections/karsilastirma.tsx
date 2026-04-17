import { Check, X, TrendingDown, TrendingUp } from "lucide-react";

const classic = [
  { label: "Başlangıç yatırımı", value: "Yüksek", detail: "İnşaat + dekor + depozito" },
  { label: "Aylık sabit gider", value: "Ağır", detail: "Kira + aidat + personel" },
  { label: "Açılış süresi", value: "6-12 ay", detail: "Ruhsat + inşaat süresi" },
  { label: "Personel ihtiyacı", value: "5-8 kişi", detail: "İş gücü yükü yüksek" },
  { label: "Lokasyon esnekliği", value: "Sıfır", detail: "Tek noktaya sabitlenir" },
  { label: "Çıkış kolaylığı", value: "Zor", detail: "Kira taahhüdü + devir" },
];

const caravan = [
  { label: "Başlangıç yatırımı", value: "Düşük", detail: "Karavan + ekipman paketi" },
  { label: "Aylık sabit gider", value: "Minimum", detail: "Yakıt + opsiyonel yer kirası" },
  { label: "Açılış süresi", value: "6-8 hafta", detail: "Teslim + eğitim sonrası açık" },
  { label: "Personel ihtiyacı", value: "2 kişi", detail: "1 usta + 1 yardımcı yeterli" },
  { label: "Lokasyon esnekliği", value: "Yüksek", detail: "Gün içi lokasyon değişimi" },
  { label: "Çıkış kolaylığı", value: "Kolay", detail: "Karavan transferi / devir" },
];

export default function Karsilastirma() {
  return (
    <section className="relative bg-bone py-20 md:py-28 pt-28 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 bg-red/10 text-red rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            Neden Karavan
          </span>
          <h2 className="display-font text-ink leading-[1.02] text-[40px] md:text-[64px]">
            Sabit restoran mı,
            <span className="block text-red">karavan bayiliği mi?</span>
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-[1.7]">
            Aynı sermaye, aynı marka gücü, aynı reçete &mdash; farklı bir iş modeli.
            İki modelin ana kalemlerini yan yana karşılaştırdık.
          </p>
        </div>

        {/* Versus layout */}
        <div className="relative grid md:grid-cols-2 gap-5 md:gap-8">
          {/* VS badge */}
          <div
            aria-hidden
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-ink text-bone items-center justify-center shadow-2xl"
          >
            <span className="display-font text-xl">VS</span>
          </div>

          {/* Classic */}
          <div className="relative bg-cream rounded-3xl p-8 md:p-10 border border-peach">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="eyebrow !text-muted mb-2">Seçenek A</p>
                <h3 className="display-font text-3xl md:text-4xl text-ink leading-tight">
                  Sabit Restoran
                </h3>
              </div>
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-ink/10 text-ink">
                <TrendingDown className="w-6 h-6" />
              </span>
            </div>

            <ul className="space-y-3">
              {classic.map((c) => (
                <li key={c.label} className="bg-bone border border-peach rounded-xl px-5 py-4 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-ink/10 text-ink flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-bold">{c.label}</p>
                      <p className="text-sm text-ink-soft mt-0.5">{c.detail}</p>
                    </div>
                    <span className="display-font text-base text-ink/70 shrink-0">{c.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Caravan */}
          <div className="relative bg-ink text-bone rounded-3xl p-8 md:p-10 shadow-2xl">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] rounded-3xl"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, var(--color-bone) 0 1px, transparent 1px 16px)",
              }}
            />

            <div className="absolute -top-3 -right-3 bg-red text-bone px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              ★ Önerilen
            </div>

            <div className="relative flex items-start justify-between mb-6">
              <div>
                <p className="eyebrow !text-red-soft mb-2">Seçenek B</p>
                <h3 className="display-font text-3xl md:text-4xl leading-tight">
                  Karavan Bayiliği
                </h3>
              </div>
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-red text-bone">
                <TrendingUp className="w-6 h-6" />
              </span>
            </div>

            <ul className="relative space-y-3">
              {caravan.map((c) => (
                <li key={c.label} className="bg-ink-2 border border-bone/10 rounded-xl px-5 py-4 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red text-bone flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-red-soft font-bold">{c.label}</p>
                      <p className="text-sm text-bone/70 mt-0.5">{c.detail}</p>
                    </div>
                    <span className="display-font text-base text-bone shrink-0">{c.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-12 relative overflow-hidden rounded-2xl bg-red text-bone p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
          <div
            aria-hidden
            className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-bone/10"
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-wider font-bold text-bone/80 mb-2">Sonuç</p>
            <p className="display-font text-xl md:text-2xl leading-tight max-w-2xl">
              Altı kritik kalemin hepsinde karavan, sabit restoran modeline kıyasla daha düşük
              risk ve daha yüksek esneklik sunuyor.
            </p>
          </div>
          <a
            href="#basvuru"
            className="relative inline-flex items-center gap-2 bg-bone text-red font-bold rounded-lg px-6 py-3 hover:bg-ink hover:text-bone transition-colors shrink-0"
          >
            Başvuru yap →
          </a>
        </div>
      </div>
    </section>
  );
}
