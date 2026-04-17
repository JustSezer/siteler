const faqs = [
  {
    q: "Yatırım aralığı ne kadar?",
    a: "Güncel rakamlar karavan tipi, ekipman paketi ve bölgeye göre farklılık gösterir. Başvurunuz değerlendirildikten sonra kişiye özel fizibilite raporu hazırlanır; sözleşme öncesi tüm kalemler şeffaf paylaşılır.",
  },
  {
    q: "Hangi bölgelerde bayilik veriliyor?",
    a: "Türkiye geneli başvurulara açığız. Bölge önceliği trafik yoğunluğu, yerel pazar büyüklüğü ve mevcut karavan dağılımına göre belirlenir. Listede olmayan şehirler de değerlendirilir.",
  },
  {
    q: "İşletme tecrübesi şart mı?",
    a: "Zorunlu değildir. Gastronomi veya operasyon geçmişi tercih sebebidir; ancak sıfırdan başlamak isteyen yatırımcılar için 2 haftalık kapsamlı eğitim programımız mevcuttur.",
  },
  {
    q: "Karavan mülkiyeti bayide mi, markada mı?",
    a: "Sözleşme modeline göre değişir. Satın alma veya kiralama/leasing seçenekleri birlikte değerlendirilir; yatırım kapasitenize göre en uygun yol belirlenir.",
  },
  {
    q: "Aylık royalty nasıl hesaplanıyor?",
    a: "Royalty yapısı cironun belirli bir yüzdesi olarak uygulanır; oran ve minimum tutar başvuru sonrası paylaşılan kişiye özel raporda detaylandırılır.",
  },
  {
    q: "Operasyon standartları nasıl korunuyor?",
    a: "Her karavan aynı iç düzen, aynı ekipman ve aynı operasyon kılavuzuyla teslim edilir. Merkez denetim ekibi periyodik saha ziyaretleri yapar; bölgeler arası kalite farkı standartla ortadan kalkar.",
  },
  {
    q: "Açılış ne kadar sürede olur?",
    a: "Sözleşme imzası sonrası ortalama 6-8 hafta içinde karavan teslim edilir, 2 haftalık operasyon eğitimi tamamlanır ve servise başlanır. Lokasyon iznine göre süre değişebilir.",
  },
  {
    q: "Bayilikten çıkış mümkün mü?",
    a: "Sözleşmede karşılıklı çıkış koşulları tanımlıdır. Karavan transferi veya devri merkez onayıyla mümkündür; sabit restoran kira taahhütlerine kıyasla önemli bir esneklik.",
  },
];

export default function SSS() {
  return (
    <section className="relative bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-3">Yatırımcı SSS</p>
            <h2 className="display-font text-ink leading-[1.05] text-[36px] md:text-[56px]">
              En çok sorulan
              <span className="block text-red">sekiz soru.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink-soft text-lg leading-[1.7]">
              Başvuru ve sözleşme sürecine dair kritik konular. Listede cevabı bulamadığın
              sorular için iletişim kanallarını kullan.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="group card px-6 py-5 cursor-pointer">
              <summary className="flex items-center gap-4 list-none">
                <span className="mono-font text-xs text-red font-bold min-w-[1.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display-font text-base md:text-lg text-ink flex-1 leading-tight">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="flex items-center justify-center w-7 h-7 rounded-full border border-ink/20 text-red group-open:rotate-45 transition-transform shrink-0"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pt-4 border-t border-dashed border-ink/15 text-ink-soft leading-[1.7] text-sm">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
