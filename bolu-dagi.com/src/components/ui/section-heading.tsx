"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 mx-auto w-20 h-1 rounded-full ${
          light ? "bg-secondary-light" : "bg-primary"
        }`}
      />
    </motion.div>
  );
}
