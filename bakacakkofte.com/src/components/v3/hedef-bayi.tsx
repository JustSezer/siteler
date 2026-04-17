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

export default function HedefBayiV3() {
  return (
    <section className="v3-section-warm py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-9">
            <p className="v3-num">№ 03</p>
            <h2 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 leading-[0.95] tracking-[-0.02em]">
              Bu fırsat
              <br />
              <span className="italic text-[var(--color-stone)]">kime uygun?</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="v3-sans text-[var(--color-charcoal-3)] text-sm sm:text-base leading-relaxed font-light">
              Bayilik kararı çift taraflıdır. Aşağıdaki profil çakışıyorsa başvuru süreci hızlı
              ilerler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-rule-3)] border v3-rule">
          <div className="bg-[var(--color-card-3)] p-7 sm:p-8 md:p-12">
            <div className="flex items-center justify-between mb-7 sm:mb-9">
              <p className="v3-eyebrow !text-[var(--color-terracotta)]">Uygun Profil</p>
              <span className="v3-sans text-xs text-[var(--color-stone)]">{fits.length} kriter</span>
            </div>
            <ul className="space-y-5">
              {fits.map((f, i) => (
                <li key={i} className="flex items-start gap-4 pb-5 border-b v3-rule last:border-0">
                  <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center bg-[var(--color-terracotta)] text-[var(--color-paper-3)]">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="v3-serif text-lg sm:text-xl leading-snug text-[var(--color-charcoal)]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-charcoal)] text-[var(--color-paper-3)] p-7 sm:p-8 md:p-12">
            <div className="flex items-center justify-between mb-7 sm:mb-9">
              <p className="v3-eyebrow !text-[var(--color-stone-2)]">Uygun Olmayan</p>
              <span className="v3-sans text-xs text-[var(--color-stone)]">{notFits.length} sınır</span>
            </div>
            <ul className="space-y-5">
              {notFits.map((f, i) => (
                <li key={i} className="flex items-start gap-4 pb-5 border-b v3-rule-dark last:border-0">
                  <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center border border-[var(--color-stone)] text-[var(--color-stone-2)]">
                    <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="v3-serif text-lg sm:text-xl leading-snug text-[var(--color-paper-3)]/85">
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
