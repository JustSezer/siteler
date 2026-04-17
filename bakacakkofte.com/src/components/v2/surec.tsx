const steps = [
  { n: "01", t: "Başvuru", s: "0–3 gün", d: "Bölge, iletişim ve yatırım kapasitesi formu doldurulur." },
  { n: "02", t: "Görüşme", s: "1–2 hafta", d: "Lokasyon değerlendirmesi, paket detayları ve fizibilite raporu." },
  { n: "03", t: "Üretim", s: "4–6 hafta", d: "Karavan üretimi, ekipman tedariki ve marka kurulumu." },
  { n: "04", t: "Eğitim", s: "2 hafta", d: "Reçete, operasyon ve kasa eğitimi merkezde + yerinde." },
  { n: "05", t: "Açılış", s: "1 hafta", d: "Karavan teslim, ilk hafta operasyon mentorluğu, açılış kampanyası." },
];

export default function SurecV2() {
  return (
    <section className="v2-section py-20 sm:py-28 md:py-44 border-t v2-rule">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 sm:mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-9">
            <p className="v2-num">№ 06 — Süreç</p>
            <h2 className="v2-display text-[var(--color-paper)] text-3xl sm:text-4xl md:text-6xl mt-3 sm:mt-4 leading-[0.95] tracking-[-0.03em]">
              Başvurudan açılışa
              <br />
              <span className="text-[var(--color-fog-2)]">6–8 hafta.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="v2-label">Beş aşama · Tek sözleşme</p>
          </div>
        </div>

        <ol className="border-t v2-rule">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group grid grid-cols-12 gap-x-4 gap-y-2 md:gap-10 items-start py-6 sm:py-8 md:py-12 border-b v2-rule"
            >
              <span className="col-span-3 sm:col-span-2 md:col-span-1 v2-display text-3xl sm:text-4xl md:text-5xl text-[var(--color-fog)] group-hover:text-[var(--color-ember)] transition-colors leading-none">
                {s.n}
              </span>
              <div className="col-span-9 sm:col-span-10 md:col-span-3">
                <h3 className="v2-display text-2xl sm:text-3xl md:text-4xl text-[var(--color-paper)] tracking-[-0.02em]">
                  {s.t}
                </h3>
                <span className="md:hidden v2-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-ember)] mt-1 block">
                  {s.s}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-10 sm:col-start-3 md:col-span-6 md:col-start-auto">
                <p className="text-[var(--color-paper)]/75 text-sm sm:text-base md:text-lg leading-relaxed">
                  {s.d}
                </p>
              </div>
              <div className="hidden md:block md:col-span-2 md:text-right">
                <span className="v2-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)]">
                  {s.s}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
