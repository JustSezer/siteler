"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, ArrowUpRight } from "lucide-react";

export default function Editor() {
  return (
    <section id="editor" className="py-16 sm:py-20 lg:py-32 bg-background-alt relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <span className="font-serif text-secondary text-3xl italic">§ 03</span>
          <div className="h-px flex-1 bg-border" />
          <p className="text-foreground-muted text-xs uppercase tracking-[0.25em]">
            Editör Seçimi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 mb-5 bg-secondary/10 border border-secondary/30 px-4 py-1.5">
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-medium">
              Bu Sezonun Favorisi
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,5vw,4.5rem)] font-black text-primary leading-[1] tracking-tight mb-4">
            Güne burada <span className="italic text-secondary font-light">başlayın.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl">
            Düzce&apos;den yalnızca 45 dakika mesafede, Bolu Dağı&apos;nın tam zirvesinde,
            odun ateşinin üzerinde hazırlanan efsane kahvaltı ve kebap sofrası.
            1989&apos;dan beri yolcuların buluşma noktası.
          </p>
        </motion.div>

        <motion.a
          href="https://ibrahiminyeri.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group block"
        >
          <div className="grid lg:grid-cols-12 gap-0 bg-card border border-border overflow-hidden shadow-[0_30px_60px_-20px_rgba(58,40,23,0.2)]">
            {/* Image */}
            <div className="lg:col-span-7 relative aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:min-h-[520px] overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-cover bg-right"
                style={{
                  backgroundImage: "url('/images/ibrahimin-yeri.jpg')",
                }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1 }}
                role="img"
                aria-label="İbrahim'in Yeri"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 flex items-center gap-2 bg-secondary text-white px-3 py-1.5">
                <Star className="w-3 h-3 fill-white" />
                <span className="text-[10px] uppercase tracking-wider font-medium">
                  Editör&apos;ün Özel Önerisi
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-2">
                    Est. 1989 &middot; Bolu Dağı
                  </p>
                  <p className="font-serif text-white text-3xl sm:text-5xl font-black leading-[0.95]">
                    İbrahim&apos;in
                    <br />
                    <span className="italic font-light text-secondary-light">Yeri</span>
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-accent-cream">
              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                  <span className="ml-2 text-foreground-muted text-xs">
                    Editör puanı &middot; 10/10
                  </span>
                </div>

                <p className="font-serif text-primary text-xl italic leading-relaxed">
                  &ldquo;Tereyağında sahan yumurtası, odun ateşi pastırma, köy ekmeği
                  ve taze bal... Düzce&apos;den yola çıkın, 45 dakika sonra başka
                  bir sofranın karşısındasınız.&rdquo;
                </p>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-medium">
                        Bolu Dağı Bakacak Mevkii
                      </p>
                      <p className="text-foreground-muted text-xs">
                        Düzce&apos;den 45 dk &middot; D100 üzeri
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-medium">7/24 Açık</p>
                      <p className="text-foreground-muted text-xs">
                        Sabah kahvaltısı için en iyi saat: 07:00 &mdash; 11:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
                <div>
                  <p className="text-foreground-muted text-[10px] uppercase tracking-wider mb-1">
                    Rezervasyon
                  </p>
                  <p className="font-serif text-primary text-xl font-bold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    Siteyi ziyaret et
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 text-sm font-medium group-hover:bg-secondary transition-colors">
                  İncele
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-foreground-muted text-xs mt-8 italic"
        >
          * Editör seçimleri reklam değildir. Tarafsız tavsiye niteliğindedir.
        </motion.p>
      </div>
    </section>
  );
}
