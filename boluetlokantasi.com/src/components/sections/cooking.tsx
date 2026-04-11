"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const techniques = [
  {
    step: "01",
    name: "Odun Ateşi Mangal",
    description:
      "Meşe ve kayın odunlarının közünde yavaş yavaş pişirilen etler, eşsiz bir is aroması kazanır. Bolu'nun en geleneksel pişirme yöntemidir.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    tip: "İpucu: Eti oda sıcaklığına getirdikten sonra mangala koyun.",
  },
  {
    step: "02",
    name: "Tandır Fırını",
    description:
      "Toprak fırınlarda saatlerce düşük ısıda pişirilen kuzu eti, ağızda dağılır hale gelir. Özel baharatlarla marine edilen et, tandırda benzersiz bir lezzet yakalar.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tip: "İpucu: En az 6 saat pişirme süresi sabırla beklenmelidir.",
  },
  {
    step: "03",
    name: "Sac Üstü Kavurma",
    description:
      "Demir sacın üzerinde yüksek ateşte hızla kavrulan et parçaları, tereyağı ve biberlerle servis edilir. Altın kural: eti çok karıştırmamaktır.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    tip: "İpucu: Sacı duman çıkana kadar ısıtın, sonra eti koyun.",
  },
  {
    step: "04",
    name: "Kağıtta Pişirme",
    description:
      "Et, sebzeler ve baharatlar yağlı kağıda sarılarak fırında buharla pişirilir. Tüm aromalar kağıdın içinde kalır.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tip: "İpucu: Kağıdı sofrada açarak sunumun tadını çıkarın.",
  },
];

function CookingCard({
  tech,
  index,
}: {
  tech: (typeof techniques)[0];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`group grid md:grid-cols-2 gap-0 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-500`}
    >
      {/* Image */}
      <div
        className={`relative h-64 md:h-auto min-h-[280px] overflow-hidden ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${tech.image}')` }}
          role="img"
          aria-label={tech.name}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-primary-dark/30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="absolute top-4 left-4"
        >
          <span className="text-5xl font-bold text-white/20 font-serif">
            {tech.step}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`p-8 lg:p-10 flex flex-col justify-center ${
          index % 2 === 1 ? "md:order-1" : ""
        }`}
      >
        <motion.h3
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-500"
        >
          {tech.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/70 leading-relaxed mb-6"
        >
          {tech.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          whileHover={{ scale: 1.02 }}
          className="bg-secondary/10 border border-secondary/20 rounded-xl px-5 py-3"
        >
          <p className="text-secondary-light text-sm font-medium">
            {tech.tip}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Cooking() {
  return (
    <section id="pisirme" className="py-24 lg:py-32 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pişirme Sırları"
          subtitle="Bolu ustalarından geleneksel et pişirme teknikleri"
          light
        />

        <div className="space-y-8">
          {techniques.map((tech, i) => (
            <CookingCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
