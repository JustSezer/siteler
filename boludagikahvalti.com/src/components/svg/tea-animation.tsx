"use client";

import { motion } from "framer-motion";

export default function TeaAnimation({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.7, duration: 0.8 }}
      viewBox="0 0 160 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Buğu / Buhar */}
      <motion.path
        d="M65 55c0-15 8-25 5-40"
        stroke="var(--bone)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
        animate={{ y: [0, -15], opacity: [0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.path
        d="M80 50c2-12-4-22 0-38"
        stroke="var(--bone)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
        animate={{ y: [0, -18], opacity: [0.35, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
      />
      <motion.path
        d="M95 52c-1-14 6-20 3-36"
        stroke="var(--bone)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
        animate={{ y: [0, -12], opacity: [0.3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
      />

      {/* İnce belli bardak - dış hat */}
      <motion.path
        d="M55 65 C55 65 48 95 50 115 C52 135 62 145 62 155 L62 170 C62 175 65 178 70 180 L90 180 C95 178 98 175 98 170 L98 155 C98 145 108 135 110 115 C112 95 105 65 105 65Z"
        fill="none"
        stroke="var(--bone)"
        strokeWidth="2"
        animate={{ filter: ["drop-shadow(0 0 4px rgba(196,117,49,0.2))", "drop-shadow(0 0 8px rgba(196,117,49,0.4))", "drop-shadow(0 0 4px rgba(196,117,49,0.2))"] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Çay sıvısı */}
      <motion.path
        d="M57 72 C57 72 50 98 52 115 C54 132 63 142 63 152 L63 168 C63 173 66 175 70 177 L90 177 C94 175 97 173 97 168 L97 152 C97 142 106 132 108 115 C110 98 103 72 103 72Z"
        fill="var(--ochre)"
        opacity="0.7"
        animate={{ opacity: [0.6, 0.75, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Bardak üst iç çizgi (çay seviyesi) */}
      <path
        d="M57 72 C65 74 95 74 103 72"
        stroke="var(--ochre-soft)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Bardak bel kısmı parlama */}
      <motion.ellipse
        cx="80"
        cy="115"
        rx="4"
        ry="15"
        fill="var(--bone)"
        opacity="0.15"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Tabak */}
      <ellipse cx="80" cy="190" rx="45" ry="8" fill="none" stroke="var(--bone)" strokeWidth="2" />
      <ellipse cx="80" cy="190" rx="35" ry="5" fill="none" stroke="var(--bone)" strokeWidth="0.8" opacity="0.4" />

      {/* Kaşık */}
      <motion.g
        animate={{ rotate: [0, 2, 0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ transformOrigin: "115px 185px" }}
      >
        <line x1="110" y1="170" x2="135" y2="195" stroke="var(--bone)" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="109" cy="168" rx="5" ry="8" fill="none" stroke="var(--bone)" strokeWidth="1.2" transform="rotate(-30 109 168)" />
      </motion.g>
    </motion.svg>
  );
}
