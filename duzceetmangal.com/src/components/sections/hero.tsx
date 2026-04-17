import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-24 smoke-grain">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        {/* Üst defter barı */}
        <div className="rule-dashed pt-3 mb-8 sm:mb-10 lg:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-charcoal-soft">
            <span className="font-semibold">Düzce Et Mangal Rehberi</span>
            <span className="hidden sm:inline">
              Bağımsız Gastronomi · Düzce
            </span>
            <span>Defter 01 · 2026</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-end">
          {/* Sol: Manşet metni */}
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-forest mb-5 sm:mb-6">
              Kapak Notu · Meşe Közü Üzerine
            </p>

            <h1 className="font-display text-[36px] xs:text-[42px] sm:text-[54px] md:text-[52px] lg:text-[78px] xl:text-[88px] leading-[0.92] tracking-[-0.025em] text-charcoal font-bold mb-6 sm:mb-8">
              Düzce&apos;de
              <br />
              Meşe{" "}
              <span className="italic font-normal text-forest">Közünde</span>
              <br />
              Et Mangal.
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-charcoal-soft leading-relaxed max-w-xl mb-6 sm:mb-8">
              Bakacak&apos;tan yükselen meşe dumanı, D100&apos;ün iki
              yakasına yayılmış ocaklar. Bu sayfa; yolun kenarında, közün
              başında yazılmış bir defterin — <em>ilk sayfası</em>.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-charcoal-muted">
              <span>Yolcunun Notu</span>
              <span className="w-6 sm:w-8 h-px bg-bark" />
              <span>6 Durak</span>
              <span className="w-6 sm:w-8 h-px bg-bark" />
              <span>10 dk okuma</span>
            </div>
          </div>

          {/* Sağ: Görsel — yeşil tonlu, yumuşak köşeli */}
          <div className="md:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg border border-bark-soft">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=85"
                  alt="Közde pişen et ve sebzeler — Düzce mangal kültürü"
                  fill
                  priority
                  className="object-cover saturate-[0.85] contrast-[1.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 42vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-forest/5" />
              </div>
              <figcaption className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-charcoal-muted">
                Foto · Meşe közü başında bir akşam, Bakacak
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Alt çizgi + not numarası */}
        <div className="rule-thin mt-12 sm:mt-14 lg:mt-20 pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-charcoal-muted">
          <span>↓ Yolcunun notu devam ediyor</span>
          <span>N. 01</span>
        </div>
      </div>
    </section>
  );
}
