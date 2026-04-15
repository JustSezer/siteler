import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCta from "@/components/layout/sticky-cta";
import { galeri } from "@/lib/data/galeri";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galeri",
  description: `${site.name} galerisi — Bakacak Köftesi, pirzola, serpme kahvaltı, mekan ve köz ateşi fotoğrafları.`,
  alternates: { canonical: `${site.url}/galeri` },
};

export default function GaleriPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-24">
        <header className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-14 sm:mb-20">
          <p className="eyebrow mb-5">Galeri</p>
          <h1 className="display-font text-[clamp(2.5rem,9vw,5.5rem)] text-bone leading-[0.98] tracking-tight">
            Ateş, sofra ve <span className="italic text-ember">anlar</span>.
          </h1>
          <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] leading-[1.78] text-bone-soft">
            Mekanımızdan, ocağımızdan ve sofralarımızdan kareler. Gerçek zamanlı
            güncellemeler için Instagram ve YouTube kanalımızı takip edin.
          </p>
        </header>

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {galeri.map((f, i) => (
              <figure
                key={f.src + i}
                className="relative aspect-square overflow-hidden bg-coal-2 group"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 ring-1 ring-smoke pointer-events-none" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-coal via-coal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="mono-font text-[10px] uppercase tracking-[0.18em] text-bone-soft">
                    {f.kind}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
