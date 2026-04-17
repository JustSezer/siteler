import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BakacakSpotlight() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-smoke-deep">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Görsel */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-bark-soft">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85"
                alt="Bakacak mevkiinde meşe közünde pişen köfte ve pirzola"
                fill
                className="object-cover saturate-[0.85]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-transparent" />
            </div>
            {/* Köşe etiketi */}
            <div className="absolute top-4 left-4 bg-forest text-smoke px-3 py-1.5 rounded font-mono text-[9px] uppercase tracking-[0.2em]">
              Durak Özel
            </div>
          </div>

          {/* İçerik */}
          <div>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-forest mb-4">
              Öne Çıkan · Bakacak Mevkii
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-5 leading-tight">
              Bakacak Köfte: D100&apos;ün
              <br />
              Yarım Asırlık Lezzeti
            </h2>

            <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed mb-4">
              Dana ve kuzu kıymasının özel oranlarda harmanlanmasıyla
              hazırlanan Bakacak köftesi, meşe kömürü üzerinde yavaş
              pişirilerek tütsümsü bir derinlik kazanır. Kaynaşlı&apos;nın
              Bakacak mevkiinde onlarca yıldır aynı gelenekle hazırlanıyor.
            </p>

            <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed mb-6">
              Taze günlük etler, el yapımı harç, közlenmiş biber ve domates
              eşliğinde — yolun kenarında durmanız için en güçlü sebep.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/bakacak-rehberi" className="btn-forest">
                Bakacak Rehberi
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/blog/bakacak-kofte-tarifi"
                className="inline-flex items-center gap-2 font-body text-sm text-copper hover:text-copper-glow transition-colors py-3 underline underline-offset-4 decoration-copper/40 hover:decoration-copper"
              >
                Tarifi Oku
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
