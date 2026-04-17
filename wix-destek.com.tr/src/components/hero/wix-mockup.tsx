export default function WixMockup() {
  return (
    <div
      className="relative w-full select-none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 30px 40px rgba(30, 27, 75, 0.18))" }}
    >
      <div
        className="rounded-2xl overflow-hidden border border-[var(--line)] bg-white"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F4F4F9] border-b border-[var(--line)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C840]" />
          <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-white text-[11px] text-[var(--ink-mute)] font-mono truncate">
            editor.wix.com / your-site
          </div>
          <span className="text-[10px] font-semibold text-[var(--success)] bg-green-50 px-2 py-0.5 rounded">
            Yayında
          </span>
        </div>

        {/* Editor content */}
        <div className="p-5 bg-gradient-to-br from-[#FDFCFF] to-[#F4F4FB]">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded bg-white border border-[var(--line)] flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-sm bg-[var(--indigo-500)] opacity-40" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 h-6 rounded bg-[var(--indigo-900)]" />
              <div className="w-10 h-6 rounded bg-[var(--coral)]" />
            </div>
          </div>

          {/* Canvas */}
          <div className="relative rounded-lg bg-white border border-[var(--line)] overflow-hidden">
            {/* Rulers */}
            <div className="h-4 bg-[var(--surface)] border-b border-[var(--line)] flex items-center">
              <div className="flex-1 h-full bg-[repeating-linear-gradient(90deg,transparent_0,transparent_19px,rgba(49,46,129,0.08)_19px,rgba(49,46,129,0.08)_20px)]" />
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[var(--coral)]" />
                  <div className="h-3 w-16 rounded-sm bg-[var(--indigo-900)]" />
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-8 rounded bg-[var(--ink-mute)] opacity-40" />
                  <div className="h-2 w-8 rounded bg-[var(--ink-mute)] opacity-40" />
                  <div className="h-2 w-8 rounded bg-[var(--ink-mute)] opacity-40" />
                </div>
              </div>

              <div>
                <div className="h-3 w-2/3 rounded bg-[var(--indigo-900)] mb-2" />
                <div className="h-3 w-1/2 rounded bg-[var(--coral)]" />
              </div>

              <div className="h-2 w-full rounded bg-[var(--ink-mute)] opacity-20" />
              <div className="h-2 w-4/5 rounded bg-[var(--ink-mute)] opacity-20" />

              <div className="flex gap-2 pt-2">
                <div className="h-7 w-24 rounded-md bg-[var(--coral)]" />
                <div className="h-7 w-20 rounded-md border border-[var(--indigo-900)]" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-md bg-gradient-to-br from-[var(--gold-soft)] to-[var(--coral-soft)] flex items-end p-1.5"
                  >
                    <div className="h-1.5 w-3/4 rounded bg-white/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected element handles — hidden on very small screens */}
          <div className="hidden sm:block absolute top-[38%] left-[10%] w-[45%] h-[18%] border-2 border-[var(--coral)] rounded pointer-events-none">
            {[
              "top-[-4px] left-[-4px]",
              "top-[-4px] right-[-4px]",
              "bottom-[-4px] left-[-4px]",
              "bottom-[-4px] right-[-4px]",
            ].map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} w-2 h-2 rounded-full bg-white border-2 border-[var(--coral)]`}
              />
            ))}
            <span className="absolute -top-6 left-0 text-[10px] font-bold text-white bg-[var(--coral)] px-1.5 py-0.5 rounded whitespace-nowrap">
              Hero başlığı
            </span>
          </div>
        </div>
      </div>

      {/* Floating chat bubble */}
      <div
        className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl rounded-bl-sm shadow-lg border border-[var(--line)] p-3 max-w-[220px]"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--gold)] flex items-center justify-center text-white text-[10px] font-bold">
            WD
          </span>
          <span className="text-[11px] font-semibold text-[var(--indigo-900)]">Uzman</span>
          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
        </div>
        <p className="text-xs text-[var(--ink-soft)] leading-snug">
          Hero'daki butonu da iyzico'ya bağlayalım mı?
        </p>
      </div>

      {/* Floating status pill */}
      <div
        className="absolute -top-4 -right-3 bg-white rounded-full shadow-md border border-[var(--line)] px-3 py-1.5 flex items-center gap-2"
        style={{ animation: "float 7s ease-in-out infinite", animationDelay: "0.5s" }}
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="text-[11px] font-semibold text-[var(--indigo-900)]">SSL aktif</span>
      </div>
    </div>
  );
}
