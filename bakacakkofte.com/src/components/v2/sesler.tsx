const reviews = [
  {
    text: "Yolda 3 saat sonra gördüğüm karavan tam anlamıyla kurtardı. Köfte taptaze, ayran öz. Buradan geçip uğramayan kaybeder.",
    who: "Mola veren sürücü",
    where: "D100 · Bolu Dağı geçişi",
  },
  {
    text: "Kampüsün önünde kurulan karavanın müdavimiyim. 10 dakikada köfte hazır, ayran yanında — hem doyuruyor hem otantik kalıyor.",
    who: "Üniversite öğrencisi",
    where: "Yerleşke girişi",
  },
  {
    text: "Etkinlik alanının en kalabalık durağı Bakacak Köfte karavanıydı. Köz kokusu uzaktan davet ediyor, servis inanılmaz hızlı.",
    who: "Festival ziyaretçisi",
    where: "Açık hava etkinliği",
  },
];

export default function SeslerV2() {
  return (
    <section className="v2-section py-20 sm:py-28 md:py-44 border-t v2-rule">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div>
            <p className="v2-num">№ 08 — Sesler</p>
            <h2 className="v2-display text-[var(--color-paper)] text-3xl sm:text-4xl md:text-6xl mt-3 sm:mt-4 leading-[0.95] tracking-[-0.03em]">
              Köz başında
              <br />
              <span className="text-[var(--color-ember)] italic font-normal">sohbet.</span>
            </h2>
          </div>
          <p className="v2-label hidden md:block">Saha izlenimleri · 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-line)] border v2-rule">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-[var(--color-coal)] p-6 sm:p-8 md:p-10 flex flex-col">
              <span className="v2-num mb-4 sm:mb-6">№ 0{i + 1}</span>
              <blockquote className="v2-display text-[var(--color-paper)] text-lg sm:text-xl md:text-2xl leading-snug tracking-[-0.015em] flex-1">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t v2-rule">
                <p className="v2-display text-[var(--color-paper)] text-sm">{r.who}</p>
                <p className="v2-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] mt-1.5">
                  {r.where}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
