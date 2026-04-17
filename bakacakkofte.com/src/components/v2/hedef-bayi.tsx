import { Check, Minus } from "lucide-react";

const fits = [
  "Mobil/streetfood iş modeline girmek isteyen yatırımcı",
  "300–500K TL aralığında ilk yatırım yapabilen profil",
  "Tek lokasyonla başlayıp bölge çoğaltma planı kuran girişimci",
  "Operasyonu kendisi yönetebilen veya yönetici atayabilen sahip",
  "Marka standardına ve merkezi tedarik disiplinine uyumlu profil",
];

const notFits = [
  "Anında kâra geçecek pasif yatırım arayanlar",
  "Marka kimliği dışında özelleştirme talep edenler",
  "Sözleşme dışı tedarikçi kullanmak isteyen işletmeciler",
  "Kısa vadeli — 12 aydan az — taahhüt kapasitesi olanlar",
];

export default function HedefBayiV2() {
  return (
    <section className="v2-section-light py-20 sm:py-28 md:py-44">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-9">
            <p className="v2-num">№ 04 — Hedef Bayi</p>
            <h2 className="v2-display text-[var(--color-coal)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 sm:mt-4 leading-[0.95] tracking-[-0.03em]">
              Bu fırsat
              <br />
              <span className="text-[var(--color-coal)]/40">kime uygun?</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="text-[var(--color-coal)]/70 text-sm sm:text-base leading-relaxed">
              Bayilik kararı çift taraflıdır. Aşağıdaki profil çakışıyorsa başvuru süreci
              hızlı ilerler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-coal)]/15 border border-[var(--color-coal)]/15">
          {/* Fits */}
          <div className="bg-[var(--color-paper)] p-6 sm:p-8 md:p-10">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <p className="v2-label v2-label-ember !text-[var(--color-ember)]">
                Uygun Profil
              </p>
              <span className="v2-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-coal)]/40">
                {fits.length} kriter
              </span>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {fits.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 pb-4 sm:pb-5 border-b border-[var(--color-coal)]/15 last:border-0"
                >
                  <span className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center bg-[var(--color-ember)] text-[var(--color-paper)]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="v2-display text-base sm:text-lg leading-snug text-[var(--color-coal)]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fits */}
          <div className="bg-[var(--color-coal)] text-[var(--color-paper)] p-6 sm:p-8 md:p-10">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <p className="v2-label !text-[var(--color-fog-2)]">Uygun Olmayan</p>
              <span className="v2-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
                {notFits.length} sınır
              </span>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {notFits.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 pb-4 sm:pb-5 border-b v2-rule last:border-0"
                >
                  <span className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center border v2-rule text-[var(--color-fog-2)]">
                    <Minus className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="v2-display text-base sm:text-lg leading-snug text-[var(--color-paper)]/80">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
