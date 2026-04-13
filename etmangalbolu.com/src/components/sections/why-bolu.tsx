const reasons = [
  {
    no: "01",
    title: "Coğrafya",
    body: "1.000 metre rakım, serin yaylalar, bol su. Hayvanın hareket alanı geniş; et lifi sıkı, yağ dağılımı dengeli. Bolu eti bu yüksekliğin tadıdır.",
  },
  {
    no: "02",
    title: "Mera",
    body: "Köroğlu eteklerinde otlayan kuzu ve dana, baharda bağ kekiği, yazın sarı çiçek yer. Bu çeşitlilik etin aromasına doğrudan geçer — turnusol kağıdı gibi.",
  },
  {
    no: "03",
    title: "Aşçılık Geleneği",
    body: "Mengen Aşçılık Okulu boşuna burada değil. Bolu, Osmanlı saray mutfağına aşçı yetiştirmiş bir ilçedir. El, ateşi ve eti birbirinden iyi tanır.",
  },
  {
    no: "04",
    title: "Köz Kültürü",
    body: "Bolu&apos;da meşe ve gürgen közü tercih edilir; çam ve kayın değil. Bu seçim eti dumanla değil, ısının saf ritmiyle pişirir. İncelik buradadır.",
  },
];

export default function WhyBolu() {
  return (
    <section id="bolu-eti" className="py-16 sm:py-20 lg:py-32 bg-paper-dark border-y border-rule">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Bölüm başlığı */}
        <div className="rule-thick pt-3 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between flex-wrap gap-2 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
              Bölüm 02 · Saha Notu
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
              Sayfa 02
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mb-12 sm:mb-16">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-ink font-black">
              Bolu eti{" "}
              <em className="italic font-light">neden</em> başka tat verir?
            </h2>
          </div>
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
            <p className="font-body text-base sm:text-lg lg:text-xl text-ink-soft leading-relaxed">
              Cevap dört başlıkta toplanır: coğrafya, mera, aşçılık geleneği ve
              köz kültürü. Hiçbiri tek başına yeterli değildir; dördü bir araya
              gelince Bolu mangalı doğar.
            </p>
          </div>
        </div>

        {/* 4 sütun — numaralı entry */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
          {reasons.map((r) => (
            <article key={r.no} className="bg-paper-dark p-6 sm:p-8 lg:p-10">
              <p className="entry-number text-5xl sm:text-6xl lg:text-7xl text-ember mb-4 sm:mb-6 leading-none">
                {r.no}
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-ink mb-3 sm:mb-4 font-bold">
                {r.title}
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] leading-relaxed text-ink-soft">
                {r.body.replace(/&apos;/g, "'")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
