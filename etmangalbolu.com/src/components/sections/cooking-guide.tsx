const lessons = [
  {
    no: "I",
    title: "Kuzu Pirzola",
    sub: "Sıcaklık, süre ve dokunmamak",
    body: "Pirzolayı buzdolabından çıkar; en az 30 dakika tezgahta beklet. Köz beyaz kül tutana kadar oturt — alev üzerinde değil, közün ısısında pişer. İlk yüzde dokunma; kabuk oluşmadan çevirirsen suyunu kaybeder. Toplam süre kalınlığa göre 4–6 dakika.",
  },
  {
    no: "II",
    title: "Dana Antrikot",
    sub: "Yağ, ateş ve dinlenme",
    body: "Antrikotun yağı pişirir; tuzu önceden değil, közün üstüne koyduğun an serp. Yüksek ateşte iki yüzü mühürle, sonra yan kenara çek. İçi 54–56 derecede dur. Tabağa aldıktan sonra en az 5 dakika dinlendir; suyu içine yerleşir.",
  },
  {
    no: "III",
    title: "Şiş & Kanat",
    sub: "Marine etmek değil, doğru kesmek",
    body: "Et şişe takılmadan önce ipliğine dik kesilmeli — yemekte yumuşaklığı bu belirler. Kanatta deri tarafı önce közü görmeli; yağ közün altına damlayıp tütsü kokusu vermesin. Marine, etin tadını gizler; sade tuz yeter.",
  },
  {
    no: "IV",
    title: "Kömür Seçimi",
    sub: "Meşe, gürgen — çam değil",
    body: "Köz için meşe veya gürgen kullan. Çam ve kayın reçineli yanar, ete is bırakır. Brikettten kaçın; kimyasal bağlayıcılar koku verir. İyi kömür beyaz kül tuttuğunda hazırdır; alev varsa bekle.",
  },
];

export default function CookingGuide() {
  return (
    <section id="pisirme" className="py-16 sm:py-20 lg:py-32 bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Bölüm başlığı */}
        <div className="rule-thick pt-3 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between flex-wrap gap-2 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
              Bölüm 04 · Et & Ateş Rehberi
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
              Sayfa 04
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mb-12 sm:mb-16">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[60px] leading-[1.05] tracking-tight text-ink font-black">
              Dört <em className="italic font-light">küçük</em> ders.
            </h2>
          </div>
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            <p className="font-body text-base lg:text-lg text-ink-soft leading-relaxed">
              Mangal yakacaklar için kısa notlar. Hiçbiri yeni bilgi değil;
              hepsi sık unutulan eski bilgi.
            </p>
          </div>
        </div>

        {/* 2x2 ders grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
          {lessons.map((l) => (
            <article key={l.no} className="bg-paper p-6 sm:p-8 lg:p-12">
              <div className="flex items-baseline gap-4 sm:gap-5 mb-5 sm:mb-6">
                <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-ember font-black italic leading-none">
                  {l.no}
                </p>
                <div className="rule-thin pt-2 flex-1 min-w-0">
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted truncate">
                    {l.sub}
                  </p>
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] text-ink font-bold mb-4 sm:mb-5 leading-tight">
                {l.title}
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] leading-[1.7] sm:leading-[1.75] text-ink-soft">
                {l.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
