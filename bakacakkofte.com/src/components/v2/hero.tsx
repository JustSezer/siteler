import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative isolate overflow-hidden v2-section min-h-[100svh] flex flex-col">
      {/* ambient ember glow */}
      <div
        aria-hidden
        className="absolute -bottom-60 -left-40 w-[820px] h-[820px] rounded-full opacity-[0.22] blur-[140px]"
        style={{ background: "var(--color-ember)" }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full opacity-[0.10] blur-[160px]"
        style={{ background: "var(--color-amber)" }}
      />

      {/* grid tick marks */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "100% 96px",
        }}
      />
      {/* vertical rule columns */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "12.5% 100%",
        }}
      />
      {/* film grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative flex-1 mx-auto w-full max-w-[1480px] px-5 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-40 pb-12 md:pb-16 flex flex-col">
        {/* top meta strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 v2-mono text-[10px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[var(--color-fog-2)] mb-auto">
          <span className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-ember)] animate-pulse" />
            Başvurular Açık · 81/81
          </span>
          <span className="hidden md:flex items-center gap-3">
            41.0082° N <span className="opacity-40">/</span> 31.0078° E
          </span>
          <span className="hidden lg:inline">Bakacak Mevki, Bolu Dağı</span>
        </div>

        {/* main claim — bottom aligned */}
        <div className="mt-12 md:mt-auto">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="col-span-12 lg:col-span-9">
              <div className="v2-num mb-4 sm:mb-6">№ 01 — Manifesto</div>
              <h1 className="v2-display text-[var(--color-paper)] text-[40px] xs:text-[48px] sm:text-[68px] md:text-[88px] lg:text-[112px] xl:text-[140px] leading-[0.92] sm:leading-[0.9] tracking-[-0.035em] sm:tracking-[-0.045em] [text-wrap:balance]">
                Köz ateşi
                <br />
                <span className="text-[var(--color-ember)] italic font-normal">karavanla</span> yola
                <br />
                çıktı.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:pb-6">
              <p className="text-[var(--color-paper)]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                Bolu Dağı&apos;nda 30+ yıllık usta tarifi; standart karavan, ekipman, eğitim ve
                marka desteğiyle anahtar teslim bayilik paketi olarak Türkiye geneline açıldı.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link href="/franchise" className="v2-btn-ember justify-center sm:justify-start">
                  Bayilik başvurusu <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="#manifesto" className="v2-btn-ghost justify-center sm:justify-start">
                  Aşağı kaydır
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="mt-12 md:mt-16 pt-6 border-t v2-rule grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 v2-mono text-[10px] tracking-[0.2em] sm:tracking-[0.22em] uppercase text-[var(--color-fog-2)]">
          {[
            ["Kuruluş", "1990"],
            ["Karavan", "2026"],
            ["Ekip", "2 kişi"],
            ["Açılış", "6–8 hafta"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between sm:justify-start sm:gap-3">
              <span>{k}</span>
              <span className="v2-display normal-case tracking-tight text-[var(--color-paper)] text-base md:text-lg">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
