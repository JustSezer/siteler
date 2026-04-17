const figures = [
  { n: "30+", k: "Yıl usta tarifi", sub: "Bolu Dağı · Bakacak ocağı" },
  { n: "81", k: "İl bayilik hedefi", sub: "Türkiye geneli" },
  { n: "08", k: "Çekirdek ürün", sub: "Standart kart" },
  { n: "02", k: "Kişilik ekip", sub: "Kompakt karavan operasyonu" },
  { n: "5'", k: "Servis döngüsü", sub: "Pişim + servis hedefi" },
  { n: "1×1", k: "Standart iç düzen", sub: "Aynı ekipman, aynı akış" },
];

export default function FiguresV3() {
  return (
    <section className="v3-section py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16 md:mb-20">
          <div>
            <p className="v3-num">№ 02</p>
            <h2 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl mt-3 leading-[0.98] tracking-[-0.02em]">
              Marka, doğrulanmış
              <br />
              <span className="italic text-[var(--color-stone)]">ölçütlerle.</span>
            </h2>
          </div>
          <p className="v3-eyebrow hidden md:block">Altı metrik · 2026</p>
        </div>

        <div className="border-t v3-rule grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {figures.map((f, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 md:p-12 border-b v3-rule sm:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r-0 md:[&:not(:nth-child(3n))]:border-r"
            >
              <span className="v3-num absolute top-4 right-4">№ {String(i + 1).padStart(2, "0")}</span>
              <p className="v3-serif text-[var(--color-charcoal)] text-7xl sm:text-8xl md:text-[120px] leading-[0.9] tracking-[-0.03em]">
                {f.n}
              </p>
              <p className="v3-sans text-[var(--color-charcoal)] text-base md:text-lg mt-5 sm:mt-6 font-medium">
                {f.k}
              </p>
              <p className="v3-sans text-sm text-[var(--color-stone)] mt-1.5 leading-relaxed">
                {f.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
