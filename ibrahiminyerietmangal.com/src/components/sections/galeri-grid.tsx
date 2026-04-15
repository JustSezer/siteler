import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galeri } from "@/lib/data/galeri";

export default function GaleriGrid() {
  const fotos = galeri.slice(0, 8);

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 border-t border-smoke">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Objektiften</p>
            <h2 className="display-font text-[clamp(1.75rem,4.5vw,3rem)] text-bone leading-[1.1] tracking-tight max-w-xl">
              Köz, sofra ve <span className="italic text-ember">saat beş</span>.
            </h2>
          </div>
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 mono-font text-[11px] uppercase tracking-[0.18em] text-ember hover:text-ember-soft"
          >
            Tüm Galeri <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {fotos.map((f, i) => (
            <figure
              key={f.src}
              className={`relative overflow-hidden bg-coal-2 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-smoke pointer-events-none" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
