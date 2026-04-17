export default function EditorMockup() {
  return (
    <div className="relative w-full" aria-hidden="true">
      {/* Soft warm glow behind the paper */}
      <div
        className="absolute -inset-8 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 60% 40%, rgba(212,184,120,0.14), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Paper note — rotated slightly for tactile feel */}
      <div
        className="relative"
        style={{ transform: "rotate(-1.8deg)" }}
      >
        {/* Tape piece at top */}
        <div
          className="absolute -top-3 left-[38%] w-24 h-6 rounded-[2px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,250,220,0.55), rgba(255,250,220,0.25))",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,250,220,0.3)",
            transform: "rotate(3deg)",
          }}
        />

        {/* The paper */}
        <div
          className="relative rounded-[4px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #F7F1DF 0%, #F2EBD0 100%)",
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.55), 0 20px 40px -12px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(139, 111, 44, 0.08)",
          }}
        >
          {/* Ruled lines background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(139,111,44,0.18) 31px, rgba(139,111,44,0.18) 32px)",
            }}
          />
          {/* Left margin rule (red) */}
          <div
            className="absolute top-0 bottom-0 left-[60px] w-px pointer-events-none"
            style={{ background: "rgba(200,60,60,0.35)" }}
          />

          {/* Header — printed */}
          <div className="relative px-6 sm:px-10 pt-6 sm:pt-8 pb-4 flex items-baseline justify-between border-b border-dashed border-[rgba(139,111,44,0.35)]">
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: "#6B4F1A", fontFamily: "var(--font-inter), ui-sans-serif" }}
              >
                Proje Notları
              </p>
              <p
                className="mt-0.5 text-[11px]"
                style={{ color: "#8B6F2C", fontFamily: "ui-monospace, 'Courier New', monospace" }}
              >
                · Kurumsal SaaS · Strateji oturumu
              </p>
            </div>
            <p
              className="text-[11px]"
              style={{ color: "#8B6F2C", fontFamily: "ui-monospace, 'Courier New', monospace" }}
            >
              14 / 04
            </p>
          </div>

          {/* Handwritten body */}
          <div
            className="relative px-6 sm:px-10 py-5 sm:py-6 min-h-[300px] sm:min-h-[340px]"
            style={{
              fontFamily: "var(--font-caveat), 'Bradley Hand', cursive",
              color: "#1F2A22",
            }}
          >
            {/* Line 1 */}
            <p className="text-xl sm:text-2xl leading-[32px] sm:leading-[38px]">
              <span style={{ color: "#8B2020" }}>—</span> LCP{" "}
              <span
                className="inline-block px-1"
                style={{ background: "rgba(218, 165, 32, 0.35)" }}
              >
                4.1s → 1.8s
              </span>{" "}
              ✓
            </p>

            {/* Line 2 */}
            <p className="text-xl sm:text-2xl leading-[32px] sm:leading-[38px]">
              <span style={{ color: "#8B2020" }}>—</span> CWV tümü yeşil (PSI{" "}
              <span className="font-bold" style={{ color: "#2E6E43" }}>96</span>)
            </p>

            {/* Line 3 */}
            <p className="text-xl sm:text-2xl leading-[32px] sm:leading-[38px]">
              <span style={{ color: "#8B2020" }}>—</span> Marka tonu: &ldquo;uzman&rdquo;,{" "}
              <span
                className="relative inline-block"
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "#8B2020",
                  textDecorationThickness: "2px",
                }}
              >
                panik
              </span>{" "}
              YOK
            </p>

            {/* Line 4 */}
            <p className="text-xl sm:text-2xl leading-[32px] sm:leading-[38px]">
              <span style={{ color: "#8B2020" }}>—</span> 6 sayfa bilgi mimarisi ✓
            </p>

            {/* Line 5 — circled */}
            <p className="text-2xl leading-[38px] mt-1">
              <span style={{ color: "#8B2020" }}>→</span>{" "}
              <span
                className="relative inline-block px-2 py-0.5"
                style={{
                  boxShadow:
                    "inset 0 0 0 2px #2E6E43",
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  color: "#2E6E43",
                }}
              >
                Pzt · Zoom, 10:00
              </span>
            </p>

            {/* Line 6 — smaller side note */}
            <p className="mt-5 sm:mt-6 text-lg sm:text-xl leading-[30px] sm:leading-[34px]" style={{ color: "#5B4A28", opacity: 0.85 }}>
              kurumsal ajansla{" "}
              <span style={{ fontWeight: 600, color: "#2E6E43" }}>
                çalıştığımızı
              </span>{" "}
              hissettirdi
            </p>
            <p className="text-sm sm:text-base leading-5 sm:leading-6" style={{ color: "#8B6F2C", fontFamily: "ui-monospace, monospace", letterSpacing: "0.02em" }}>
              — Barış K., CEO
            </p>

            {/* Paper clip / fold corner detail */}
            <div
              className="absolute bottom-4 right-5 text-xl"
              style={{ color: "#2E6E43", transform: "rotate(8deg)" }}
            >
              ★
            </div>
          </div>

          {/* Coffee stain */}
          <div
            className="absolute bottom-8 left-20 w-14 h-14 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, rgba(139,111,44,0.18), rgba(139,111,44,0.04) 70%, transparent)",
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>
    </div>
  );
}
