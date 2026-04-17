"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Star } from "lucide-react";

const places = [
  {
    name: "İbrahim'in Yeri",
    type: "Kahvaltı & Et",
    desc: "1989'dan bu yana Bolu Dağı Bakacak mevkiinde 7/24 açık. Sabah erken saatlerde sis dağılırken sıcak gözleme, köy tereyağı ve odun ateşinde kavurma. Dağın klasiklerinden.",
    location: "Bakacak, Bolu Dağı",
    link: "https://ibrahiminyeri.com",
    featured: true,
  },
  {
    name: "Sis Dağ Kahvaltıcısı",
    type: "Kahvaltı",
    desc: "Mudurnu yolu üzerinde, ormanın içinden bir patikayla ulaşılan ahşap kulübe. 30 çeşit serpme kahvaltı.",
    location: "Mudurnu Yolu",
  },
  {
    name: "Abant Çamlık Sofrası",
    type: "Manzaralı Kahvaltı",
    desc: "Abant Gölü'nün üst tarafında, çam ormanları arasında. Sabah sisinde gölün üstüne süzülen güneşi izleyerek kuymak.",
    location: "Abant",
  },
  {
    name: "Yayla Kahvesi",
    type: "Köy Kahvaltısı",
    desc: "Aladağ köylerinden birinde, bir aile evinin avlusuna kurulmuş tahta masalar. Sütü taze, gözlemeyi sayıyla yiyebileceğin yer.",
    location: "Aladağ Köyleri",
  },
  {
    name: "Köroğlu Sabah Evi",
    type: "Kahvaltı",
    desc: "Köroğlu Dağları eteklerinde, taş duvarlı küçük bir mekan. Mevsimsel reçeller, ev yapımı yoğurt ve odun fırınında pişen ekmek.",
    location: "Köroğlu",
  },
  {
    name: "Bakacak Manzara",
    type: "Sabah Kahvaltısı",
    desc: "Bolu Dağı'nın en yüksek görüş noktalarından birinde. Bulutların altında kahvaltı yapma deneyimi.",
    location: "Bakacak Tepesi",
  },
  {
    name: "Mengen Köy Sofrası",
    type: "Yöresel Kahvaltı",
    desc: "Türkiye'nin aşçılar yetiştiren ilçesinden bir aile işletmesi. Mengen yöresinin az bilinen kahvaltılıkları.",
    location: "Mengen",
  },
];

export default function Mekanlar() {
  return (
    <section id="mekanlar" className="relative py-20 sm:py-24 lg:py-32 bg-bone" aria-labelledby="mekanlar-heading">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="eyebrow">Önerilen Mekanlar</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          id="mekanlar-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-charcoal tracking-tight max-w-3xl"
        >
          Bolu Dağı&apos;nda kahvaltı{" "}
          <span className="italic text-forest">nerede yapılır?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-[16px] sm:text-[17px] leading-[1.8] text-ash max-w-xl mb-14 sm:mb-20"
        >
          Bolu Dağı&apos;nda kahvaltı yapılacak en iyi yerler Bakacak mevkii,
          Abant Gölü çevresi, Mudurnu yolu, Aladağ köyleri ve Mengen
          ilçesidir. Aşağıda 2026 yılı itibarıyla aktif olan 7 mekan,
          konumları ve özellikleriyle listelenmiştir.
        </motion.p>

        <div className="border-t border-charcoal/80">
          {places.map((p, i) => {
            const isLink = !!p.link;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                {isLink ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} web sitesine git`}
                    className="block"
                  >
                    <MekanRow p={p} i={i} />
                  </a>
                ) : (
                  <MekanRow p={p} i={i} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MekanRow({ p, i }: { p: typeof places[number]; i: number }) {
  return (
    <article
      className={`group py-6 sm:py-8 border-b border-border transition-colors ${
        p.featured ? "bg-forest/5 -mx-5 sm:-mx-8 px-5 sm:px-8" : "hover:bg-bone-warm"
      }`}
    >
      {/* Üst satır: numara + isim + badge */}
      <div className="flex items-center gap-3 sm:gap-4 mb-2">
        <span className="font-serif italic text-xl sm:text-3xl text-forest/30 leading-none shrink-0">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3
          className={`font-serif text-lg sm:text-2xl leading-tight transition-colors ${
            p.featured
              ? "text-forest group-hover:text-ochre"
              : "text-charcoal group-hover:text-forest"
          }`}
        >
          {p.name}
        </h3>
        {p.featured && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-ochre bg-ochre/10 px-2 py-0.5 shrink-0">
            <Star className="w-2.5 h-2.5 fill-ochre" />
            Editör Seçimi
          </span>
        )}
      </div>

      {/* Mobilde badge ayrı satırda */}
      {p.featured && (
        <span className="sm:hidden inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-ochre bg-ochre/10 px-2 py-0.5 ml-8 mb-2">
          <Star className="w-2.5 h-2.5 fill-ochre" />
          Editör Seçimi
        </span>
      )}

      {/* Meta bilgi */}
      <div className="flex items-center gap-3 ml-8 sm:ml-12 mb-2">
        <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-ochre">
          {p.type}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-mist">
          <MapPin className="w-3 h-3" />
          {p.location}
        </span>
      </div>

      {/* Açıklama */}
      <p className="text-[13px] sm:text-[14px] leading-[1.7] text-ash ml-8 sm:ml-12 max-w-2xl">
        {p.desc}
      </p>

      {/* Link */}
      {p.link && (
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] font-semibold text-forest group-hover:text-ochre transition-colors ml-8 sm:ml-12 mt-3">
          Mekana git
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      )}
    </article>
  );
}
