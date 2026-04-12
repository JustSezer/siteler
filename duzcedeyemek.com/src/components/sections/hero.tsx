"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-background overflow-hidden pt-20 lg:pt-20">
      {/* Mobile background image */}
      <div className="lg:hidden absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80')",
          }}
        />
      </div>
      {/* Decorative corner elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-24 left-10 hidden lg:block"
      >
        <p className="text-foreground-muted text-[11px] uppercase tracking-[0.3em] writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
          Est. 2026 &mdash; Karadeniz
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute top-24 right-10 hidden lg:flex flex-col items-end gap-2"
      >
        <div className="w-px h-16 bg-secondary" />
        <p className="text-[11px] uppercase tracking-[0.2em] text-foreground-muted">Rehber № 01</p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full min-h-[calc(100svh-160px)] flex flex-col justify-center pb-20 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left - main text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-secondary" />
              <p className="text-secondary text-xs uppercase tracking-[0.25em] font-medium">
                Gastronomi &amp; Turizm
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(2.5rem,10vw,8rem)] font-black text-primary leading-[0.9] mb-2 tracking-tight"
            >
              Yeşilin
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(3rem,9vw,8rem)] font-black text-foreground leading-[0.9] mb-2 tracking-tight"
            >
              ve <span className="italic text-secondary font-light">mavinin</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(3rem,9vw,8rem)] font-black text-primary leading-[0.9] mb-10 tracking-tight"
            >
              şehri.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="text-foreground-muted text-base sm:text-lg max-w-lg leading-relaxed mb-10"
            >
              Akçakoca sahillerinden yaylalara, fındık bahçelerinden sofraya &mdash;
              Düzce&apos;nin keşfedilmeyi bekleyen gastronomi ve doğa hazineleri.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#gastronomi"
                className="group inline-flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
              >
                Lezzetleri Keşfet
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="group-hover:translate-x-0.5 transition-transform inline-block">&rarr;</span>
                </span>
              </Link>
              <Link
                href="#rotalar"
                className="text-foreground text-sm font-medium underline underline-offset-4 decoration-secondary decoration-2 hover:text-secondary transition-colors"
              >
                Gezi rotaları
              </Link>
            </motion.div>
          </div>

          {/* Right - image with magazine overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              {/* Main image */}
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-sm overflow-hidden"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80')",
                  }}
                />
              </motion.div>

              {/* Number overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -top-6 -left-6 z-10"
              >
                <p className="font-serif text-8xl font-black text-secondary leading-none">
                  01
                </p>
              </motion.div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                className="absolute -bottom-4 -right-4 bg-background px-4 py-3 border-l-2 border-secondary max-w-[200px]"
              >
                <p className="text-[10px] uppercase tracking-wider text-foreground-muted mb-1">Akçakoca</p>
                <p className="text-foreground text-xs font-medium leading-snug">
                  Karadeniz&apos;in saklı sahil cenneti
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee/ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border py-4 overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-foreground-muted text-sm">
              <span>Akçakoca Sahili</span>
              <span className="text-secondary">&bull;</span>
              <span>Samandere Şelalesi</span>
              <span className="text-secondary">&bull;</span>
              <span>Konuralp Antik Kent</span>
              <span className="text-secondary">&bull;</span>
              <span>Düzce Fındığı</span>
              <span className="text-secondary">&bull;</span>
              <span>Kardüz Yaylası</span>
              <span className="text-secondary">&bull;</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
