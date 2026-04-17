"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import ChickenAnimation from "@/components/svg/chicken-animation";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-charcoal overflow-hidden">
      {/* Doğa gradient arka plan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-forest/40 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/60" />
        {/* Minimal sis efekti */}
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 600px 300px at 30% 60%, var(--bone) 0%, transparent 70%), radial-gradient(ellipse 400px 200px at 70% 40%, var(--bone) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Üst şerit */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 inset-x-0 z-10 pt-24 sm:pt-28"
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 text-bone/70">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-ochre" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium">
              Sayı 01 · Nisan 2026
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.22em] font-medium">
            Bolu Dağı · Türkiye
          </span>
        </div>
      </motion.div>

      {/* Tavuk animasyonu — sol (mobilde gizli) */}
      <div className="absolute left-8 lg:left-16 bottom-24 lg:bottom-32 z-[5] pointer-events-none hidden sm:block">
        <ChickenAnimation className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-50 lg:opacity-60" />
      </div>

      {/* Ana içerik */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="eyebrow mb-6 text-ochre-soft"
          >
            Yöresel Sabah Sofraları Rehberi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-bone tracking-tight"
          >
            Bolu Dağı Kahvaltı
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block font-serif italic text-[clamp(1.8rem,5vw,4rem)] leading-[1.1] text-ochre-soft tracking-tight mt-2"
          >
            Nerede yapılır, ne yenir, nasıl gidilir?
          </motion.span>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 sm:mt-10 text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.75] text-bone/70 max-w-2xl mx-auto px-2 sm:px-0"
          >
            Bolu Dağı&apos;nda kahvaltı yapılacak en iyi 7 mekan, 2026 güncel fiyatları,
            kuymak ve serpme kahvaltı tarifleri. İstanbul–Ankara yolu üzerinde
            Bakacak, Abant ve Mengen&apos;de köy kahvaltısı rehberi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <Link
              href="#kahvaltilar"
              className="btn-forest !bg-ochre hover:!bg-ochre-soft !text-charcoal"
            >
              Sofrayı Keşfet →
            </Link>
            <Link
              href="#mekanlar"
              className="btn-outline !border-bone/50 !text-bone hover:!bg-bone hover:!text-charcoal"
            >
              Önerilen Mekanlar
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-bone/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
