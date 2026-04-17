const outlets = [
  "Hürriyet Gezi",
  "Milliyet Lezzet",
  "Vogue Table",
  "GQ Türkiye",
  "Gusto",
  "Time Out",
  "Cumhuriyet Pazar",
  "Sabah Günaydın",
];

export default function Basinda() {
  const doubled = [...outlets, ...outlets];
  return (
    <section className="bg-bone py-14 md:py-16 border-y border-ink/10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="flex items-center gap-6 mb-6">
          <span className="mono-font text-[10px] uppercase tracking-[0.3em] text-muted font-bold">
            Medya arşivi · Yakında
          </span>
          <span className="h-px flex-1 bg-ink/15" />
          <span className="mono-font text-[10px] uppercase tracking-[0.3em] text-red font-bold">
            Basında
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bone to-transparent z-10 pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bone to-transparent z-10 pointer-events-none"
          />
          <div className="flex whitespace-nowrap">
            <div className="flex animate-[press-scroll_50s_linear_infinite] gap-12 pr-12 will-change-transform">
              {doubled.map((o, i) => (
                <span
                  key={i}
                  className="display-font text-2xl md:text-3xl italic text-ink/60 font-[450] hover:text-red transition-colors"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes press-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
