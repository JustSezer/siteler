"use client";

import { motion } from "framer-motion";

export default function ChickenAnimation({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* İbik */}
      <motion.path
        d="M105 45c3-12 12-20 18-18s4 14-2 22-14 10-16 6z"
        fill="var(--ochre)"
        animate={{ rotate: [0, 3, 0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "110px 55px" }}
      />
      <motion.path
        d="M95 50c-2-10 4-22 14-24s14 8 10 18"
        fill="var(--ochre-soft)"
        animate={{ rotate: [0, -2, 0, 3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "105px 45px" }}
      />

      {/* Baş */}
      <motion.g
        animate={{ rotate: [0, -6, 0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ transformOrigin: "100px 75px" }}
      >
        <ellipse cx="100" cy="72" rx="22" ry="20" fill="var(--bone)" stroke="var(--charcoal)" strokeWidth="1.5" />
        {/* Göz */}
        <motion.circle
          cx="108" cy="67" r="3"
          fill="var(--charcoal)"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
        />
        {/* Gaga */}
        <path d="M120 72l12 3-10 5z" fill="var(--ochre)" stroke="var(--charcoal)" strokeWidth="1" />
      </motion.g>

      {/* Sakallık */}
      <motion.path
        d="M108 85c2 4 0 8-3 8s-5-3-3-8"
        fill="var(--ochre)"
        animate={{ scaleY: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "105px 85px" }}
      />

      {/* Gövde */}
      <motion.g
        animate={{ y: [0, -3, 0, -1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="95" cy="125" rx="40" ry="35" fill="var(--bone)" stroke="var(--charcoal)" strokeWidth="1.5" />
        {/* Kanat */}
        <motion.path
          d="M60 110c-8 10-10 30-5 40 8-5 18-15 20-30z"
          fill="var(--bone-deep)"
          stroke="var(--charcoal)"
          strokeWidth="1"
          animate={{ rotate: [0, -5, 0, 3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "65px 125px" }}
        />
        {/* Kanat çizgileri */}
        <path d="M63 118c3 8 2 20-1 28" stroke="var(--charcoal)" strokeWidth="0.7" opacity="0.4" fill="none" />
        <path d="M67 115c3 8 3 18 0 25" stroke="var(--charcoal)" strokeWidth="0.7" opacity="0.3" fill="none" />
      </motion.g>

      {/* Kuyruk */}
      <motion.g
        animate={{ rotate: [0, 6, 0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "55px 110px" }}
      >
        <path d="M55 105c-15-5-25-15-20-25 3 8 12 12 20 10z" fill="var(--forest)" stroke="var(--charcoal)" strokeWidth="1" />
        <path d="M58 110c-18-2-30-8-28-20 5 8 15 12 25 12z" fill="var(--forest-soft)" stroke="var(--charcoal)" strokeWidth="1" />
        <path d="M56 115c-16 0-28-5-25-16 4 7 13 10 22 10z" fill="var(--sage)" stroke="var(--charcoal)" strokeWidth="0.8" />
      </motion.g>

      {/* Bacaklar */}
      <motion.g
        animate={{ y: [0, -3, 0, -1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="85" y1="155" x2="80" y2="185" stroke="var(--ochre)" strokeWidth="2.5" />
        <line x1="105" y1="155" x2="110" y2="185" stroke="var(--ochre)" strokeWidth="2.5" />
        {/* Ayaklar */}
        <path d="M70 185h20" stroke="var(--ochre)" strokeWidth="2" strokeLinecap="round" />
        <path d="M75 185l-5 6" stroke="var(--ochre)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M85 185l5 6" stroke="var(--ochre)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 185h20" stroke="var(--ochre)" strokeWidth="2" strokeLinecap="round" />
        <path d="M105 185l-5 6" stroke="var(--ochre)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M115 185l5 6" stroke="var(--ochre)" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}
