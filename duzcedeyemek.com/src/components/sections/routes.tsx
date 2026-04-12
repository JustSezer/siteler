"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const routes = [
  {
    num: "A",
    name: "Akçakoca Sahili",
    desc: "Karadeniz'in bozulmamış kumsalları, tarihi kalesi ve deniz manzaralı restoranları. Taze balık ve günbatımı bir arada.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1000&q=80",
    distance: "40 dk",
    category: "Deniz & Sahil",
  },
  {
    num: "B",
    name: "Samandere Şelalesi",
    desc: "40 metreden dökülen muhteşem şelale. Çevresindeki yürüyüş parkurları ve piknik alanları ile günübirlik kaçamak.",
    image: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=1000&q=80",
    distance: "30 dk",
    category: "Doğa & Şelale",
  },
  {
    num: "C",
    name: "Konuralp Antik Kenti",
    desc: "Prusias ad Hypium antik şehri kalıntıları, Roma dönemi tiyatrosu ve müzesi. Tarih ve kültür meraklıları için.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Prusias_ad_Hypium_10.jpg",
    distance: "10 dk",
    category: "Tarih & Kültür",
  },
  {
    num: "D",
    name: "Kardüz Yaylası",
    desc: "1.600 metre rakımda yayla turizmi, çadır kampı ve yöresel köy kahvaltısı. Yazın serin, kışın karlı.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80",
    distance: "50 dk",
    category: "Yayla & Kamp",
  },
];

export default function Routes() {
  const [active, setActive] = useState(0);
  const route = routes[active];

  return (
    <section id="rotalar" className="py-16 sm:py-20 lg:py-32 bg-primary text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 03</span>
          <div className="h-px flex-1 bg-white/20" />
          <p className="text-white/60 text-xs uppercase tracking-[0.25em]">
            Gezi Rotaları
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(2rem,5vw,4rem)] font-black leading-[1] tracking-tight mb-10 sm:mb-16"
        >
          Dört rota,
          <br />
          <span className="italic text-secondary font-light">sonsuz keşif.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left - route list */}
          <div className="lg:col-span-5">
            <div className="space-y-1">
              {routes.map((r, i) => (
                <motion.button
                  key={r.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-4 sm:py-5 lg:py-6 border-t border-white/10 flex items-start gap-4 sm:gap-6 transition-all duration-300 group ${
                    active === i ? "pl-3 sm:pl-4" : "hover:pl-2"
                  }`}
                >
                  <span
                    className={`font-serif text-3xl font-black leading-none transition-colors ${
                      active === i ? "text-secondary" : "text-white/30 group-hover:text-white/50"
                    }`}
                  >
                    {r.num}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`font-serif text-xl lg:text-2xl font-bold transition-colors ${
                        active === i ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {r.name}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs">
                      <span
                        className={`transition-colors ${active === i ? "text-secondary" : "text-white/30"}`}
                      >
                        {r.category}
                      </span>
                      <span className="text-white/20">&bull;</span>
                      <span className="text-white/40">{r.distance}</span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 mt-1 transition-all ${
                      active === i
                        ? "text-secondary rotate-0"
                        : "text-white/20 -rotate-45 group-hover:text-white/40"
                    }`}
                  />
                </motion.button>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>

          {/* Right - active image */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={route.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${route.image}')` }}
                    role="img"
                    aria-label={route.name}
                  />

                  {/* Big number */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-6 right-6 font-serif text-8xl font-black text-white drop-shadow-2xl leading-none"
                  >
                    {route.num}
                  </motion.p>

                  {/* Caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 lg:p-8"
                  >
                    <div className="flex items-center gap-3 text-xs text-white/60 mb-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Düzce&apos;den {route.distance}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        Günübirlik
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
                      {route.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                      {route.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
