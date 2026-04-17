const figures = [
  { n: "30+", k: "Yıl usta tarifi", sub: "Bolu Dağı · Bakacak ocağı" },
  { n: "81", k: "İl franchise hedefi", sub: "Türkiye geneli" },
  { n: "08", k: "Çekirdek ürün", sub: "İmza · Izgara · Çorba · İçecek" },
  { n: "02", k: "Kişilik ekip", sub: "Kompakt karavan operasyonu" },
  { n: "05'", k: "Dk servis döngüsü", sub: "Pişim + servis hedefi" },
  { n: "1×1", k: "Standart iç düzen", sub: "Aynı ekipman, aynı akış" },
];

export default function FiguresV2() {
  return (
    <section className="v2-section py-20 sm:py-28 md:py-44 border-t v2-rule">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-24">
          <div>
            <p className="v2-num">№ 03 — Rakamlar</p>
            <h2 className="v2-display text-[var(--color-paper)] text-3xl sm:text-4xl md:text-6xl mt-3 sm:mt-4 leading-[0.95]">
              Marka, doğrulanmış
              <br />
              <span className="text-[var(--color-fog-2)]">ölçütlerle.</span>
            </h2>
          </div>
          <p className="v2-label hidden md:block">06 metrik · 2026 tablosu</p>
        </div>

        <div className="border-t v2-rule grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {figures.map((f, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 md:p-12 border-b v2-rule sm:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r-0 md:[&:not(:nth-child(3n))]:border-r"
            >
              <span className="v2-num absolute top-4 right-4">№ {String(i + 1).padStart(2, "0")}</span>
              <p className="v2-display text-[var(--color-paper)] text-6xl sm:text-7xl md:text-[112px] leading-[0.9] tracking-[-0.04em]">
                {f.n}
              </p>
              <p className="v2-display text-[var(--color-paper)] text-base md:text-lg mt-4 sm:mt-6">{f.k}</p>
              <p className="v2-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-fog)] mt-2">
                {f.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
