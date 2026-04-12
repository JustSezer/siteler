"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Star } from "lucide-react";

const restaurants = [
  {
    name: "İbrahim'in Yeri",
    type: "Et & Kebap",
    desc: "1989'dan beri Bolu Dağı Bakacak mevkiinde 7/24 açık, odun ateşinde efsanevi et lokantası. Düzce'ye 45 dakika.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80",
    location: "Bolu Dağı",
    link: "https://ibrahiminyerinden.com",
    featured: true,
  },
  {
    name: "Akçakoca Balık Evi",
    type: "Deniz Ürünleri",
    desc: "Sahil şeridinde günlük taze balık. Hamsi tava, levrek ızgara ve karides güveç.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&q=80",
    location: "Akçakoca",
  },
  {
    name: "Yaylacı Kahvaltı Evi",
    type: "Kahvaltı",
    desc: "40 çeşit serpme kahvaltı. Köy tereyağı, kaymak, gözleme ve ev reçelleri.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=700&q=80",
    location: "Merkez",
  },
  {
    name: "Konuralp Sofrası",
    type: "Yöresel",
    desc: "Antik kent yakınında geleneksel Karadeniz mutfağı. Karalahana sarması ve mısır çorbası.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
    location: "Konuralp",
  },
  {
    name: "Fındıklı Cafe",
    type: "Kafe & Tatlı",
    desc: "Düzce fındığıyla hazırlanan özel tatlılar, kahveler ve el yapımı çikolatalar.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80",
    location: "Merkez",
  },
  {
    name: "Dağ Evi Restaurant",
    type: "Et & Mangal",
    desc: "Orman içinde doğayla iç içe mangal keyfi. Kuzu çevirme ve saç kavurma.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&q=80",
    location: "Gölyaka",
  },
  {
    name: "Sahil Meze Evi",
    type: "Meze & Balık",
    desc: "Akçakoca'da deniz manzaralı meze ve rakı sofrası. Ahtapot salatası ve kalamar.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=80",
    location: "Akçakoca",
  },
];

export default function Restaurants() {
  return (
    <section id="mekanlar" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 04</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Mekanlar
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(2rem,5vw,4rem)] font-black text-primary leading-[1] tracking-tight mb-10 sm:mb-16 max-w-3xl"
        >
          Nerede <span className="italic text-secondary font-light">yenir?</span>
        </motion.h2>

        {/* Restaurant list - horizontal cards */}
        <div className="space-y-5">
          {restaurants.map((r, i) => {
            const Wrapper = r.link ? "a" : "div";
            const wrapperProps = r.link
              ? { href: r.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Wrapper {...wrapperProps} className="block">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`group grid grid-cols-12 gap-3 sm:gap-4 lg:gap-8 items-center py-5 sm:py-6 lg:py-8 border-b border-border ${
                      r.featured ? "bg-accent-cream -mx-6 lg:-mx-10 px-6 lg:px-10 border-t-2 border-t-secondary" : ""
                    }`}
                  >
                                <div className="hidden lg:flex col-span-1 items-center">
                      {r.featured ? (
                        <Star className="w-5 h-5 text-secondary fill-secondary" />
                      ) : (
                        <p className="font-serif text-2xl font-black text-foreground-muted/40 group-hover:text-secondary transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                      )}
                    </div>

                    <div className="col-span-5 sm:col-span-4 lg:col-span-3">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${r.image}')` }}
                          role="img"
                          aria-label={r.name}
                        />
                        {r.featured && (
                          <div className="absolute top-2 left-2 bg-secondary text-white text-[9px] uppercase tracking-wider px-2 py-1 font-medium">
                            Özel Öneri
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-span-7 sm:col-span-6 lg:col-span-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-secondary text-[10px] font-medium uppercase tracking-wider">
                          {r.type}
                        </span>
                        <span className="text-border-light">&bull;</span>
                        <span className="flex items-center gap-1 text-foreground-muted text-xs">
                          <MapPin className="w-3 h-3" />
                          {r.location}
                        </span>
                      </div>
                      <h3 className="font-serif text-base sm:text-xl lg:text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 mb-1 sm:mb-1.5 leading-tight">
                        {r.name}
                      </h3>
                      <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {r.desc}
                      </p>
                    </div>

                    <div className="hidden sm:flex col-span-2 lg:col-span-3 justify-end">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                          r.featured
                            ? "border-secondary bg-secondary"
                            : "border-border group-hover:border-secondary group-hover:bg-secondary"
                        }`}
                      >
                        <ExternalLink
                          className={`w-4 h-4 transition-colors ${
                            r.featured ? "text-white" : "text-foreground-muted group-hover:text-white"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
