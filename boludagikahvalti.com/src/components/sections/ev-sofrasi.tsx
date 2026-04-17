"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock } from "lucide-react";

const menus = [
  {
    id: "minik",
    label: "İkili Sabah",
    serves: "2 kişi",
    time: "30 dk hazırlık",
    desc: "Sevdiğinle sakin bir hafta sonu sabahı. Az iş, çok lezzet.",
    items: [
      { name: "Köy Tereyağında Tereyağlı Göz", note: "iki yumurta" },
      { name: "Sıcak Sac Ekmeği", note: "köy fırınından" },
      { name: "Beyaz Peynir + Salamura Zeytin", note: "küçük tabakta" },
      { name: "Kestane Balı + Kaymak", note: "ortak ikram" },
      { name: "Demli Çay", note: "ince belli bardakta" },
    ],
  },
  {
    id: "aile",
    label: "Aile Sofrası",
    serves: "4-6 kişi",
    time: "60 dk hazırlık",
    desc: "Pazar günleri bütün ailenin masaya toplandığı sıcaklık. Yavaş ve bol.",
    items: [
      { name: "Kuymak", note: "merkez tabak" },
      { name: "Sac Gözleme", note: "peynirli ve patatesli" },
      { name: "Köy Yumurtası", note: "haşlanmış ya da menemen" },
      { name: "Beyaz / Kaşar / Tulum Peyniri", note: "üç çeşit tabağı" },
      { name: "Reçel Çeşitleri", note: "kayısı, çilek, dut" },
      { name: "Bal & Kaymak + Tereyağı", note: "ayrı tabaklar" },
      { name: "Domates, Salatalık, Yeşil Soğan", note: "taze sebze" },
      { name: "Demli Çay", note: "iki demlik dolusu" },
    ],
  },
  {
    id: "yolda",
    label: "Yolda Sofrası",
    serves: "Çantada",
    time: "10 dk hazırlık",
    desc: "Sabah erken yola çıkacaklar için: arabada ya da manzaralı bir mola noktasında açıp yiyebileceğin paket.",
    items: [
      { name: "Sıcak Termosta Çay", note: "büyük termos" },
      { name: "Haşlanmış Yumurta", note: "iki adet, pul biber" },
      { name: "Peynirli Sıcak Açma", note: "fırından çıkmış" },
      { name: "Bal Sürülmüş Bayat Ekmek", note: "sandviç gibi" },
      { name: "Ceviz İçi + Kuru Üzüm", note: "küçük poşette" },
    ],
  },
  {
    id: "kis",
    label: "Kış Sabahı",
    serves: "3-4 kişi",
    time: "45 dk hazırlık",
    desc: "Camlar buğulu, dışarısı kar, içerisi yangın gibi. Soğuk sabahları besleyen menü.",
    items: [
      { name: "Tarhana Çorbası", note: "küçük kâselerde" },
      { name: "Kuymak", note: "bol tereyağlı" },
      { name: "Sıcak Pide veya Açma", note: "fırından" },
      { name: "Sucuklu Yumurta", note: "demir tavada" },
      { name: "Reçel + Bal + Tereyağı", note: "üçleme" },
      { name: "Tarçınlı Salep ya da Demli Çay", note: "tercihe göre" },
    ],
  },
];

export default function EvSofrasi() {
  const [active, setActive] = useState(1);
  const menu = menus[active];

  return (
    <section id="ev-sofrasi" className="relative py-20 sm:py-24 lg:py-32 bg-bone-warm" aria-labelledby="ev-sofrasi-heading">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="eyebrow">Evde Sofra</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          id="ev-sofrasi-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-charcoal tracking-tight max-w-3xl"
        >
          Evde Bolu usulü serpme kahvaltı{" "}
          <span className="italic text-forest">nasıl hazırlanır?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-[16px] sm:text-[17px] leading-[1.8] text-ash max-w-xl mb-12 sm:mb-16"
        >
          Evde Bolu usulü serpme kahvaltı hazırlamak için 2 kişiden
          6 kişiye kadar 4 farklı menü aşağıda listelenmiştir. Her
          menüde malzeme listesi, kişi sayısı ve hazırlık süresi yer alır.
        </motion.p>

        {/* Sekmeler */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-y border-charcoal/80 mb-8 sm:mb-14" role="tablist" aria-label="Menü seçenekleri">
          {menus.map((m, i) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`menu-panel-${m.id}`}
              id={`menu-tab-${m.id}`}
              onClick={() => setActive(i)}
              className={`py-4 sm:py-6 px-3 sm:px-4 text-left transition-all relative ${
                i < menus.length - 1 ? "border-r border-border" : ""
              } ${i >= 2 ? "border-t sm:border-t-0 border-border" : ""} ${active === i ? "bg-bone" : "hover:bg-bone/60"}`}
            >
              <p
                className={`font-serif text-base sm:text-xl lg:text-2xl leading-tight transition-colors ${
                  active === i ? "text-forest" : "text-charcoal"
                }`}
              >
                {m.label}
              </p>
              <p className="eyebrow-mute mt-1 sm:mt-2 text-[9px] sm:text-[11px]">{m.serves}</p>
              {active === i && (
                <motion.span
                  layoutId="menu-active"
                  className="absolute left-4 right-4 bottom-0 h-0.5 bg-forest"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={menu.id}
            role="tabpanel"
            id={`menu-panel-${menu.id}`}
            aria-labelledby={`menu-tab-${menu.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-5 mb-6">
              <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-mist font-medium">
                <Users className="w-3 h-3" />
                {menu.serves}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-mist font-medium">
                <Clock className="w-3 h-3" />
                {menu.time}
              </span>
            </div>

            <p className="font-serif italic text-xl sm:text-2xl text-charcoal leading-snug mb-10 max-w-xl">
              {menu.desc}
            </p>

            <p className="eyebrow mb-5">Sofranın İçeriği</p>
            <ul className="border-t border-charcoal/80 max-w-2xl">
              {menu.items.map((it, i) => (
                <motion.li
                  key={it.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-baseline justify-between gap-4 py-4 border-b border-border"
                >
                  <span className="flex items-baseline gap-3 flex-1 min-w-0">
                    <span className="text-[11px] text-ochre font-semibold tracking-wider shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-charcoal font-medium leading-snug">
                      {it.name}
                    </span>
                  </span>
                  <span className="text-[13px] text-ash italic shrink-0">
                    {it.note}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
