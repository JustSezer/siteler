import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tiles = [
  { src: "/images/bakacak-kofte.jpg", alt: "Köz ateşinde Bakacak Köftesi", label: "Bakacak Köftesi", no: "01" },
  { src: "/images/bakacak-pirzola.jpg", alt: "Kuzu pirzola", label: "Bakacak Pirzolası", no: "02" },
  { src: "/images/bakacak-kofte-hero.jpg", alt: "Servis anı", label: "Karavan Servisi", no: "03" },
  { src: null, alt: "Kömür ateşi", label: "Köz Ateşi", no: "04" },
  { src: null, alt: "Karavan dış", label: "Karavan Modeli", no: "05" },
  { src: null, alt: "Ekip", label: "İki Kişi, Tek Ocak", no: "06" },
];

export default function GalleryGrid() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-ink font-bold">
                Section 04 · Galeri
              </span>
              <span className="h-px w-24 bg-ink/20" />
            </div>
            <h2 className="display-font text-ink leading-[0.95] text-[48px] md:text-[80px] font-semibold tracking-[-0.02em]">
              Karavandan <span className="italic font-[450] text-red">kareye.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pb-6">
            <p className="text-ink-2 leading-[1.7] opacity-85">
              Servisin her adımı, karavan mutfağından tabağa kadar aynı özenle sahneleniyor.
              Yeni lokasyonlar açıldıkça galeri büyüyor.
            </p>
          </div>
        </div>

        {/* Mosaic */}
        <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-5 min-h-[520px] md:min-h-[720px]">
          {tiles.map((t, i) => {
            const span = [
              "col-span-3 row-span-4",           // 01 — big
              "col-span-3 row-span-3",           // 02
              "col-span-2 row-span-2",           // 03
              "col-span-2 row-span-3",           // 04
              "col-span-2 row-span-2",           // 05
              "col-span-3 row-span-2",           // 06
            ][i];
            return (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-ink ${span}`}
              >
                {t.src ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] group-hover:scale-110"
                    style={{ backgroundImage: `url(${t.src})` }}
                    aria-label={t.alt}
                    role="img"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink via-ink-2 to-red-deep">
                    <span className="display-font text-[5rem] md:text-[7rem] italic text-red-soft/30 leading-none">
                      {t.label.charAt(0)}
                    </span>
                  </div>
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="mono-font text-[10px] uppercase tracking-[0.24em] text-bone/70">
                      Plate № {t.no}
                    </span>
                    <p className="display-font text-xl md:text-2xl text-bone font-semibold italic mt-1">
                      {t.label}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/karavan" className="btn-outline">
            Karavan detaylarına git <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
