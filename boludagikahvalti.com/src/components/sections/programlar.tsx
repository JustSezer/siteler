"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Compass } from "lucide-react";

const programs = [
  {
    id: "ilk-isik",
    label: "İlk Işık",
    time: "05:30 — 07:00",
    num: "01",
    summary:
      "Gün doğmadan yola çıkıp, sis dağılırken bir dağ köyünde sıcak kahvaltı. En sakin, en otantik tecrübe.",
    schedule: [
      { t: "05:30", d: "Bolu merkezden çıkış, dağa doğru" },
      { t: "06:10", d: "Bakacak Tepesi'nde gün doğumu" },
      { t: "06:30", d: "Köy kahvaltıcısında sıcak kuymak" },
      { t: "07:30", d: "Demli çay ve sis manzarası" },
    ],
    tip: "Hava soğuk olabilir, mont ve sıkı bir atkı şart. Yanına termos da al, dönerken sıcak çay iyi gelir.",
  },
  {
    id: "sis-perdesi",
    label: "Sis Perdesi",
    time: "07:00 — 09:00",
    num: "02",
    summary:
      "En klasik sabah programı. Kahvaltıya ulaşmak için orta yoğunlukta bir saat. Manzara, tat ve sohbet üçlüsü.",
    schedule: [
      { t: "07:00", d: "Yola çıkış" },
      { t: "07:30", d: "İlk durak: köy fırını veya kahvaltıcı" },
      { t: "08:30", d: "Yöresel kahvaltı sofrası" },
      { t: "09:30", d: "Kısa yürüyüş, fotoğraf molası" },
    ],
    tip: "Hafta sonu hareketli, hafta içi sakin. Tek başına bile gidilecek bir program.",
  },
  {
    id: "yayla-kahvalti",
    label: "Yayla Kahvaltısı",
    time: "08:00 — 11:00",
    num: "03",
    summary:
      "Daha uzun, daha kapsamlı bir gün. Aladağ veya Köroğlu yaylalarına kadar uzanıp orada kahvaltı yapmak.",
    schedule: [
      { t: "08:00", d: "Bolu merkezden çıkış" },
      { t: "09:00", d: "Yayla yoluna giriş, ilk mola" },
      { t: "09:30", d: "Köy kahvaltısı (45+ dk)" },
      { t: "10:45", d: "Yayla yürüyüşü, fotoğraf" },
    ],
    tip: "Yol biraz dolambaçlı, navigasyon zorlanabilir. Önceden offline harita indirmek iyi olur.",
  },
  {
    id: "bal-rotasi",
    label: "Bal & Tereyağı Rotası",
    time: "Tam gün",
    num: "04",
    summary:
      "Köy köy gezerek bal, tereyağı, kaymak ve kestane balı satın alma turu. Gastronomik bir gün.",
    schedule: [
      { t: "08:00", d: "İlk durak: Mengen köyleri" },
      { t: "10:30", d: "Geleneksel kahvaltı + alışveriş" },
      { t: "12:30", d: "İkinci durak: Aladağ üreticileri" },
      { t: "15:00", d: "Son durak: Bakacak balcısı" },
    ],
    tip: "Üreticiler nakit tercih ediyor. Sepet ya da çanta götür, balları kırma riskine karşı kapaklı kavanoz iyi olur.",
  },
];

export default function Programlar() {
  const [active, setActive] = useState(0);
  const program = programs[active];

  return (
    <section id="programlar" className="relative py-20 sm:py-24 lg:py-32 bg-charcoal text-bone" aria-labelledby="programlar-heading">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="eyebrow text-ochre-soft">Kahvaltı Programları</span>
          <div className="flex-1 h-px bg-bone/15" />
        </motion.div>

        <motion.h2
          id="programlar-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] tracking-tight mb-6"
        >
          Bolu Dağı&apos;na günübirlik{" "}
          <span className="italic text-ochre-soft">kahvaltı turu nasıl yapılır?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] leading-[1.8] text-bone/70 max-w-xl mb-14 sm:mb-20"
        >
          İstanbul veya Ankara&apos;dan Bolu Dağı&apos;na günübirlik kahvaltı turu
          yaklaşık 2,5 saat sürer. Aşağıda sabah 05:30&apos;dan tam güne kadar
          4 farklı rota programı, saatleri ve durak noktalarıyla verilmiştir.
        </motion.p>

        <div className="grid gap-8 lg:gap-16 lg:grid-cols-[1fr_1.6fr] items-start">
          {/* Sol: program listesi — mobilde yatay scroll */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none" role="tablist" aria-label="Kahvaltı programları">
            {programs.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`program-panel-${p.id}`}
                id={`program-tab-${p.id}`}
                onClick={() => setActive(i)}
                className={`snap-start shrink-0 w-[200px] lg:w-full text-left grid grid-cols-[40px_1fr] lg:grid-cols-[48px_1fr] items-center gap-3 lg:gap-5 px-4 lg:px-5 py-4 lg:py-5 transition-all border-l-2 ${
                  active === i
                    ? "border-ochre bg-bone/5"
                    : "border-bone/10 hover:border-bone/30"
                }`}
              >
                <span
                  className={`font-serif text-2xl lg:text-3xl leading-none transition-colors ${
                    active === i ? "text-ochre" : "text-bone/30"
                  }`}
                >
                  {p.num}
                </span>
                <div>
                  <p
                    className={`font-serif text-base sm:text-xl lg:text-2xl leading-tight mb-1 lg:mb-1.5 transition-colors ${
                      active === i ? "text-bone" : "text-bone/55"
                    }`}
                  >
                    {p.label}
                  </p>
                  <p className="text-[10px] lg:text-[11px] uppercase tracking-[0.16em] text-bone/40 font-medium flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {p.time}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Sağ: aktif program */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={program.id}
                role="tabpanel"
                id={`program-panel-${program.id}`}
                aria-labelledby={`program-tab-${program.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ochre bg-ochre/10 px-3 py-1.5">
                    {program.time}
                  </span>
                  <span className="eyebrow text-ochre-soft">Program {program.num}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-bone leading-tight mb-4 sm:mb-6">
                  {program.label}
                </h3>

                <p className="text-[15px] sm:text-[16px] leading-[1.8] text-bone/75 max-w-xl mb-8">
                  {program.summary}
                </p>

                <div className="pt-6 border-t border-bone/15">
                  <p className="eyebrow text-ochre-soft mb-5 flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5" />
                    Seyahat Akışı
                  </p>
                  <div className="space-y-0">
                    {program.schedule.map((s, i) => (
                      <motion.div
                        key={s.t}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="grid grid-cols-[80px_1fr] gap-4 py-4 border-b border-bone/10"
                      >
                        <span className="font-serif text-xl text-ochre-soft">{s.t}</span>
                        <span className="text-[14.5px] leading-[1.65] text-bone/80">
                          {s.d}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-5 bg-bone/5 border-l-2 border-ochre">
                  <p className="eyebrow text-ochre-soft mb-2">Yol Notu</p>
                  <p className="text-[14px] leading-[1.8] text-bone/80 italic">
                    {program.tip}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
