"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Bolu'da en iyi et lokantası hangisi?",
    answer:
      "İbrahim'in Yeri, 1989'dan beri Bolu Dağı Bakacak mevkiinde odun ateşinde yöresel et pişirmesiyle öne çıkar. 7/24 açıktır. Köroğlu Et Mangal ve Abant Et Lokantası da güçlü alternatiflerdir.",
  },
  {
    question: "Bolu kebabı nedir?",
    answer:
      "Kuzu etinin özel baharatlarla marine edilip meşe/kayın odunu ateşinde uzun süre yavaş pişirilmesiyle hazırlanan geleneksel Bolu lezzeti. Karakteristik is aromasını odundan alır.",
  },
  {
    question: "Bolu Dağı'nda hangi lokantalar var?",
    answer:
      "Bakacak mevkiinde İbrahim'in Yeri ve Uçar Et Mangal en köklü mekanlardır. Her ikisi de 1989'dan beri hizmet verir. İstanbul-Ankara yolculuklarında ideal mola noktasıdır.",
  },
  {
    question: "7/24 açık et lokantası var mı?",
    answer:
      "Evet, Bakacak'taki İbrahim'in Yeri 7 gün 24 saat açıktır. Gece yolculuğu yapan sürücüler için ideal.",
  },
  {
    question: "Fiyatlar nasıl?",
    answer:
      "Büyükşehirlere kıyasla uygun. Kişi başı 200-500 TL arası. Paşaköy Et Lokantası ekonomik, Bolu Et Evi premium segmentte.",
  },
  {
    question: "Bolu'ya nasıl gidilir?",
    answer:
      "İstanbul'a 3 saat, Ankara'ya 2.5 saat. TEM Otoyolu üzerinde. Bolu Dağı geçişinde Bakacak'ta mola vermek gelenektir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-24 lg:py-32 bg-background">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <SectionHeading title="SSS" />

        <div className="space-y-0 divide-y divide-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between py-7 text-left gap-8 group"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-start gap-5">
                  <span className="text-foreground-muted/30 font-serif text-lg font-bold shrink-0 mt-0.5 group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-medium text-lg transition-colors duration-300 ${
                      openIndex === i ? "text-primary" : "text-foreground group-hover:text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-foreground-muted text-2xl font-light shrink-0 leading-none mt-0.5"
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
                    <div className="pb-7 pl-10 lg:pl-[52px] text-foreground-muted leading-relaxed max-w-lg">
                      {faq.answer}
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
