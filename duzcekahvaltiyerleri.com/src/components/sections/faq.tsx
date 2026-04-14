"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Düzce'de en iyi kahvaltı nerede yapılır?",
    a: "Düzce merkezde serpme kahvaltı için Köy Sofram tarzı mekanlar, yayla deneyimi için Kardüz ve Topuk yaylalarındaki sofralar ön plana çıkar. Bolu Dağı Bakacak mevkiinde 45 dk mesafedeki İbrahim'in Yeri 7/24 açık olması ve odun ateşi sunumuyla editörümüzün özel önerisidir.",
  },
  {
    q: "Serpme kahvaltı fiyatları ne kadar?",
    a: "Düzce'de serpme kahvaltı fiyatları mekana ve çeşit sayısına göre değişir. Merkezde ortalama kişi başı uygun fiyatlı seçeneklerden, yayla mekanlarında biraz daha yüksek fiyatlara kadar geniş bir yelpaze vardır. Hafta sonu fiyatları çoğu yerde değişmez.",
  },
  {
    q: "Yayla kahvaltısı için hangi yaylaya gitmeli?",
    a: "Kardüz Yaylası panoramik manzara ve sabah sisleri için ideal; Topuk Yaylası ise Gölyaka üzerinden daha kolay ulaşılır, aileler için uygundur. İkisinde de köy tereyağı, sıcak gözleme ve bal-kaymak standart olarak sunulur.",
  },
  {
    q: "Kahvaltı kaçta açılır, rezervasyon gerekir mi?",
    a: "Mekanların çoğu 07:30-08:00 arasında açılır, 11:30'a kadar kahvaltı servisi verir. Hafta sonu ve tatil dönemlerinde yayla mekanlarında rezervasyon kesinlikle tavsiye edilir. İbrahim'in Yeri gibi 7/24 açık mekanlarda rezervasyona gerek yoktur.",
  },
  {
    q: "Düzce dışından gelenler için en iyi rota nedir?",
    a: "İstanbul'dan gelenler için önerimiz: Düzce merkezde kısa tur, ardından 45 dk sürüşle Bolu Dağı Bakacak'ta İbrahim'in Yeri. Akçakoca yönünde gidecekler ise sahilde balkon kafelerde kahvaltıyı tercih edebilir. TEM Otoyolu üzerinden her iki seçeneğe de kolayca ulaşılır.",
  },
  {
    q: "Çocuklu ailelere uygun mekan var mı?",
    a: "Evet. Bahçeli ve açık alan seçenekleri (Köy Sofram, Doğa Kahvaltı Evi, Topuk Yaylası) çocuklu aileler için idealdir. Çoğunda salıncak, oyun alanı ve çimlik bulunur. Yayla mekanlarında yürüyüş parkurları da çocuklar için ek aktivite sağlar.",
  },
  {
    q: "Vejetaryen/vegan kahvaltı mümkün mü?",
    a: "Serpme kahvaltılar doğaları gereği zaten ağırlıklı olarak vejetaryendir (peynir, reçel, zeytin, bal, sebze, yumurta). Vegan için; zeytin, sebze, reçel, ekmek ve gözleme çeşitleriyle sınırlı ama tatmin edici bir seçim sunulabilir. Ön bildirim yararlı olur.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-16 sm:py-20 lg:py-32 bg-background-alt">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 08</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            SSS
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(2rem,5vw,4rem)] font-black text-primary leading-[1] tracking-tight mb-10 sm:mb-16"
        >
          Sıkça sorulan
          <br />
          <span className="italic text-secondary font-light">sorular.</span>
        </motion.h2>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between py-7 text-left gap-6 group"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-start gap-6 flex-1">
                  <span className="font-serif text-secondary text-sm font-bold mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif text-lg lg:text-xl font-medium leading-snug transition-colors ${
                      openIndex === i ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {faq.q}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary text-3xl font-light leading-none shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-14 text-foreground-muted leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
}
