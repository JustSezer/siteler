"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Düzce'ye nasıl gidilir?",
    a: "Düzce, İstanbul'a 2.5 saat, Ankara'ya 3 saat mesafede TEM Otoyolu üzerindedir. Düzce otobüs terminali şehirlerarası otobüs seferleri alır. En yakın havalimanı Bolu-Düzce havalimanıdır.",
  },
  {
    q: "Akçakoca'ya nasıl ulaşılır?",
    a: "Akçakoca, Düzce merkezine 40 dakika mesafededir. Düzce'den minibüs ve otobüs seferleri mevcuttur. Kendi aracınızla gitmeniz tavsiye edilir, çünkü sahil boyunca birçok gizli koy ve plaj keşfetmeniz mümkün.",
  },
  {
    q: "En iyi ziyaret zamanı ne zaman?",
    a: "Düzce her mevsim ziyaret edilebilir. Yaz ayları (Haziran-Ağustos) sahil ve yayla aktiviteleri için ideal. Sonbahar fındık hasadı ve orman yürüyüşleri için mükemmel. Kış aylarında yakındaki Kartalkaya kayak merkezi bonus.",
  },
  {
    q: "Düzce'de nerede kalınır?",
    a: "Düzce merkezde butik oteller ve iş otelleri bulunur. Akçakoca'da sahil kenarında pansiyonlar ve apart oteller mevcuttur. Yaylalarda ise bungalov ve kamp alanları tercih edilebilir.",
  },
  {
    q: "Düzce'de mutlaka ne yenmeli?",
    a: "Akçakoca'da taze balık (özellikle hamsi ve istavrit), Düzce kahvaltısı (serpme, 30-40 çeşit), fındıklı tatlılar, karalahana çorbası ve yöresel gözleme mutlaka denenmeli. Bolu Dağı'na 45 dk mesafedeki İbrahim'in Yeri de et için harika bir opsiyon.",
  },
  {
    q: "Düzce'den Bolu'ya ne kadar?",
    a: "Düzce-Bolu arası TEM Otoyolu üzerinden yaklaşık 45 dakikadır. Bolu Dağı Bakacak mevkiindeki et lokantaları (İbrahim'in Yeri 7/24 açık) Düzce ziyaretinize harika bir ek olur.",
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
          <span className="font-serif text-secondary text-3xl italic">§ 07</span>
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
