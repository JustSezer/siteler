import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden grain pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <Image
          src="/images/bakacak-kofte-hero.jpg"
          alt="Bakacak Köftesi — köz üzerinde"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "contrast(1.05) saturate(1.1)" }}
        />
        {/* Düşük çözünürlüklü kaynak görselin pikselleşmesini gizlemek için koyu overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-coal/95 via-coal/65 to-coal/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/50 to-coal/20" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ember border border-ember/60 px-3 py-1.5 tracking-wide">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ember" />
              </span>
              Şu An Açık
            </span>
            <span className="text-[12px] text-bone-mute tracking-wide">
              Bolu Dağı · Est. 1990
            </span>
          </div>

          <h1 className="display-font text-[clamp(3rem,9vw,6.75rem)] leading-[0.92] text-bone tracking-tight text-glow">
            Bolu Dağı&apos;nın
            <br />
            <span className="italic text-ember">közü burada</span> yanar.
          </h1>

          <p className="mt-8 sm:mt-10 text-[17px] sm:text-[19px] leading-[1.75] text-bone-soft max-w-xl font-light">
            D100 karayolunun kıyısında, 7 gün 24 saat açık. Bakacak Köftesi, köz
            pirzola ve 40 çeşit serpme kahvaltı; 1990&apos;dan beri değişmeyen tek
            bir şey var — <span className="text-bone">ateşin sadakati</span>.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap gap-3">
            <a href={`tel:${site.phones[0].value}`} className="btn-ember">
              <Phone className="w-4 h-4" />
              Rezervasyon
            </a>
            <a
              href={site.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MapPin className="w-4 h-4" />
              Yol Tarifi
            </a>
            <Link href="/menu" className="btn-ghost">
              Menü
            </Link>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl pt-6 sm:pt-8 border-t border-smoke">
            <div>
              <div className="flex items-center gap-1.5 mb-2 text-ember">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Açık
                </span>
              </div>
              <p className="display-font text-2xl sm:text-3xl text-bone leading-none">
                7/24
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-2 text-ember">
                <Star className="w-3.5 h-3.5 fill-ember" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Google
                </span>
              </div>
              <p className="display-font text-2xl sm:text-3xl text-bone leading-none">
                4.7
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-2 text-ember">
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Kuruluş
                </span>
              </div>
              <p className="display-font text-2xl sm:text-3xl text-bone leading-none">
                1990
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60">
        <span className="text-[11px] text-bone-mute tracking-wider">
          Keşfet
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-bone-mute to-transparent" />
      </div>
    </section>
  );
}
