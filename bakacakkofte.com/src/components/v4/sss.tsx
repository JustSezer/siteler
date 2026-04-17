"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Yatırım aralığı ne kadar?",
    a: "Güncel rakamlar; karavan tipi, ekipman paketi ve bölgeye göre farklılık gösterir. Başvurunuz değerlendirildikten sonra kişiye özel fizibilite raporu hazırlanır; sözleşme öncesi tüm kalemler şeffaf paylaşılır.",
  },
  {
    q: "Hangi bölgelerde bayilik veriliyor?",
    a: "Türkiye geneli (81 il) başvurulara açığız. Bölge önceliği trafik yoğunluğu, yerel pazar büyüklüğü ve mevcut karavan dağılımına göre belirlenir.",
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
    q: "Açılış ne kadar sürede olur?",
    a: "Sözleşme imzası sonrası ortalama 6–8 hafta içinde karavan teslim edilir, 2 haftalık operasyon eğitimi tamamlanır ve servise başlanır. Lokasyon iznine göre süre değişebilir.",
  },
  {
    q: "Bayilikten çıkış mümkün mü?",
    a: "Sözleşmede karşılıklı çıkış koşulları tanımlıdır. Karavan transferi veya devri merkez onayıyla mümkündür; sabit restoran kira taahhütlerine kıyasla önemli bir esneklik.",
  },
  {
    q: "Operasyon standartları nasıl korunuyor?",
    a: "Her karavan aynı iç düzen, aynı ekipman ve aynı operasyon kılavuzuyla teslim edilir. Merkez denetim ekibi periyodik saha ziyaretleri yapar; bölgeler arası kalite farkı standartla ortadan kalkar.",
  },
];

export default function SssV4() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="v4-section py-14 sm:py-20 md:py-24 border-t border-[var(--color-line-4)]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="v4-eyebrow mb-3">SIK SORULAN — 08</p>
            <h2 className="v4-display-tight text-[var(--color-night)] text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
              Yatırımcı <span className="italic">soruları.</span>
            </h2>
            <p className="v4-sans text-[var(--color-graphite)] mt-5 text-base leading-relaxed">
              Listede cevabı bulamadığın sorular için iletişim kanallarımızı kullan; ekibimiz
              en geç 24 saat içinde döner.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t-2 border-[var(--color-night)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-[var(--color-night)]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-baseline gap-4 sm:gap-6 flex-1">
                        <span className="v4-display text-sm text-[var(--color-tomato)] shrink-0 w-7">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="v4-display-tight text-lg sm:text-xl md:text-2xl text-[var(--color-night)] leading-snug">
                          {f.q}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-1.5 transition-colors ${
                          isOpen
                            ? "bg-[var(--color-tomato)] border-[var(--color-tomato)] text-[var(--color-snow)]"
                            : "bg-transparent border-[var(--color-night)] text-[var(--color-night)] group-hover:bg-[var(--color-night)] group-hover:text-[var(--color-snow)]"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 pl-11 sm:pl-16 pr-4 sm:pr-12">
                        <p className="v4-sans text-[var(--color-graphite)] text-base leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
