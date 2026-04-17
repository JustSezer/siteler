const figures = [
  { n: "30+", k: "Yıl Usta Tarifi" },
  { n: "81", k: "İl Bayilik Hedefi" },
  { n: "6–8", k: "Hafta Açılış" },
  { n: "2", k: "Kişilik Ekip" },
];

export default function FiguresV4() {
  return (
    <section className="v4-section-night py-14 sm:py-18 md:py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="text-center mb-9 md:mb-12">
          <p className="v4-eyebrow !text-[var(--color-mustard)] mb-3">RAKAMLAR — 02</p>
          <h2 className="v4-display-tight text-[var(--color-snow)] text-3xl sm:text-4xl md:text-5xl leading-tight">
            Tek bakışta marka.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {figures.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 md:p-6 text-center border ${
                i === 0
                  ? "bg-[var(--color-tomato)] border-[var(--color-tomato)] text-[var(--color-snow)]"
                  : i === 1
                  ? "bg-[var(--color-mustard)] border-[var(--color-mustard)] text-[var(--color-night)]"
                  : i === 2
                  ? "bg-[var(--color-snow)] border-[var(--color-snow)] text-[var(--color-night)]"
                  : "bg-transparent border-[var(--color-snow)]/25 text-[var(--color-snow)]"
              }`}
            >
              <p className="v4-display-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-[-0.05em]">
                {f.n}
              </p>
              <p className="v4-display text-xs sm:text-sm md:text-base mt-3 md:mt-4 uppercase tracking-wider">
                {f.k}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
