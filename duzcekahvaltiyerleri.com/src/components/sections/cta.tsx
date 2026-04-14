"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-secondary overflow-hidden py-16 sm:py-20 lg:py-32">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
      >
        <span className="font-serif text-[120px] md:text-[200px] lg:text-[300px] font-black text-white/[0.06] leading-none italic">
          düzce &middot; kahvaltı &middot; düzce &middot; kahvaltı &middot; düzce &middot; kahvaltı &middot;
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-white" />
              <p className="text-white/80 text-xs uppercase tracking-[0.25em] font-medium">
                Güne Erken, Sofraya Zamanında
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-black text-white leading-[0.95] tracking-tight mb-8"
            >
              Sabahın en güzel
              <br />
              <span className="italic font-light">saati sizi bekliyor.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg max-w-xl leading-relaxed mb-10"
            >
              Erken kalkın, doğru yolu seçin. Düzce çevresinin en güzel
              sofralarından biri sizi 45 dakika mesafede bekliyor &mdash;
              editörümüzün özel önerisiyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="https://ibrahiminyeri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-secondary-dark px-7 py-4 rounded-full text-sm font-semibold hover:bg-accent-cream transition-colors"
              >
                Editör Seçimine Git
                <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="group-hover:translate-x-0.5 transition-transform inline-block">&rarr;</span>
                </span>
              </a>
              <Link
                href="/blog"
                className="text-white/80 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                Blog yazılarını oku
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative">
              <p className="font-serif text-[200px] font-black text-white/10 leading-none">
                D
              </p>
              <div className="absolute top-4 right-4 text-right">
                <p className="font-serif text-white text-sm italic">kahvaltı</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">
                  Est. 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
