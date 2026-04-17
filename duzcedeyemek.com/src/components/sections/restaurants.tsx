"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const restaurants = [
  { name: "Akçakoca Balık Evi", type: "Deniz Ürünleri", desc: "Sahilde günlük taze balık.", image: "https://images.unsplash.com/photo-1568713852801-44dd04bbff05?w=400&q=80", location: "Akçakoca", tagColor: "bg-tag-blue text-tag-blue-text" },
  { name: "Yaylacı Kahvaltı", type: "Kahvaltı", desc: "40 çeşit serpme sofra.", image: "https://images.unsplash.com/photo-1647772809798-f34d785c981c?w=400&q=80", location: "Merkez", tagColor: "bg-tag-yellow text-tag-yellow-text" },
  { name: "İbrahim'in Yeri", type: "Et & Kebap", desc: "Bolu Dağı'nda odun ateşi.", image: "https://static.wixstatic.com/media/1626b5_38a9592421274b7fb76b5aad70260065~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ibrahimin%20yeri%20bolu%20et%20mangal%20restorant.jpeg", location: "Bolu Dağı", tagColor: "bg-tag-red text-tag-red-text" },
  { name: "Konuralp Sofrası", type: "Yöresel", desc: "Antik kent yanında gelenek.", image: "https://images.unsplash.com/photo-1674224199162-7762013f3e7a?w=400&q=80", location: "Konuralp", tagColor: "bg-tag-green text-tag-green-text" },
  { name: "Fındıklı Cafe", type: "Kafe & Tatlı", desc: "Fındıklı özel tatlılar.", image: "https://images.unsplash.com/photo-1603807609292-76af9c0e4b51?w=400&q=80", location: "Merkez", tagColor: "bg-tag-purple text-tag-purple-text" },
  { name: "Dağ Evi Restaurant", type: "Et & Mangal", desc: "Orman içinde mangal.", image: "https://images.unsplash.com/photo-1680967628408-2e01f35b7b3e?w=400&q=80", location: "Gölyaka", tagColor: "bg-tag-green text-tag-green-text" },
];

export default function Restaurants() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="mekanlar" className="py-14 sm:py-20 lg:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-secondary font-bold text-sm mb-2">Mekan Rehberi</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-foreground leading-tight">
              Nerede yenir?
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-card transition-colors" aria-label="Önceki">
              <ChevronLeft className="w-5 h-5 text-foreground-muted" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-card transition-colors" aria-label="Sonraki">
              <ChevronRight className="w-5 h-5 text-foreground-muted" />
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 lg:px-8 pb-4" style={{ scrollbarWidth: "none" }}>
        {restaurants.map((r, i) => (
          <motion.article key={r.name} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] snap-start">
            <div className="bg-card rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${r.image}')` }} role="img" aria-label={r.name} />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold ${r.tagColor}`}>{r.type}</span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-bold text-foreground mb-1">{r.name}</h3>
                <p className="text-foreground-muted text-sm mb-2">{r.desc}</p>
                <span className="flex items-center gap-1 text-xs text-foreground-muted"><MapPin className="w-3 h-3" />{r.location}</span>
              </div>
            </div>
          </motion.article>
        ))}
        <div className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] snap-start">
          <Link href="/duzce-restoranlari" className="bg-primary/5 rounded-2xl border-2 border-dashed border-primary/20 h-full flex flex-col items-center justify-center p-8 hover:bg-primary/10 transition-colors">
            <span className="text-primary font-display text-lg font-bold mb-1">Tüm Mekanlar</span>
            <span className="text-foreground-muted text-sm">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
