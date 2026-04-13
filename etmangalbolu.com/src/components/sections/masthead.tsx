import Image from "next/image";

export default function Masthead() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-24 paper-grain">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        {/* Üst masthead barı — gazete kapağı stili */}
        <div className="rule-thick pt-3 mb-8 sm:mb-10 lg:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft">
            <span className="font-semibold">Bolu Mangal Rehberi</span>
            <span className="hidden sm:inline">Bağımsız Gastronomi · Bolu</span>
            <span>Sayı 01 · 2026</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-end">
          {/* Sol: Manşet metni */}
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ember mb-5 sm:mb-6">
              Manşet · Et & Köz Üzerine
            </p>

            <h1 className="font-display text-[36px] xs:text-[42px] sm:text-[54px] md:text-[52px] lg:text-[78px] xl:text-[88px] leading-[0.92] tracking-[-0.025em] text-ink font-black mb-6 sm:mb-8">
              Bolu&apos;da
              <br />
              Eti{" "}
              <span className="italic font-light text-ember">Doğru</span>
              <br />
              Yemek Üzerine.
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-ink-soft leading-relaxed max-w-xl mb-6 sm:mb-8">
              Mengen&apos;den indi aşçılar, ovaya yayıldı ateş. Bu sayfa; bir
              şehrin köz, et ve sabır ile yazdığı tarifin —{" "}
              <em>tarafsız</em> bir okumasıdır.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-ink-muted">
              <span>Editörden</span>
              <span className="w-6 sm:w-8 h-px bg-rule" />
              <span>9 Bölüm</span>
              <span className="w-6 sm:w-8 h-px bg-rule" />
              <span>14 dk okuma</span>
            </div>
          </div>

          {/* Sağ: Görsel (sepia ton, çerçeveli — gazete fotoğrafı hissi) */}
          <div className="md:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden border-2 border-ink">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=85"
                  alt="Köz üzerinde pişen et — Bolu mangal kültürü"
                  fill
                  priority
                  className="object-cover grayscale-[40%] sepia-[10%] contrast-[1.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 42vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
                Foto · Köz başında bir akşam, Bolu
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Alt çizgi + sayfa numarası */}
        <div className="rule-thin mt-12 sm:mt-14 lg:mt-20 pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-muted">
          <span>↓ Editörden devam ediyor</span>
          <span>S. 01</span>
        </div>
      </div>
    </section>
  );
}
