"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80')",
        }}
        role="img"
        aria-label="Bolu Dagi orman manzarasi"
      />
      <div className="absolute inset-0 bg-primary-dark/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Maceraniz Baslasin
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Bolu Dagi Sizi Bekliyor
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Dogainin kalbinde unutulmaz bir deneyim için planlamanizi simdi
            yapin. Her mevsim ayri güzel olan Bolu Dagi&apos;nda sizi bekleyen
            kesfedilmemis rotalar var.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#gezilecek-yerler"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all duration-300 hover:scale-105"
            >
              Rotalari Kesfet
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#mevsimler"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Mevsim Rehberi
            </a>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Istanbul&apos;a 3 saat</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ankara&apos;ya 2.5 saat</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>12 ay acik</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
