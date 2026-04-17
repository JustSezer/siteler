const adimlar = [
  {
    no: "01",
    title: "Kömür Seçimi",
    desc: "Meşe kömürü tercih edin. Hazır kömüre göre daha yavaş yanar, daha düzgün ısı dağıtır ve ete tütsümsü aroma verir. Düzce'nin meşe ormanlarından gelen kömür en kalitelisidir.",
  },
  {
    no: "02",
    title: "Közleşme",
    desc: "Kömürler tamamen közleşmeli, alev sönmüş olmalı. Közün üzerine elinizi tuttuğunuzda 3 saniye dayanabiliyorsanız ızgara için hazırdır. Alevli közde et yakar, közleşmiş kömür pişirir.",
  },
  {
    no: "03",
    title: "Et Hazırlığı",
    desc: "Eti buzdolabından en az 30 dakika önce çıkarın — oda sıcaklığına gelmeli. Kuzu pirzolaya sadece tuz ve karabiber yeterli. Köfte harcını en az 2 saat dinlendirin.",
  },
  {
    no: "04",
    title: "Mühürleme",
    desc: "Eti önce yüksek közde 1-2 dakika her yüzünde mühürleyin. Bu adım suyu içeride tutar. Sonra ızgarayı yükselterek veya közü yayarak düşük ısıda pişirmeye devam edin.",
  },
  {
    no: "05",
    title: "Dinlendirme",
    desc: "Pişen eti hemen kesmeyin. 3-5 dakika alüminyum folyo altında dinlendirin. Bu sürede etinin suları tekrar dağılır ve her lokma eşit sulu olur. Mangalcıların en çok unuttuğu adım budur.",
  },
];

export default function PisirmeRehberi() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-[780px] mb-10 sm:mb-14">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-forest mb-4">
            Durak 04 · Pişirme Rehberi
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Meşe Közünde Et Nasıl Pişirilir?
          </h2>
          <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed">
            Bakacak ustalarından öğrendiğimiz 5 temel adım. Mangalda mükemmel
            et pişirmenin sırrı sabır ve doğru teknikte.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-0">
          {adimlar.map((a, i) => (
            <div
              key={i}
              className={`relative p-5 sm:p-6 ${
                i < adimlar.length - 1
                  ? "md:border-r border-b md:border-b-0 border-dashed border-bark-soft"
                  : ""
              }`}
            >
              <span className="durak-number text-4xl text-forest/20 block mb-3">
                {a.no}
              </span>
              <h3 className="font-display text-base sm:text-lg font-semibold text-charcoal mb-2">
                {a.title}
              </h3>
              <p className="font-body text-sm text-charcoal-muted leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
