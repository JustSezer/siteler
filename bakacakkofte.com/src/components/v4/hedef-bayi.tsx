import { Check, X } from "lucide-react";

const fits = [
  "Mobil/streetfood iş modeline girmek isteyen yatırımcı",
  "300–500K TL ilk yatırım yapabilen profil",
  "Tek lokasyondan başlayıp bölge çoğaltma planı",
  "Operasyonu kendisi yöneten veya yönetici atayan sahip",
  "Marka standardına ve merkezi tedarike uyumlu",
];

const notFits = [
  "Anında kâr arayan pasif yatırımcı",
  "Marka kimliği dışında özelleştirme talep edenler",
  "Sözleşme dışı tedarikçi kullanmak isteyenler",
  "12 aydan az taahhüt kapasitesi olanlar",
];

export default function HedefBayiV4() {
  return (
    <section className="v4-section-butter py-14 sm:py-20 md:py-24 border-y-2 border-[var(--color-night)]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-9 md:mb-12">
          <p className="v4-eyebrow mb-3">HEDEF BAYİ — 03</p>
          <h2 className="v4-display-tight text-[var(--color-night)] text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Bu fırsat <span className="italic">kime?</span>
          </h2>
          <p className="v4-sans text-[var(--color-graphite)] text-base sm:text-lg mt-5 leading-relaxed">
            Bayilik kararı çift taraflıdır. Aşağıdaki profil çakışıyorsa başvuru süreci hızlı
            ilerler.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="v4-card p-5 sm:p-7 bg-[var(--color-snow)]">
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-tomato)] text-[var(--color-snow)]">
                <Check className="w-6 h-6" strokeWidth={3} />
              </span>
              <p className="v4-display-tight text-2xl">Uygun Profil</p>
            </div>
            <ul className="space-y-4">
              {fits.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 pb-4 border-b border-[var(--color-night)]/10 last:border-0 last:pb-0"
                >
                  <span className="shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--color-tomato)]/15 text-[var(--color-tomato)]">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </span>
                  <span className="v4-sans text-base text-[var(--color-night)] leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="v4-card p-5 sm:p-7 bg-[var(--color-night)] text-[var(--color-snow)]">
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-mustard)] text-[var(--color-night)]">
                <X className="w-6 h-6" strokeWidth={3} />
              </span>
              <p className="v4-display-tight text-2xl">Uygun Olmayan</p>
            </div>
            <ul className="space-y-4">
              {notFits.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 pb-4 border-b border-[var(--color-snow)]/15 last:border-0 last:pb-0"
                >
                  <span className="shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-[var(--color-snow)]/40 text-[var(--color-snow)]/60">
                    <X className="w-3 h-3" strokeWidth={4} />
                  </span>
                  <span className="v4-sans text-base text-[var(--color-snow)]/90 leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
