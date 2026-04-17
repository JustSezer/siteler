const steps = [
  { n: "01", t: "Başvuru", s: "0–3 gün", d: "Bölge, iletişim ve yatırım kapasitesi formu doldurulur." },
  { n: "02", t: "Görüşme", s: "1–2 hafta", d: "Lokasyon değerlendirmesi, paket detayları ve fizibilite raporu paylaşılır." },
  { n: "03", t: "Üretim", s: "4–6 hafta", d: "Karavan üretimi, ekipman tedariki ve marka kurulumu paralel ilerler." },
  { n: "04", t: "Eğitim", s: "2 hafta", d: "Reçete, operasyon ve kasa eğitimi merkezde ve yerinde verilir." },
  { n: "05", t: "Açılış", s: "1 hafta", d: "Karavan teslim, ilk hafta operasyon mentorluğu, açılış kampanyası." },
];

export default function SurecV4() {
  return (
    <section className="v4-section-butter py-14 sm:py-20 md:py-24 border-y-2 border-[var(--color-night)]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="v4-eyebrow mb-3">SÜREÇ — 05</p>
          <h2 className="v4-display-tight text-[var(--color-night)] text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Başvurudan açılışa
            <br />
            <span className="italic">altı–sekiz hafta.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`v4-card p-4 sm:p-5 ${
                i === 1 ? "bg-[var(--color-tomato)] text-[var(--color-snow)]" :
                i === 3 ? "bg-[var(--color-mustard)]" :
                "bg-[var(--color-snow)]"
              }`}
            >
              <p
                className={`v4-display-tight text-5xl ${
                  i === 1 ? "text-[var(--color-snow)]/80" :
                  i === 3 ? "text-[var(--color-night)]/40" :
                  "text-[var(--color-tomato)]"
                }`}
              >
                {s.n}
              </p>
              <h3 className="v4-display-tight text-xl sm:text-2xl mt-4 leading-tight">{s.t}</h3>
              <p className={`v4-sans text-sm mt-2 ${
                i === 1 ? "text-[var(--color-snow)]/85" :
                i === 3 ? "text-[var(--color-night)]/75" :
                "text-[var(--color-graphite)]"
              }`}>
                {s.d}
              </p>
              <p
                className={`v4-display text-xs uppercase tracking-wider mt-5 inline-block px-2.5 py-1 rounded-full ${
                  i === 1 ? "bg-[var(--color-snow)]/15 text-[var(--color-snow)]" :
                  i === 3 ? "bg-[var(--color-night)]/10 text-[var(--color-night)]" :
                  "bg-[var(--color-butter)] text-[var(--color-tomato)]"
                }`}
              >
                {s.s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
