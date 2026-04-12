"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const seasons = [
  {
    id: "ilkbahar",
    label: "İlkbahar",
    months: "Mar — May",
    num: "03",
    activities: ["Şelale yürüyüşleri", "Yayla pikniği", "Fındık bahçesi", "Kuş gözlemi"],
    foods: ["Taze ot yemekleri", "Keşkek", "Bahar salatası", "Mevsim balığı"],
    tip: "Samandere ve Aydınpınar şelaleleri ilkbaharda en coşkulu dönemlerini yaşar.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=80",
  },
  {
    id: "yaz",
    label: "Yaz",
    months: "Haz — Ağu",
    num: "06",
    activities: ["Akçakoca plajları", "Yayla kampı", "Su sporları", "Festival dönemi"],
    foods: ["Taze balık", "Mangal keyfi", "Dondurma", "Meyve tatlıları"],
    tip: "Akçakoca yaz aylarında canlı ama kalabalık değil. Ağustos'ta fındık hasadı var.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=900&q=80",
  },
  {
    id: "sonbahar",
    label: "Sonbahar",
    months: "Eyl — Kas",
    num: "09",
    activities: ["Fındık hasadı", "Orman yürüyüşü", "Fotoğraf turu", "Kültür rotası"],
    foods: ["Fındık tatlıları", "Kestane kebabı", "Mantar yemekleri", "Pekmezli tatlılar"],
    tip: "Sonbahar renkleri Düzce ormanlarında inanılmaz manzaralar oluşturur.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=900&q=80",
  },
  {
    id: "kis",
    label: "Kış",
    months: "Ara — Şub",
    num: "12",
    activities: ["Kartalkaya kayak", "Termal tesisler", "Kış yürüyüşü", "Müze gezisi"],
    foods: ["Karalahana çorbası", "Kuyu kebabı", "Tandır", "Kış kompostosu"],
    tip: "Kış aylarında Kartalkaya + Bolu et lokantaları kombinasyonu harika.",
    image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=900&q=80",
  },
];

export default function Seasonal() {
  const [active, setActive] = useState(1);
  const season = seasons[active];

  return (
    <section id="takvim" className="py-16 sm:py-20 lg:py-32 bg-background-alt">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 05</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Takvim
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(2rem,5vw,4rem)] font-black text-primary leading-[1] tracking-tight mb-10 sm:mb-16 max-w-3xl"
        >
          Ne zaman <span className="italic text-secondary font-light">gidilir?</span>
        </motion.h2>

        {/* Season nav */}
        <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 border-b border-border mb-10 sm:mb-12">
          {seasons.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className={`py-3 sm:py-4 lg:py-6 text-left relative transition-colors duration-300 ${
                active === i ? "text-primary" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              <p className="font-serif text-[10px] sm:text-xs text-foreground-muted mb-0.5 sm:mb-1">{s.num}</p>
              <p className={`font-serif text-sm sm:text-lg lg:text-2xl font-bold ${active === i ? "text-primary" : ""}`}>
                {s.label}
              </p>
              <p className="hidden sm:block text-[10px] uppercase tracking-wider text-foreground-muted/60 mt-1">
                {s.months}
              </p>
              {active === i && (
                <motion.div
                  layoutId="season-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Season content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={season.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-10"
          >
            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${season.image}')` }}
                  role="img"
                  aria-label={season.label}
                />
                <div className="absolute top-6 left-6 bg-background px-4 py-2">
                  <p className="font-serif text-sm font-bold text-primary">{season.label}</p>
                  <p className="text-foreground-muted text-[10px] uppercase tracking-wider">
                    {season.months}
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-secondary text-[10px] uppercase tracking-[0.2em] font-medium mb-3">
                  Aktiviteler
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {season.activities.map((a, i) => (
                    <motion.p
                      key={a}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-foreground text-sm py-1 border-b border-border-light"
                    >
                      {a}
                    </motion.p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-secondary text-[10px] uppercase tracking-[0.2em] font-medium mb-3">
                  Ne Yenir?
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {season.foods.map((f, i) => (
                    <motion.p
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-foreground text-sm py-1 border-b border-border-light"
                    >
                      {f}
                    </motion.p>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-primary text-white p-5 border-l-4 border-secondary"
              >
                <p className="text-secondary text-[10px] uppercase tracking-wider font-medium mb-2">
                  İpucu
                </p>
                <p className="text-white/90 text-sm leading-relaxed">{season.tip}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
