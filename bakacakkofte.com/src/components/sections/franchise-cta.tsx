import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { WaxSeal, CaravanSilhouette, UnderlineSquiggle } from "@/components/decor/caravan";
import { site } from "@/lib/site";

const steps = [
  { num: "01", title: "Başvuru", text: "Bölge, iletişim ve yatırım bilgisi." },
  { num: "02", title: "Görüşme", text: "Kapasite ve lokasyon değerlendirmesi." },
  { num: "03", title: "Teslim", text: "Karavan, ekipman ve yerinde eğitim." },
];

export default function FranchiseCta() {
  return (
    <section className="relative bg-red py-24 md:py-32 overflow-hidden text-bone">
      {/* Large outline caravan */}
      <CaravanSilhouette className="absolute -bottom-6 -left-12 w-[520px] text-bone/15 pointer-events-none" />
      {/* Diagonal grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-ink) 0 1px, transparent 1px 16px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-bone/80 font-bold">
                Section 06 · Franchise
              </span>
              <span className="h-px w-24 bg-bone/30" />
            </div>

            <h2 className="display-font text-bone leading-[0.92] text-[52px] md:text-[96px] font-semibold tracking-[-0.02em]">
              Üç adım,
              <span className="block italic font-[450] relative inline-block">
                kendi
                <UnderlineSquiggle className="absolute -bottom-2 left-0 right-0 h-3 text-ink" />
              </span>
              <span className="block italic font-[450]">karavanın.</span>
            </h2>

            <p className="mt-8 text-lg md:text-xl text-bone/85 leading-[1.65] max-w-xl">
              Başvurdukça başlangıç yatırımı, royalty, eğitim paketi ve bölge politikasının
              detayları kişiye özel fizibilite raporunda paylaşılır.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="relative bg-bone text-ink rounded-2xl p-6 border border-ink/10"
                >
                  <span className="display-font text-5xl font-semibold text-red/30 absolute top-4 right-5">
                    {s.num}
                  </span>
                  <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                    Adım {s.num}
                  </p>
                  <p className="display-font text-xl font-semibold mt-1">{s.title}</p>
                  <p className="text-ink-2 text-sm mt-2 opacity-85 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/franchise" className="btn-ink">
                Başvuru formu <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${site.phones[0].value}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold border border-bone/40 text-bone hover:bg-bone hover:text-ink transition-colors"
              >
                <Phone className="w-4 h-4" /> {site.phones[0].display}
              </a>
            </div>
          </div>

          {/* Ticket card */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative bg-bone text-ink rounded-[28px] shadow-2xl overflow-hidden">
              {/* Ticket perforation (middle) */}
              <div
                aria-hidden
                className="absolute left-0 right-0 h-6 flex items-center justify-between px-0"
                style={{ top: "62%" }}
              >
                <span className="block h-6 w-6 rounded-full bg-red -ml-3" />
                <div className="flex-1 border-t-2 border-dashed border-ink/20 mx-2" />
                <span className="block h-6 w-6 rounded-full bg-red -mr-3" />
              </div>

              {/* Top */}
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted">
                    Admission № 001
                  </span>
                  <WaxSeal className="w-14 h-14 text-red" text="Yatırım · Paketi" />
                </div>

                <p className="eyebrow mb-2">Franchise</p>
                <h3 className="display-font text-3xl md:text-4xl font-semibold leading-tight">
                  Yatırım Özeti
                </h3>

                <dl className="mt-8 space-y-5">
                  {[
                    ["Başlangıç yatırımı", "Coming soon"],
                    ["Aylık royalty", "Coming soon"],
                    ["Eğitim paketi", "Coming soon"],
                    ["Bölge politikası", "Türkiye geneli"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline gap-3 pb-3 border-b border-dashed border-ink/20"
                    >
                      <dt className="mono-font text-[11px] uppercase tracking-[0.22em] text-muted shrink-0 w-40">
                        {k}
                      </dt>
                      <span className="price-dots flex-1" aria-hidden />
                      <dd className="display-font text-base font-semibold text-ink shrink-0">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Bottom (after perforation) */}
              <div className="bg-cream px-8 md:px-10 py-6 mt-8">
                <div className="flex items-center gap-3 text-ink-2">
                  <Mail className="w-4 h-4 text-red" />
                  <a href={`mailto:${site.email}`} className="text-sm font-semibold hover:text-red transition-colors">
                    {site.email}
                  </a>
                </div>
                <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted mt-4">
                  Başvuru sonrası 3 iş günü içinde kişiye özel rapor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
