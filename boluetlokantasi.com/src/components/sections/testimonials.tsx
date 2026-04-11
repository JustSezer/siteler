"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Ahmet Y.",
    location: "İstanbul",
    text: "Bolu Dağı'nda mola verdik, İbrahim'in Yeri'nde yediğimiz kuzu tandır hayatımda yediğim en iyi et yemeğiydi. 7/24 açık olması da ayrı bir nimet.",
    rating: 5,
    dish: "Kuzu Tandır",
  },
  {
    name: "Elif K.",
    location: "Ankara",
    text: "Her ay Bolu'ya et yemeye geliyoruz. Sac kavurma burada bambaşka bir lezzet. Tereyağının o eşsiz kokusu ve etin yumuşaklığı anlatılamaz.",
    rating: 5,
    dish: "Sac Kavurma",
  },
  {
    name: "Mehmet D.",
    location: "İzmir",
    text: "Mengen Festivali için geldik ama Bolu'nun et lokantaları bizi asıl şaşırtan oldu. Orman kebabı muhteşemdi, kağıdı açtığımızda koku masayı sardı.",
    rating: 5,
    dish: "Orman Kebabı",
  },
  {
    name: "Zeynep A.",
    location: "Bolu",
    text: "Bolulu olarak söylüyorum, buradaki et kültürü gerçekten farklı. Odun ateşinde pişen kebabın tadı hiçbir yerde aynı değil.",
    rating: 5,
    dish: "Bolu Kebabı",
  },
  {
    name: "Can S.",
    location: "Bursa",
    text: "Ankara-İstanbul yolculuklarında Bolu Dağı'nda durmak artık gelenek oldu. Mangal köftenin yanında ayran içmek başka bir keyif.",
    rating: 5,
    dish: "Mangal Köfte",
  },
  {
    name: "Derya M.",
    location: "Düzce",
    text: "Komşu il olarak Bolu'ya sık sık geliyoruz. Dana pirzola burada özenle hazırlanıyor, meşe kömürünün verdiği aroma muhteşem.",
    rating: 5,
    dish: "Dana Pirzola",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="yorumlar"
      className="py-24 lg:py-32 bg-accent-warm relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Floating background shapes */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Ziyaretçi Deneyimleri"
          subtitle="Bolu'nun lezzetlerini tadanlardan izlenimler"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={cardVariants}
              className="perspective-[1000px]"
            >
              <motion.div
                whileHover={{ y: -8, rotateY: 2, rotateX: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Quote className="w-8 h-8 text-secondary/30 mb-4" />
                </motion.div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed flex-1 mb-5 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-0.5 mb-1 justify-end">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.4 + i * 0.1 + j * 0.05,
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {t.dish}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
