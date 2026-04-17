"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 1500, suffix: "m", label: "Rakım" },
  { value: 40, suffix: "+", label: "Sofra Lezzeti" },
  { value: 6, suffix: ":42", label: "Gün Doğumu" },
];

export default function About() {
  return (
    <section id="hakkinda" className="relative py-20 sm:py-24 lg:py-32 bg-bone" aria-labelledby="about-heading">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14 sm:mb-20"
        >
          <span className="eyebrow">Hakkında</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="max-w-3xl">
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] text-charcoal tracking-tight"
          >
            Biz <span className="italic text-forest">kimiz?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 space-y-5 text-[15.5px] sm:text-[16px] leading-[1.85] text-ash max-w-xl"
          >
            <p>
              Bu site, Bolu Dağı&apos;nda kahvaltı yapmak isteyenler için
              hazırlanmış bağımsız bir rehberdir. En iyi kahvaltı mekanları,
              yöresel lezzetler, güncel fiyatlar, günübirlik tur rotaları
              ve evde hazırlanabilecek serpme kahvaltı menüleri tek sayfada
              bir araya getirilmiştir.
            </p>
            <p>
              Bakacak, Abant, Mudurnu, Aladağ ve Mengen bölgelerindeki
              mekanlar yerinde incelenerek listelenmiştir.
              İstanbul–Ankara yolu üzerinde kahvaltı molası arayanlar
              için pratik bir başvuru kaynağıdır.
            </p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-0 border-t border-b border-charcoal/80"
          aria-live="polite"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-4 sm:py-6 ${i > 0 ? "border-l border-border pl-3 sm:pl-5" : ""}`}
            >
              <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-forest leading-none">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="eyebrow-mute mt-2 sm:mt-3 text-[9px] sm:text-[11px]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
