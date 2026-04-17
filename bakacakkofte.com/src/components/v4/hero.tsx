import Link from "next/link";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function HeroV4() {
  return (
    <section className="relative v4-section-butter pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      {/* decorative dots pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-night) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* mustard blob top right */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[var(--color-mustard)]/40 blur-[20px]"
      />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        {/* announcement pill */}
        <div className="flex items-center justify-center mb-6">
          <span className="v4-pill v4-pill-tomato">
            <Sparkles className="w-3.5 h-3.5" />
            Bayilik başvuruları açık · 81 il
          </span>
        </div>

        {/* big centered claim */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="v4-display-tight text-[var(--color-night)] text-[44px] xs:text-[56px] sm:text-[76px] md:text-[104px] lg:text-[132px] xl:text-[152px] leading-[0.95] sm:leading-[0.92] tracking-[-0.04em] sm:tracking-[-0.045em] [text-wrap:balance]">
            Karavan kur,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--color-snow)]">köfte sat.</span>
              <span
                aria-hidden
                className="absolute inset-x-[-8px] inset-y-[8%] bg-[var(--color-tomato)] -rotate-1 -z-0 rounded-2xl"
              />
            </span>
          </h1>
          <p className="v4-sans text-[var(--color-graphite)] text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto leading-relaxed">
            30+ yıllık usta tarifi, anahtar teslim karavan ve 2 hafta eğitim ile{" "}
            <span className="font-semibold text-[var(--color-night)]">altı haftada</span> kendi
            işini açarsın. Sabit kira yok, lokasyon esnek.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/franchise" className="v4-btn-tomato w-full sm:w-auto justify-center">
              Hemen Başvur <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${site.phones[0].value}`} className="v4-btn-outline w-full sm:w-auto justify-center">
              <Phone className="w-4 h-4" /> {site.phones[0].display}
            </a>
          </div>

          {/* trust line */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <div className="flex -space-x-2">
              {["#df3027", "#ffc83d", "#161410"].map((c, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[var(--color-snow)] flex items-center justify-center v4-display text-xs text-[var(--color-snow)]"
                  style={{ background: c, color: i === 1 ? "#161410" : "#fffefb" }}
                >
                  {["B", "K", "F"][i]}
                </span>
              ))}
            </div>
            <p className="v4-sans text-sm text-[var(--color-graphite)]">
              <span className="font-bold text-[var(--color-night)]">3 kuşak usta</span> · 30+ yıl
              · Bolu Dağı Bakacak ocağı
            </p>
          </div>
        </div>

        {/* feature row */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "Yatırım", v: "Anahtar Teslim", t: "Tek paket" },
            { k: "Açılış", v: "6–8 Hafta", t: "Sözleşmeden teslime" },
            { k: "Eğitim", v: "2 Hafta", t: "Merkezde + yerinde" },
            { k: "Bölge", v: "81 İl", t: "Türkiye geneli" },
          ].map((f, i) => (
            <div
              key={f.k}
              className={`v4-card p-4 sm:p-5 ${
                i === 1 ? "bg-[var(--color-tomato)] text-[var(--color-snow)]" : ""
              } ${i === 2 ? "bg-[var(--color-mustard)] text-[var(--color-night)]" : ""}`}
            >
              <p
                className={`v4-display text-xs uppercase tracking-wider ${
                  i === 1 ? "text-[var(--color-snow)]/80" : "text-[var(--color-tomato)]"
                } ${i === 2 ? "!text-[var(--color-night)]/70" : ""}`}
              >
                {f.k}
              </p>
              <p className="v4-display-tight text-2xl sm:text-3xl mt-1">{f.v}</p>
              <p
                className={`v4-sans text-xs sm:text-sm mt-1.5 ${
                  i === 1 ? "text-[var(--color-snow)]/85" : "text-[var(--color-graphite)]"
                } ${i === 2 ? "!text-[var(--color-night)]/70" : ""}`}
              >
                {f.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
