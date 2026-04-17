export default function SerpMockup() {
  return (
    <div
      className="relative w-full select-none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 20px 40px rgba(30, 27, 75, 0.15))" }}
    >
      {/* Browser card */}
      <div className="rounded-2xl overflow-hidden border border-[var(--line)] bg-white">
        {/* Address bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F4F4F9] border-b border-[var(--line)]">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C840]" />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 rounded-full bg-white text-[11px] text-[var(--ink-mute)] font-mono truncate flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            google.com/search?q=wix+türkçe+destek
          </div>
        </div>

        {/* SERP content */}
        <div className="p-5 bg-white">
          {/* Search header */}
          <div className="flex items-baseline gap-2 pb-4 border-b border-[var(--line)]">
            <span className="text-[20px] font-normal tracking-tight">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>
            <span className="text-[11px] text-[var(--ink-mute)]">
              Yaklaşık 42.300 sonuç (0,32 sn)
            </span>
          </div>

          {/* Highlighted result (us) */}
          <div className="mt-4 rounded-lg p-3 -mx-1 relative" style={{ background: "rgba(16,184,166,0.08)", border: "1px solid rgba(16,184,166,0.25)" }}>
            <span className="absolute -top-2 right-3 text-[9px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: "var(--mint)" }}>
              #1
            </span>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[var(--indigo-900)] to-[var(--coral)] flex items-center justify-center text-[7px] font-bold text-white">
                W.
              </span>
              <span className="text-[10px] text-[var(--ink-soft)]">wix-destek.com.tr</span>
            </div>
            <p className="text-[14px] leading-snug" style={{ color: "#1a0dab" }}>
              Wix Destek — Türkçe Wix Uzmanından Profesyonel Yardım
            </p>
            <p className="mt-0.5 text-[11px] text-[var(--ink-soft)] leading-snug">
              Wix sitenizle ilgili her soruna Türkçe profesyonel destek. 24 saat içinde yanıt,
              sabit teklif, sürpriz fatura yok...
            </p>
          </div>

          {/* Other results (muted) */}
          {[
            { title: "Wix Türkçe yapmak - Yardım Merkezi (support.wix.com)", url: "support.wix.com › wix-turkce", rank: 2 },
            { title: "Wix Destek Forumu - Reddit", url: "reddit.com › r/wix", rank: 3 },
          ].map((r) => (
            <div key={r.rank} className="mt-4 px-1 opacity-70">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-[var(--surface-alt)]" />
                <span className="text-[10px] text-[var(--ink-mute)]">{r.url}</span>
              </div>
              <p className="text-[13px] leading-snug" style={{ color: "#1a0dab" }}>
                {r.title}
              </p>
              <p className="mt-0.5 text-[11px] text-[var(--ink-mute)] leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating ranking chart */}
      <div
        className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-4 bg-white rounded-xl shadow-lg border border-[var(--line)] p-3 sm:p-4 w-[180px] sm:w-[220px]"
        style={{ animation: "float 7s ease-in-out infinite" }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--ink-mute)]">
            Sıralama
          </p>
          <span className="inline-flex items-center gap-0.5 text-[10px] font-bold" style={{ color: "var(--success)" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            +23
          </span>
        </div>

        {/* Mini sparkline */}
        <svg viewBox="0 0 200 60" className="w-full h-[50px]" aria-hidden="true">
          <defs>
            <linearGradient id="rank-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--mint)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--mint)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,48 L30,44 L60,40 L90,30 L120,25 L150,14 L180,8 L200,6"
            fill="none"
            stroke="var(--mint)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0,48 L30,44 L60,40 L90,30 L120,25 L150,14 L180,8 L200,6 L200,60 L0,60 Z"
            fill="url(#rank-grad)"
          />
          <circle cx="200" cy="6" r="3" fill="var(--mint)" />
        </svg>

        <div className="flex items-center justify-between mt-1 text-[10px] text-[var(--ink-mute)]">
          <span>Mart</span>
          <span className="font-bold text-[var(--indigo-900)]">Bugün · #1</span>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -top-3 left-2 sm:-left-3 bg-white rounded-full shadow-md border border-[var(--line)] px-3 py-1.5 flex items-center gap-2"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-[11px] font-semibold text-[var(--indigo-900)]">LCP 1.8sn</span>
      </div>
    </div>
  );
}
