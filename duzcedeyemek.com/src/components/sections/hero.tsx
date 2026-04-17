"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-background overflow-hidden pt-20">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 min-h-[calc(100svh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full py-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-black text-foreground leading-[1] mb-6"
            >
              Her tabakta
              <br />
              <span className="text-primary">bir </span>
              <span className="relative inline-block">
                <span className="relative z-10">hikaye</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-secondary/30 -z-0 origin-left rounded"
                />
              </span>
              <span className="text-secondary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-foreground-muted text-lg max-w-md leading-relaxed mb-10"
            >
              Düzce&apos;nin beş farklı kültürden gelen sofrası — mamursadan
              isli balığa, Akçakoca sahilinden Kardüz yaylasına.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/duzce-yoresel-yemekleri"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl text-sm font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
              >
                Lezzetleri Keşfet &rarr;
              </Link>
              <Link
                href="/tarifler"
                className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-dark px-7 py-4 rounded-2xl text-sm font-bold hover:bg-secondary/20 transition-colors"
              >
                Tariflere Göz At
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-[440px] lg:h-[540px] hidden md:block"
          >
            <motion.div
              whileHover={{ rotate: "0deg", scale: 1.04 }}
              className="absolute top-0 left-[8%] w-[58%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[-4deg] z-10"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1724079908191-5f7fb8d34c6f?w=500&q=80')" }}
                role="img"
                aria-label="Mısır ekmeği - Düzce yöresel sofra"
              />
            </motion.div>

            <motion.div
              whileHover={{ rotate: "0deg", scale: 1.04 }}
              className="absolute top-[18%] right-0 w-[48%] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[3deg] z-20"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617806501736-fc7cab7c05bf?w=400&q=80')" }}
                role="img"
                aria-label="Börek"
              />
            </motion.div>

            <motion.div
              whileHover={{ rotate: "0deg", scale: 1.04 }}
              className="absolute bottom-0 left-[15%] w-[44%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[2deg] z-15"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?w=400&q=80')" }}
                role="img"
                aria-label="Geleneksel tatlı"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-8 right-8 z-30 bg-card rounded-2xl shadow-xl px-4 py-3 border border-border-light"
            >
              <p className="font-display text-2xl font-black text-primary leading-none">50+</p>
              <p className="text-xs font-bold text-foreground-muted">yöresel lezzet</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
