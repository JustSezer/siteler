"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Bolu Dağı nerede, nasıl gidilir?",
    answer:
      "Bolu Dağı, Türkiye'nin Batı Karadeniz Bölgesi'nde yer alır. İstanbul'dan TEM otoyolu üzerinden yaklaşık 3 saat, Ankara'dan ise 2.5 saat mesafededir. Otobüs veya özel araçla kolayca ulaşabilirsiniz.",
  },
  {
    question: "Bolu Dağı'nı ziyaret etmek için en iyi zaman ne zaman?",
    answer:
      "Dört mevsim farklı güzellikler sunar. Kış aylarında Kartalkaya'da kayak, yaz aylarında trekking ve kamp, sonbaharda Yedigöller'de fotoğraf çekimi, ilkbaharda ise doğa yürüyüşü için idealdir.",
  },
  {
    question: "Kartalkaya kayak sezonu ne zaman başlıyor?",
    answer:
      "Kartalkaya kayak sezonu genellikle Aralık ortasından Mart sonuna kadar sürer. 22 pist ve 2.200 metre zirve yüksekliğine sahiptir. En iyi kar koşulları Ocak ve Şubat aylarında yaşanır.",
  },
  {
    question: "Abant Gölü'ne giriş ücreti var mı?",
    answer:
      "Evet, Abant Gölü Tabiat Parkı'na araç başına giriş ücreti uygulanmaktadır. Güncel ücretler mevsime göre değişebilir. Yaya girişi daha uygun fiyatlıdır.",
  },
  {
    question: "Bolu'da nerede yemek yenir?",
    answer:
      "Bolu, Türkiye'nin aşçılar diyarı olarak bilinir. Bolu kebabı, Mengen mutfağı, Abant alabalığı ve dağ mantısı başta gelen lezzetlerdir. Şehir merkezindeki yerel lokantalar ve Abant göl kenarı restoranları önerilir.",
  },
  {
    question: "Yedigöller Milli Parkı'na nasıl gidilir?",
    answer:
      "Yedigöller, Bolu merkezden yaklaşık 42 km uzaklıktadır. Dağ yolundan yaklaşık 1 saat sürer. Özel araçla gitmek en pratik seçenektir. Hafta sonları yoğunluk olabilir, hafta içi tercih edin.",
  },
  {
    question: "Bolu'da konaklama seçenekleri neler?",
    answer:
      "Kartalkaya'da lüks kayak otelleri, Abant Gölü kenarında doğa tesisleri, şehir merkezinde bütçe dostu oteller ve orman içinde butik dağ evleri-bungalovlar bulunmaktadır. Her bütçeye uygun seçenekler mevcuttur.",
  },
  {
    question: "Bolu Dağı'nda kamp yapılabilir mi?",
    answer:
      "Evet, Yedigöller Milli Parkı, Abant çevresi ve Seben Gölü civarında belirlenmiş kamp alanları bulunmaktadır. İzin almak ve ateş kurallarına uymak gerekmektedir. En iyi kamp dönemi Haziran-Eylül arasıdır.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sıkça Sorulan Sorular"
          subtitle="Bolu Dağı hakkında merak edilenler"
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground text-base leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQPage JSON-LD - Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
