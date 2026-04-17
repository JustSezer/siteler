const items = [
  "Anahtar teslim",
  "2 hafta eğitim",
  "Merkezi tedarik",
  "Sabit kira yok",
  "2 kişilik ekip",
  "5 dk servis döngüsü",
  "81 il başvuru açık",
  "Köz ızgara · meşe kömürü",
];

export default function MarqueeV2() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="v2-section border-t v2-rule overflow-hidden py-5">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-[v2marquee_40s_linear_infinite] gap-12 pr-12 will-change-transform">
          {loop.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-8 sm:gap-12 v2-display text-xl sm:text-2xl md:text-4xl text-[var(--color-paper)]/70">
              {t}
              <span className="text-[var(--color-ember)]">◆</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes v2marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
