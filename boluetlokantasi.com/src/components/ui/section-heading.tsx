"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 lg:mb-20 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`h-[2px] bg-primary mb-8 ${align === "center" ? "mx-auto" : ""}`}
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`mt-5 text-base lg:text-lg max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/50" : "text-muted-foreground"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
