"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const routes = [
  { name: "Akçakoca Sahili", desc: "Bozulmamış kumsallar, tarihi kale ve sahil restoranları.", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=900&q=80", distance: "40 dk", category: "Deniz & Sahil" },
  { name: "Samandere Şelalesi", desc: "40 metreden dökülen şelale, yürüyüş parkurları.", image: "https://images.unsplash.com/photo-1587491618720-c79922211e02?w=900&q=80", distance: "30 dk", category: "Doğa" },
  { name: "Konuralp Antik Kenti", desc: "Prusias ad Hypium kalıntıları ve Roma tiyatrosu.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Prusias_ad_Hypium_10.jpg", distance: "10 dk", category: "Tarih" },
  { name: "Kardüz Yaylası", desc: "1.600m yükseklikte yayla turizmi ve köy kahvaltısı.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80", distance: "50 dk", category: "Yayla" },
];

export default function Routes() {
  return (
    <section id="rotalar" className="py-14 sm:py-20 lg:py-32 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight">
            Lezzet <span className="text-secondary-light">rotaları</span>
          </h2>
          <p className="text-white/40 max-w-xs lg:text-right text-sm">
            Yemeği doğayla birleştirin. Her durakta yeni bir keşif.
          </p>
        </div>

        <div className="space-y-4">
          {routes.map((route, i) => (
            <motion.div key={route.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[240px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${route.image}')` }} role="img" aria-label={route.name} />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative z-10 h-full flex items-end p-6 lg:p-8">
                <div className="flex-1">
                  <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">{route.category}</p>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white">{route.name}</h3>
                  <p className="text-white/60 text-sm mt-1 hidden sm:block">{route.desc}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/50 shrink-0 ml-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{route.distance}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Günübirlik</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
