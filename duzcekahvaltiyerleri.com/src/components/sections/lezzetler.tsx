"use client";

import { motion } from "framer-motion";

const items = [
  {
    num: "A",
    name: "Köy Tereyağı",
    desc: "Dağ köylerinde günlük çıkarılan, tuzsuz ve tertemiz tereyağı. Sahanda yumurtanın olmazsa olmazı.",
  },
  {
    num: "B",
    name: "Taze Kaymak",
    desc: "Sıcak sütün üzerinden alınan, kıvamlı manda kaymağı. Bal ile birlikte kahvaltının yıldızı.",
  },
  {
    num: "C",
    name: "Petekli Orman Balı",
    desc: "Kestane ve çam çiçeği balı. Ahşap tahtada petek olarak servis edilir.",
  },
  {
    num: "D",
    name: "Köy Yumurtası",
    desc: "Serbest dolaşan tavuk yumurtası; portakal sarısı, zengin lezzet. Tava, sahan ya da menemen.",
  },
  {
    num: "E",
    name: "Tandır Ekmeği",
    desc: "Taş fırın veya tandırda odun ateşinde pişen, ince kabuk, yumuşak iç yapılı köy ekmeği.",
  },
  {
    num: "F",
    name: "Ev Reçelleri",
    desc: "Ayva, incir, kestane, karadut ve gül reçeli. Şeker değil, meyvenin öz lezzeti.",
  },
  {
    num: "G",
    name: "Sıcak Gözleme",
    desc: "Sac üstünde, anında açılıp pişirilen peynirli, ıspanaklı, patatesli gözleme çeşitleri.",
  },
  {
    num: "H",
    name: "Çay Demliği",
    desc: "Odun sobasında kaynamış, bol demli, açık renkli Karadeniz çayı. Bardakta servis edilir.",
  },
];

export default function Lezzetler() {
  return (
    <section id="lezzetler" className="py-16 sm:py-20 lg:py-32 bg-background-alt">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 05</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Yöresel Lezzetler
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
            Sofrada <span className="italic text-secondary font-light">ne var?</span>
          </h2>
          <p className="text-foreground-muted text-lg">
            İyi bir Düzce kahvaltısında ne olmalı? İşte sofranın olmazsa olmaz sekiz yıldızı.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 lg:p-8 border-r border-b border-border bg-background hover:bg-accent-cream transition-colors duration-300 group"
            >
              <p className="font-serif text-5xl font-black text-secondary/30 leading-none mb-4 group-hover:text-secondary transition-colors">
                {it.num}
              </p>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                {it.name}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
