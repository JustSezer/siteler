import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FireHero() {
  return (
    <section className="relative pt-20 sm:pt-28 paper-grain">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-6 sm:pt-14 pb-14 sm:pb-20 grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 items-start">
        {/* Metin kolonu */}
        <div className="lg:pt-8 relative">
          <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
            <div className="rule-double flex-1" />
            <span className="eyebrow whitespace-nowrap text-[10px] sm:text-inherit">
              Sayı 01 · Nisan 2026
            </span>
          </div>

          <p className="eyebrow mb-5 sm:mb-6">Türkiye · Bağımsız Mangal Rehberi</p>

          <h1 className="display-font text-[clamp(2.2rem,8vw,5.6rem)] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
            Ateşi bilen,
            <br />
            eti{" "}
            <span className="italic text-ember font-normal">
              ustalaştırır.
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-lg text-[16px] sm:text-[18px] leading-[1.75] sm:leading-[1.78] text-ink-soft font-body">
            Kömür seçiminden et dinlendirmeye, marinasyondan ızgara sıcaklığına
            kadar — köz başında öğrenilmiş, sayfaya düşmüş usta notları.
            Reklamsız, bağımsız, sakin.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            <Link href="/mangal-rehberi" className="btn-amber">
              Rehbere Gir
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tarifler" className="btn-line">
              Tariflere Göz At
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-md pt-5 sm:pt-6 border-t border-rule">
            <div>
              <p className="eyebrow-mute mb-1">Bölüm</p>
              <p className="display-font text-2xl sm:text-3xl text-ink">04</p>
            </div>
            <div>
              <p className="eyebrow-mute mb-1">Et Kesimi</p>
              <p className="display-font text-2xl sm:text-3xl text-ink">12</p>
            </div>
            <div>
              <p className="eyebrow-mute mb-1">Tarif</p>
              <p className="display-font text-2xl sm:text-3xl text-ink">06</p>
            </div>
          </div>
        </div>

        {/* Görsel kolonu */}
        <div className="relative">
          <figure className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/ibrahimin-yeri-signature.webp"
              alt="İbrahim'in Yeri — ahşap tahtada köz ızgara et tabağı"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <figcaption className="absolute left-0 right-0 bottom-0 p-5 bg-gradient-to-t from-paper/95 via-paper/50 to-transparent">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink/85 font-sans">
                Foto · İbrahim&apos;in Yeri imza tabağı
              </p>
            </figcaption>
          </figure>

          {/* Küçük "pullu" yer imi */}
          <div className="absolute left-2 -top-4 sm:-left-8 sm:-top-8 bg-paper border border-ink/80 px-3 py-2 sm:px-4 sm:py-3 rotate-[-4deg] shadow-[3px_3px_0_0_rgba(28,18,10,0.9)] sm:shadow-[4px_4px_0_0_rgba(28,18,10,0.9)]">
            <p className="eyebrow-mute leading-none mb-1 text-[9px] sm:text-[10px]">Editörün Seçimi</p>
            <p className="display-font italic text-base sm:text-lg text-ember leading-none">
              Sezon Açılışı
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
