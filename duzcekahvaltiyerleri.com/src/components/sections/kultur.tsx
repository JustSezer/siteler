"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    num: "01",
    name: "Akçakoca Balığı",
    desc: "Karadeniz'in taze hamsisi, istavrit ve mezgiti. Kıyı köylerinde günlük avlanır, taş fırında sunulur.",
    image: "/images/akcakoca-baligi.jpg",
    tag: "Deniz",
  },
  {
    num: "02",
    name: "Serpme Kahvaltı",
    desc: "40 çeşit Karadeniz kahvaltı sofrası. Köy tereyağı, kaymak, gözleme ve ev reçelleri.",
    image: "/images/serpme-kahvalti-2.jpeg",
    tag: "Klasik",
  },
  {
    num: "03",
    name: "Fındık Lezzetleri",
    desc: "Fındıklı baklava, ezme ve sucuk. Düzce'nin altın yemişinden hazırlanan tarifler.",
    image: "/images/findikli-baklava.jpg",
    tag: "Fındık",
  },
  {
    num: "04",
    name: "Yöresel Et",
    desc: "Dağ köylerinde doğal beslenen hayvanlar. Odun ateşinde kavurma ve tandır.",
    image: "/images/yoresel-et.jpg",
    tag: "Geleneksel",
  },
  {
    num: "05",
    name: "Yöresel Tatlılar",
    desc: "Fındıklı lokum, muhallebi ve pekmezli tatlılar. Düzce'nin tatlı geleneği.",
    image: "/images/ekmek-tatlisi.avif",
    tag: "Tatlı",
  },
];

export default function Gastronomy() {
  return (
    <section id="gastronomi" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 02</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Gastronomi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-black text-primary leading-[1] tracking-tight mb-4">
            Sofranın <span className="italic text-secondary font-light">beş</span> lezzeti.
          </h2>
          <p className="text-foreground-muted text-lg">
            Karadeniz mutfağının en özgün tatları, doğal malzemeler ve nesilden nesile tarifler.
          </p>
        </motion.div>

        {/* Magazine style grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {dishes.map((dish, i) => (
            <motion.article
              key={dish.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-5 aspect-[4/5]">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${dish.image}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  role="img"
                  aria-label={dish.name}
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-foreground font-medium">
                  {dish.tag}
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-serif text-5xl font-black text-white leading-none drop-shadow-lg">
                    {dish.num}
                  </p>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                {dish.name}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {dish.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
