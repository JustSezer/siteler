"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Düzce'nin en meşhur yemekleri nelerdir?", a: "Mamursa, isli balık, hamsili börek, cevizli karalahana, Boşnak böreği, bazlama ve 700 yıllık Melengücceği tatlısı." },
  { q: "Düzce'de kahvaltı nerede yapılır?", a: "Kardüz Yaylası, Gölyaka çevresi ve Düzce merkezdeki serpme kahvaltı mekanları önerilir." },
  { q: "Akçakoca'da balık nerede yenir?", a: "Sahil boyunca sıralanan restoranlarda günlük avlanan hamsi, istavrit ve levrek sunulur." },
  { q: "Düzce'ye nasıl gidilir?", a: "İstanbul'a 2.5 saat, Ankara'ya 3 saat. TEM Otoyolu üzerinde." },
  { q: "Mamursa nedir?", a: "Mısır unu, su ve yumurtadan oluşan geleneksel Düzce yemeği. Saçta pişirilerek sıcak servis edilir." },
  { q: "En iyi ziyaret zamanı?", a: "Her mevsim farklı: yaz sahil, sonbahar fındık hasadı, kış hamsi sezonu, ilkbahar şelaleler." },
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-14 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-foreground leading-tight mb-4">
              Sıkça<br />sorulan<br />sorular<span className="text-secondary">.</span>
            </h2>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Düzce lezzetleri hakkında merak edilen her şey.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${openIndex === i ? "border-primary/20 bg-primary/[0.03]" : "border-border-light bg-card"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                  aria-expanded={openIndex === i}
                >
                  <span className={`font-bold text-sm leading-snug transition-colors ${openIndex === i ? "text-primary" : "text-foreground"}`}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    className="shrink-0 w-7 h-7 rounded-lg bg-background-alt flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-foreground-muted" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-foreground-muted text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
}
