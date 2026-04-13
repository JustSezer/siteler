import Link from "next/link";
import { partner } from "@/lib/partner";

export default function ClosingCTA() {
  return (
    <section
      id="kapanis"
      className="py-20 sm:py-24 lg:py-40 bg-ink text-paper relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        {/* Bölüm başlığı */}
        <div className="border-t-4 border-double border-paper/30 pt-3 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between flex-wrap gap-2 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
              Bölüm 07 · Kapanış
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-paper/60">
              Sayfa 09
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-10 lg:gap-16 items-end">
          {/* Sol: Manifesto */}
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ember mb-5 sm:mb-6">
              Editörün Bu Ay Seçtiği Mekan
            </p>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-[0.95] tracking-tight text-paper font-black mb-8 sm:mb-10">
              Bu hafta{" "}
              <em className="italic font-light text-ember">köz başına</em>{" "}
              mısın?
            </h2>

            <p className="font-body text-base sm:text-lg lg:text-xl text-paper/80 leading-relaxed max-w-xl mb-10 sm:mb-12">
              Rehberin başında durmasının kendi sebebi var:{" "}
              <strong className="text-paper">{partner.name}</strong>. Eti
              dinlendirme disiplini, közü dakikaya bölen sade bir mutfak ve
              değişmeyen bir tat. Masa istemek için bir tıklama yeter.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href={partner.reservationUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 bg-ember text-paper px-6 sm:px-7 py-3.5 sm:py-4 hover:bg-paper hover:text-ink transition-all font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold border-2 border-ember hover:border-paper"
              >
                Masa Rezervasyonu →
              </Link>
              <Link
                href={`tel:${partner.phone}`}
                className="inline-flex items-center justify-center gap-3 border-2 border-paper/40 text-paper px-6 sm:px-7 py-3.5 sm:py-4 hover:border-paper hover:bg-paper/5 transition-all font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] sm:tracking-[0.18em]"
              >
                {partner.phoneDisplay}
              </Link>
            </div>
          </div>

          {/* Sağ: Künye kart */}
          <aside className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            <div className="border border-paper/30 p-6 sm:p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-paper/60 mb-5 sm:mb-6">
                Künye · Bu Sayı
              </p>

              <dl className="space-y-4 sm:space-y-5 font-body text-[15px]">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50 mb-1">
                    Mekan
                  </dt>
                  <dd className="text-paper text-lg font-display font-bold">
                    {partner.name}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50 mb-1">
                    Konum
                  </dt>
                  <dd className="text-paper/80">{partner.address}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50 mb-1">
                    İletişim
                  </dt>
                  <dd className="text-paper/80">{partner.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50 mb-1">
                    Editör Notu
                  </dt>
                  <dd className="text-paper/80 italic font-body">
                    {partner.shortNote}.
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Alt çizgi — gazete sonu */}
        <div className="border-t-4 border-double border-paper/30 mt-16 sm:mt-20 pt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-paper/60">
          <span>Bolu Mangal Rehberi</span>
          <span>Sayı 01 · Son</span>
          <span>—∎—</span>
        </div>
      </div>
    </section>
  );
}
