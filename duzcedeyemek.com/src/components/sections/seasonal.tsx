"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const seasons = [
  { id: "ilkbahar", label: "İlkbahar", months: "Mar-May", foods: ["Taze ot yemekleri", "Keşkek", "Bahar salatası", "Mevsim balığı"], tip: "Samandere şelalesi en coşkulu dönemini yaşar.", image: "https://images.unsplash.com/photo-1587491618720-c79922211e02?w=800&q=80" },
  { id: "yaz", label: "Yaz", months: "Haz-Ağu", foods: ["Taze balık", "Mangal", "Dondurma", "Meyve tatlıları"], tip: "Akçakoca plajları ve Ağustos fındık hasadı.", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&q=80" },
  { id: "sonbahar", label: "Sonbahar", months: "Eyl-Kas", foods: ["Fındık tatlıları", "Kestane", "Mantar yemekleri"], tip: "Orman yürüyüşleri ve fındık hasadı dönemi.", image: "https://images.unsplash.com/photo-1614061809888-742a1c965106?w=800&q=80" },
  { id: "kis", label: "Kış", months: "Ara-Şub", foods: ["Karalahana çorbası", "Hamsi tava", "Tandır", "Komposto"], tip: "Kartalkaya kayak + sıcak çorbalar kombinasyonu.", image: "https://images.unsplash.com/photo-1568713852801-44dd04bbff05?w=800&q=80" },
];

export default function Seasonal() {
  const [active, setActive] = useState(1);
  const season = seasons[active];

  return (
    <section id="takvim" className="py-14 sm:py-20 lg:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-foreground leading-tight">
            Ne zaman gidilir?
          </h2>

          <div className="flex gap-1 bg-card rounded-xl p-1 border border-border-light w-fit">
            {seasons.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  active === i
                    ? "bg-primary text-white"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={season.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            <div className="sm:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${season.image}')` }}
                role="img"
                aria-label={season.label}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">{season.months}</p>
                <h3 className="font-display text-2xl font-bold text-white">{season.label}</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-2xl p-5 border border-border-light">
                <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Ne Yenir?</p>
                <div className="flex flex-wrap gap-2">
                  {season.foods.map((f) => (
                    <span key={f} className="bg-background-alt px-3 py-1.5 rounded-lg text-xs font-bold text-foreground">{f}</span>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">İpucu</p>
                <p className="text-foreground-muted text-sm leading-relaxed">{season.tip}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
