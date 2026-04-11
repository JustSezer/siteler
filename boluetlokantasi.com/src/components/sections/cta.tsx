"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative text background */}
      <motion.div
        animate={{ x: [0, -200] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="font-serif text-[200px] lg:text-[300px] font-bold text-white/[0.03] leading-none">
          BOLU &nbsp; LEZZET &nbsp; BOLU &nbsp; LEZZET &nbsp; BOLU &nbsp; LEZZET &nbsp;
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-[13px] uppercase tracking-[0.2em] font-medium mb-8"
        >
          İstanbul 3h &mdash; Ankara 2.5h &mdash; TEM Otoyolu
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-10"
        >
          Bolu sizi
          <br />
          sofraya çağırıyor.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#lokantalar"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Lokantalara Göz At
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
          <Link
            href="/blog"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors border-b border-white/20 hover:border-white pb-0.5"
          >
            Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
