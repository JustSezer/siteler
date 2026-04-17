import Link from "next/link";
import { ArrowRight, Phone, Play, CheckCircle2, Star } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-bone">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/bakacak-kofte-hero.jpg)" }}
      />
      {/* Layered gradients */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(20,17,14,0.95) 0%, rgba(20,17,14,0.8) 45%, rgba(20,17,14,0.55) 100%)",
        }}
      />
      {/* Red vignette */}
      <div
        aria-hidden
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-red/40 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute -right-20 bottom-10 h-[380px] w-[380px] rounded-full bg-gold/20 blur-[120px]"
      />

      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-bone) 1px, transparent 1px), linear-gradient(90deg, var(--color-bone) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-8 relative z-10">
            {/* Breadcrumb-style kicker */}
            <div className="inline-flex items-center gap-3 bg-bone/10 backdrop-blur border border-bone/20 px-4 py-2 rounded-full mb-8">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red text-bone text-[10px] font-bold">
                01
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] font-bold">
                Bakacak Köfte Bayilik Sistemi · 2026
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-soft animate-pulse" />
            </div>

            <h1 className="display-font leading-[0.95] text-[44px] md:text-[72px] lg:text-[96px]">
              Sabit restoran değil.
              <span className="block text-red-soft">
                Karavan bayiliği.
              </span>
              <span className="block">
                Kendi işini <span className="relative inline-block">
                  sıfırdan kur
                  <svg
                    aria-hidden
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 right-0 w-full h-3"
                  >
                    <path
                      d="M2 8 Q80 -2, 150 6 T298 8"
                      stroke="var(--color-gold)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>.
              </span>
            </h1>

            <p className="mt-10 text-lg md:text-xl text-bone/80 leading-[1.65] max-w-2xl">
              Bolu Dağı&apos;nın 30+ yıllık usta köftesini; standart karavan, ekipman, reçete,
              eğitim ve marka desteğiyle anahtar teslim paket olarak sunuyoruz. Türkiye geneli
              başvuru açık.
            </p>

            {/* Feature chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Anahtar teslim",
                "2 hafta eğitim",
                "Merkezi tedarik",
                "Sabit kira yok",
                "2 kişilik ekip",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 bg-bone/10 backdrop-blur border border-bone/20 rounded-full px-3.5 py-1.5 text-xs font-bold"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-soft" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="#basvuru" className="btn-red !bg-red !border-red hover:!bg-red-deep">
                Bayilik başvurusu <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${site.phones[0].value}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[10px] text-sm font-bold border-2 border-bone/40 text-bone hover:bg-bone hover:text-ink transition-colors"
              >
                <Phone className="w-4 h-4" /> {site.phones[0].display}
              </a>
              <button
                type="button"
                className="hidden md:inline-flex items-center gap-2.5 px-5 py-4 text-sm font-semibold text-bone/80 hover:text-bone transition-colors"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-bone/40">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </span>
                Tanıtım videosu
              </button>
            </div>

            {/* Trust pill */}
            <div className="mt-10 inline-flex items-center gap-4 bg-bone/5 border border-bone/10 rounded-2xl px-5 py-3">
              <div className="flex -space-x-2">
                {["K", "Ö", "F"].map((l, i) => (
                  <span
                    key={l}
                    className="h-9 w-9 rounded-full border-2 border-ink flex items-center justify-center text-bone text-xs font-black"
                    style={{
                      background: ["var(--color-red)", "var(--color-gold)", "var(--color-orange)"][i],
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-bone/70 mt-0.5 font-semibold">
                  3 kuşak · 30+ yıl · Bolu Dağı Bakacak ocağı
                </p>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-8 bg-bone text-ink rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: "url(/images/bakacak-kofte.jpg)" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" aria-hidden />
                <div className="absolute top-4 left-4 badge-gold">Paket 01</div>
                <div className="absolute top-4 right-4 badge-hot">Yeni</div>
                <div className="absolute bottom-3 left-4 right-4 text-bone">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">Karavan modeli</p>
                  <p className="display-font text-xl mt-0.5">Anahtar teslim</p>
                </div>
              </div>

              <div className="p-6">
                <p className="eyebrow mb-1">Hızlı özet</p>
                <h3 className="display-font text-xl leading-tight">
                  6 kalem · Tek sözleşme
                </h3>

                <dl className="mt-5 space-y-3 text-sm">
                  {[
                    ["Başlangıç yatırımı", "Coming soon"],
                    ["Geri dönüş", "~24 ay"],
                    ["Eğitim", "2 hafta"],
                    ["Açılış süresi", "6-8 hafta"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink/15 pb-2 last:border-0"
                    >
                      <dt className="text-muted font-semibold text-xs uppercase tracking-wider">{k}</dt>
                      <dd className="display-font text-base text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="#paket"
                  className="btn-red w-full justify-center mt-6"
                >
                  Paket detayı <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stat-strip overlay */}
      <div className="relative z-10 -mb-14">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { n: "30+", l: "Yıl usta tarifi", t: "red" },
              { n: "81", l: "İl franchise hedefi", t: "ink" },
              { n: "2", l: "Kişilik kompakt ekip", t: "gold" },
              { n: "6-8", l: "Hafta açılış süresi", t: "red" },
            ].map((s) => (
              <div
                key={s.l}
                className={`rounded-2xl p-6 md:p-7 shadow-2xl border ${
                  s.t === "ink"
                    ? "bg-ink text-bone border-ink-soft"
                    : s.t === "gold"
                    ? "bg-gold text-ink border-gold-deep"
                    : "bg-bone text-ink border-peach"
                }`}
              >
                <p
                  className={`display-font text-4xl md:text-5xl leading-none ${
                    s.t === "ink" ? "text-red-soft" : s.t === "gold" ? "text-ink" : "text-red"
                  }`}
                >
                  {s.n}
                </p>
                <p className={`text-xs md:text-sm mt-2 font-bold uppercase tracking-wide ${s.t === "ink" ? "text-bone/80" : "opacity-80"}`}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
