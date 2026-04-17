"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Bolu Dağı'nda kahvaltı nerede yapılır?",
    a: "Bolu Dağı'nda kahvaltı yapılacak en iyi yerler: Bakacak mevkii (İbrahim'in Yeri, Bakacak Manzara), Abant Gölü çevresi (Çamlık Sofrası), Mudurnu yolu (Sis Dağ Kahvaltıcısı), Aladağ köyleri (Yayla Kahvesi) ve Mengen ilçesidir. Toplam 7 aktif mekan 2026 itibarıyla hizmet vermektedir.",
  },
  {
    q: "Bolu Dağı kahvaltı fiyatları 2026'da ne kadar?",
    a: "2026 yılında Bolu Dağı'nda kişi başı serpme kahvaltı fiyatı 250–450 TL arasında değişmektedir. Köy kahvaltıcılarında fiyatlar 200–300 TL, Bakacak mevkiindeki mekanlarda 300–450 TL seviyesindedir. Çocuklar genellikle yarı fiyat uygulanır.",
  },
  {
    q: "Kuymak nedir ve nasıl yapılır?",
    a: "Kuymak (muhlama), Bolu ve Karadeniz yöresine ait geleneksel bir kahvaltılıktır. Yapılışı: bakır tencerede 2 yemek kaşığı tereyağı eritilir, 2 yemek kaşığı mısır unu eklenerek kavrulur, üzerine 200 gram taze kaşar peyniri rendelenir ve kıvam alana kadar 10–15 dakika karıştırılır. Üstüne erimiş tereyağı dökülerek sıcak servis edilir.",
  },
  {
    q: "İstanbul'dan Bolu Dağı'na kahvaltıya nasıl gidilir?",
    a: "İstanbul'dan Bolu Dağı'na TEM Otoyolu (O-4) üzerinden araçla 2,5–3 saat sürer. Toplam mesafe yaklaşık 260 km'dir. Ankara'dan da TEM ile 2,5 saat uzaklıktadır. Bakacak mevkii otoyol çıkışından 10 dakika, Abant ise 25 dakika mesafededir. Toplu taşıma sınırlı olduğu için kendi aracınızla gitmeniz önerilir.",
  },
  {
    q: "Bolu Dağı'nda kahvaltı için en iyi saat hangisi?",
    a: "Bolu Dağı'nda kahvaltı için en iyi saat dilimi sabah 06:30–09:00 arasıdır. Bu saatlerde mekanlar sakin, malzemeler taze ve dağda sis manzarası en güzel halindedir. Hafta sonları 08:00'den sonra kalabalık olur; erken gitmek tavsiye edilir.",
  },
  {
    q: "Bolu Dağı'nda hangi mevsim kahvaltı yapılır?",
    a: "Bolu Dağı'nda 12 ay kahvaltı yapılabilir. Kış aylarında (Kasım–Mart) kar manzarası eşliğinde şömineli mekanlar tercih edilir. Yaz aylarında (Haziran–Ağustos) açık hava ve yayla kahvaltısı popülerdir. Sonbaharda yaprak dökümü ve sis, ilkbaharda yeşil dağ manzarası ön plandadır.",
  },
  {
    q: "Bolu kestane balı nereden alınır?",
    a: "Bolu kestane balı en güvenilir şekilde Bakacak mevkii ve Mudurnu yol kenarındaki köy üreticilerinden alınır. Mengen köyleri de önemli bir bal üretim merkezidir. 2026 fiyatı 1 kg kestane balı için 600–900 TL arasındadır. Kahvaltıcılar da genellikle kendi üretim ballarını satışa sunar.",
  },
  {
    q: "Bolu Dağı'na çocukla kahvaltıya gidilebilir mi?",
    a: "Evet, Bolu Dağı'ndaki kahvaltı mekanlarının çoğu çocuk dostudur. Özellikle Aladağ köy kahvaltıcıları geniş açık alana sahiptir. Bakacak mevkiindeki mekanlar da aileler için uygundur. Hafta içi sabah erken saatlerde gitmek hem sakinlik hem çocuklar için daha konforlu bir deneyim sağlar.",
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
    <section id="sss" className="relative py-20 sm:py-24 lg:py-32 bg-bone-warm" aria-labelledby="faq-heading">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="eyebrow">Sık Sorulanlar</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-charcoal tracking-tight mb-12 sm:mb-16"
        >
          Bolu Dağı kahvaltısı hakkında
          <br />
          <span className="italic text-forest">sık sorulan sorular</span>
        </motion.h2>

        <div className="border-t border-charcoal/80">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between py-6 sm:py-7 text-left gap-5 group"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <div className="flex items-start gap-5 sm:gap-6 flex-1 min-w-0">
                  <span className="font-serif text-2xl sm:text-3xl text-ochre leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif text-lg sm:text-xl lg:text-2xl leading-snug transition-colors ${
                      openIndex === i ? "text-forest" : "text-charcoal group-hover:text-forest"
                    }`}
                  >
                    {faq.q}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-forest font-serif text-3xl leading-none shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-12 sm:pl-16 text-[15px] leading-[1.85] text-ash max-w-2xl">
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
