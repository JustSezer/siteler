"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
  { value: 380, suffix: "km", label: "Sahil Şeridi", accent: "text-secondary" },
  { value: 4, suffix: "", label: "Mevsim Turizm", accent: "text-primary" },
  { value: 50, suffix: "+", label: "Yöresel Lezzet", accent: "text-coral" },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="hakkinda" ref={ref} className="py-16 sm:py-20 lg:py-32 bg-background-alt overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 01</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Hakkında
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 mb-10"
          >
            <h2 className="font-serif text-[clamp(2rem,5vw,4.5rem)] font-black text-primary leading-[1] tracking-tight">
              Batı Karadeniz&apos;in
              <br />
              <span className="italic text-secondary font-light">incisi.</span>
            </h2>
          </motion.div>

          {/* Left - image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <div
                className="w-full aspect-[3/4] bg-cover bg-center rounded-sm"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=700&q=80')",
                }}
                role="img"
                aria-label="Düzce doğası"
              />
            </motion.div>

            {/* Stat overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 right-2 sm:-bottom-10 sm:-right-4 lg:-right-10 bg-primary text-white px-5 py-4 sm:px-6 sm:py-5 max-w-[220px] sm:max-w-[260px]"
            >
              <p className="font-serif text-4xl font-black leading-none mb-2">
                <Counter target={2} suffix=".5h" />
              </p>
              <p className="text-white/70 text-xs uppercase tracking-wider">
                İstanbul&apos;dan mesafe
              </p>
            </motion.div>
          </motion.div>

          {/* Right - text + stats */}
          <div className="lg:col-span-7 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 mb-12"
            >
              <p className="text-foreground text-lg lg:text-xl leading-relaxed font-serif italic">
                &ldquo;Denizin ve ormanın buluştuğu, fındık kokulu bir şehir.&rdquo;
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Batı Karadeniz&apos;in incisi Düzce, İstanbul&apos;a sadece 2.5 saat
                mesafede bir doğa ve gastronomi cennetidir. Akçakoca&apos;nın
                bozulmamış sahilleri, Samandere ve Aydınpınar şelaleleri,
                yemyeşil yaylaları ve zengin mutfak kültürüyle her mevsim
                ziyaretçilerini büyüler.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Karadeniz&apos;in taze balığı, yöresel kahvaltı sofraları,
                fındıklı tatlılar ve dağ köylerinin otantik lezzetleri...
                Düzce, keşfedilmeyi bekleyen bir gastronomi hazinesidir.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-3 border-t border-border pt-8"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`${i > 0 ? "border-l border-border pl-3 sm:pl-4 lg:pl-6" : ""}`}
                >
                  <p className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-black ${s.accent} leading-none`}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-foreground-muted text-[11px] uppercase tracking-wider mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
