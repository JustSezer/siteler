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

export default function About() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-background-alt">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Sol — görsel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522645951282-750282e3b142?w=600&q=80')" }}
              role="img"
              aria-label="Düzce doğası — yeşil orman şelalesi"
            />
          </motion.div>

          {/* Sağ — metin + statlar */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-black text-foreground leading-[1.1] mb-4"
            >
              Beş kültürün buluştuğu <span className="text-primary">sofra</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-foreground-muted leading-relaxed mb-6"
            >
              Çerkez, Abaza, Boşnak, Laz ve Gürcü topluluklar yüzyıllardır
              burada birlikte yaşıyor — her biri sofraya kendi hikayesini bıraktı.
              Batı Karadeniz&apos;in incisi Düzce, İstanbul&apos;a sadece 2.5 saat mesafede.
            </motion.p>

            {/* Kültür etiketleri */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["Çerkez", "Abaza", "Boşnak", "Laz", "Gürcü", "Tatar"].map((c) => (
                <span key={c} className="bg-card px-3 py-1.5 rounded-lg text-xs font-bold text-foreground border border-border-light">
                  {c}
                </span>
              ))}
            </motion.div>

            {/* Statlar — yatay sıra */}
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: 50, suffix: "+", label: "Yöresel Lezzet", color: "text-primary" },
                { value: 5, suffix: "", label: "Farklı Kültür", color: "text-accent" },
                { value: 2, suffix: ".5h", label: "İstanbul Mesafe", color: "text-secondary" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border-light text-center"
                >
                  <p className={`font-display text-2xl lg:text-3xl font-black ${s.color} leading-none mb-1`}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-foreground-muted text-[11px] font-bold">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
