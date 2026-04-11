"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-background">
      <div className="h-full grid lg:grid-cols-2">
        {/* Left - text */}
        <div className="flex flex-col justify-end p-6 sm:p-10 lg:p-16 xl:p-20 pb-16 lg:pb-20 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-primary text-[13px] font-semibold uppercase tracking-[0.2em] mb-6"
          >
            Bolu &mdash; Aşçılar Diyarı
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-bold text-foreground leading-[0.95] mb-8"
          >
            Ateşle
            <br />
            Pişen
            <br />
            <span className="text-primary">Lezzet</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-foreground-muted text-base sm:text-lg max-w-sm leading-relaxed mb-10"
          >
            Yüzyıllık tarifler, odun ateşi geleneği ve
            Bolu&apos;nun en iyi et lokantaları.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <Link
              href="#yemekler"
              className="group inline-flex items-center gap-3 text-foreground text-sm font-medium"
            >
              <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Lezzetleri Keşfet
            </Link>

            <Link
              href="#lokantalar"
              className="text-foreground-muted text-sm font-medium hover:text-foreground transition-colors border-b border-foreground-muted/30 hover:border-foreground pb-0.5"
            >
              Mekanlar
            </Link>
          </motion.div>
        </div>

        {/* Right - image */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
          </motion.div>

          {/* Overlay stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-10 right-10 bg-background/80 backdrop-blur-lg border border-border rounded-xl px-6 py-4"
          >
            <p className="text-3xl font-serif font-bold text-primary">50+</p>
            <p className="text-foreground-muted text-xs mt-1">Yıllık Gelenek</p>
          </motion.div>
        </div>

        {/* Mobile background */}
        <div className="lg:hidden absolute inset-0 -z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=60')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
      </div>
    </section>
  );
}
