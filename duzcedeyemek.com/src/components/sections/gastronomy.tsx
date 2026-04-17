"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dishes = [
  { name: "Mamursa", desc: "Mısır unu, su ve yumurtadan Düzce'nin ikonu.", image: "https://images.unsplash.com/photo-1724079908191-5f7fb8d34c6f?w=500&q=80", tag: "Yöresel", tagColor: "bg-tag-green text-tag-green-text", slug: "/blog/mamursa-nedir-tarifi" },
  { name: "İsli Balık", desc: "Akçakoca'nın tütsülenmiş hazinesi.", image: "https://images.unsplash.com/photo-1518602662926-215ebfb0ac61?w=500&q=80", tag: "Deniz", tagColor: "bg-tag-blue text-tag-blue-text", slug: "/blog/isli-balik-akcakoca-tarifi" },
  { name: "Hamsili Börek", desc: "Karadeniz mutfağının Düzce versiyonu.", image: "https://images.unsplash.com/photo-1617806501736-fc7cab7c05bf?w=500&q=80", tag: "Hamur İşi", tagColor: "bg-tag-yellow text-tag-yellow-text", slug: "/blog/hamsili-borek-tarifi" },
  { name: "Melengücceği Tatlısı", desc: "700 yıllık Osmanlı mirası tatlı.", image: "https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?w=500&q=80", tag: "Tatlı", tagColor: "bg-tag-red text-tag-red-text", slug: "/blog/melenguccegi-tatlisi-tarifi" },
  { name: "Boşnak Böreği", desc: "Balkan göçmenlerden miras börek.", image: "https://images.unsplash.com/photo-1540631899529-ee1b535414b9?w=500&q=80", tag: "Göçmen", tagColor: "bg-tag-purple text-tag-purple-text", slug: "/blog/bosnak-boregi-tarifi" },
  { name: "Cevizli Karalahana", desc: "Ceviz ve mısır unu abıstası klasiği.", image: "https://images.unsplash.com/photo-1685504513848-df0dd6893cec?w=500&q=80", tag: "Sebze", tagColor: "bg-tag-green text-tag-green-text", slug: "/blog/cevizli-karalahana-tarifi" },
];

export default function Gastronomy() {
  return (
    <section id="gastronomi" className="py-14 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-foreground leading-[1.05]">
            Düzce<br />sofrası<span className="text-secondary">.</span>
          </h2>
          <p className="text-foreground-muted max-w-sm lg:text-right leading-relaxed">
            Her biri farklı bir kültürden gelen, nesilden nesile aktarılan lezzetler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {dishes.map((dish, i) => {
            const isLarge = i < 2;
            return (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={isLarge ? "col-span-2" : "col-span-1"}
              >
                <Link href={dish.slug} className="group block">
                  <div className={`relative overflow-hidden rounded-2xl ${isLarge ? "aspect-[16/9]" : "aspect-square"}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${dish.image}')` }}
                      role="img"
                      aria-label={dish.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${dish.tagColor}`}>
                        {dish.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                      <h3 className={`font-display font-bold text-white leading-tight ${isLarge ? "text-2xl lg:text-3xl mb-1.5" : "text-lg mb-0.5"}`}>
                        {dish.name}
                      </h3>
                      {isLarge && (
                        <p className="text-white/70 text-sm">{dish.desc}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center lg:text-right">
          <Link
            href="/duzce-yoresel-yemekleri"
            className="text-primary font-bold text-sm hover:underline"
          >
            Tüm lezzetleri gör &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
