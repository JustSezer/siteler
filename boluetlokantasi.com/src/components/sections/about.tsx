"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target }: { target: number }) {
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

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 100, suffix: "+", label: "Et Lokantası" },
  { value: 50, suffix: "+", label: "Yıllık Gelenek" },
  { value: 35, suffix: "+", label: "Yıllık Festival" },
];

export default function About() {
  return (
    <section id="hakkinda" className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Full-width image band */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-16 lg:mb-24"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&q=80')",
            }}
            role="img"
            aria-label="Bolu et kültürü"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Overlapping text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl"
            >
              Aşçılar diyarında
              <br />
              <span className="text-secondary">et bir sanattır.</span>
            </motion.p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-foreground-muted text-lg leading-[1.8]">
              Bolu, Osmanlı İmparatorluğu döneminden bu yana Türkiye&apos;nin
              gastronomi başkenti olarak anılır. Mengen ilçesinden yetişen
              aşçılar, imparatorluğun saray mutfaklarından modern restoranlarına
              kadar her yerde iz bırakmıştır.
            </p>
            <p className="text-foreground-muted leading-[1.8]">
              Doğal otlaklarda yetişen hayvanların eti, meşe ve kayın odunlarının
              közünde saatlerce pişirilerek hazırlanan tarifler nesilden nesile
              aktarılır. Her ustanın kendine özgü dokunuşu, her lokantanın kendi
              hikayesi vardır.
            </p>
            <p className="text-foreground-muted leading-[1.8]">
              Bolu Dağı&apos;nın Bakacak mevkiindeki efsanevi lokantalardan
              şehir merkezindeki modern steakhouse&apos;lara kadar, bu topraklarda
              et yemek bir öğün değil, bir deneyimdir.
            </p>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex lg:flex-col gap-8 lg:gap-10 lg:pl-10 lg:border-l lg:border-border"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                <p className="text-5xl lg:text-6xl font-serif font-bold text-foreground">
                  <Counter target={stat.value} />
                  <span className="text-primary">{stat.suffix}</span>
                </p>
                <p className="text-foreground-muted text-sm mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
