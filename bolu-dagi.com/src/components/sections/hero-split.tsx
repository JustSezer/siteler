"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const topClip = useTransform(scrollYProgress, [0, 0.6], [50, 0]);
  const bottomClip = useTransform(scrollYProgress, [0, 0.6], [50, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Top half of image */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            clipPath: useTransform(
              topClip,
              (v) => `inset(0 0 ${100 - v}% 0)`
            ),
          }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')`,
              scale,
            }}
          />
        </motion.div>

        {/* Bottom half of image */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            clipPath: useTransform(
              bottomClip,
              (v) => `inset(${v}% 0 0 0)`
            ),
          }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')`,
              scale,
            }}
          />
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 z-20 bg-black/50"
          style={{ opacity: overlayOpacity }}
        />


        {/* Content behind the split */}
        <div className="absolute inset-0 z-0 bg-primary-dark" />

        {/* Hero text overlay */}
        <motion.div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-secondary-light text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-4">
              Keşfet / Yaşa / Hatırla
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
              Bolu Dağı
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light mt-2 text-white/80">
                Rehberi
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Türkiye&apos;nin en etkileyici doğal güzelliklerinden biri olan Bolu
              Dağı&apos;nı tüm detaylarıyla keşfedin.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#gezilecek-yerler"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all duration-300 hover:scale-105"
              >
                Keşfetmeye Başla
              </a>
              <a
                href="#hakkinda"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Daha Fazla
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          style={{ opacity: textOpacity }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white/50 text-sm tracking-widest uppercase">
            Aşağı Kaydır
          </span>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
