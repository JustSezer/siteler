const steps = [
  { n: "01", t: "Başvuru", s: "0–3 gün", d: "Bölge, iletişim ve yatırım kapasitesi formu doldurulur." },
  { n: "02", t: "Görüşme", s: "1–2 hafta", d: "Lokasyon değerlendirmesi, paket detayları ve fizibilite raporu paylaşılır." },
  { n: "03", t: "Üretim", s: "4–6 hafta", d: "Karavan üretimi, ekipman tedariki ve marka kurulumu paralel ilerler." },
  { n: "04", t: "Eğitim", s: "2 hafta", d: "Reçete, operasyon ve kasa eğitimi merkezde ve yerinde verilir." },
  { n: "05", t: "Açılış", s: "1 hafta", d: "Karavan teslim, ilk hafta operasyon mentorluğu, açılış kampanyası." },
];

export default function SurecV3() {
  return (
    <section className="v3-section-warm py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-9">
            <p className="v3-num">№ 05</p>
            <h2 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl mt-3 leading-[0.98] tracking-[-0.02em]">
              Başvurudan açılışa
              <br />
              <span className="italic text-[var(--color-terracotta)]">altı–sekiz hafta.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="v3-eyebrow">Beş aşama · Tek sözleşme</p>
          </div>
        </div>

        <ol className="border-t v3-rule">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group grid grid-cols-12 gap-x-4 gap-y-2 md:gap-10 items-baseline py-7 sm:py-9 md:py-12 border-b v3-rule"
            >
              <span className="col-span-3 sm:col-span-2 md:col-span-1 v3-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-stone-2)] group-hover:text-[var(--color-terracotta)] transition-colors leading-none">
                {s.n}
              </span>
              <div className="col-span-9 sm:col-span-10 md:col-span-3">
                <h3 className="v3-serif text-2xl sm:text-3xl md:text-4xl text-[var(--color-charcoal)] tracking-[-0.015em]">
                  {s.t}
                </h3>
                <span className="md:hidden v3-num mt-1.5 block">{s.s}</span>
              </div>
              <div className="col-span-12 sm:col-span-10 sm:col-start-3 md:col-span-6 md:col-start-auto">
                <p className="v3-sans text-[var(--color-charcoal-3)] text-base md:text-lg leading-relaxed font-light">
                  {s.d}
                </p>
              </div>
              <div className="hidden md:block md:col-span-2 md:text-right">
                <span className="v3-num">{s.s}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
