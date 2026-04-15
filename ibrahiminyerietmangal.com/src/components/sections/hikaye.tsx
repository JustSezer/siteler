import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hikaye() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 border-t border-smoke smoke-gradient grain">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr] items-center">
          <figure className="relative aspect-[4/5] lg:aspect-[3/4]">
            <Image
              src="/images/mekan-disari.jpg"
              alt="İbrahim'in Yeri dış cephe"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-smoke pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-coal border border-ember px-5 py-4 sm:px-6 sm:py-5 ember-glow">
              <p className="eyebrow mb-1">Sessiz Rekor</p>
              <p className="display-font text-2xl sm:text-3xl text-bone leading-none">
                34 <span className="italic text-ember">yıl</span>
              </p>
              <p className="mono-font text-[9px] uppercase tracking-[0.2em] text-bone-mute mt-1">
                hiç kapanmadı
              </p>
            </div>
          </figure>

          <div>
            <p className="eyebrow-gold mb-6">Hikayemiz</p>
            <h2 className="display-font text-[clamp(2rem,5.5vw,3.75rem)] text-bone leading-[1.05] tracking-tight">
              Ateş yandığından beri
              <br />
              <span className="italic text-ember">hiç sönmedi</span>.
            </h2>
            <div className="mt-8 space-y-5 text-[15.5px] sm:text-[16px] leading-[1.85] text-bone-soft max-w-xl">
              <p>
                1990&apos;da Bolu Dağı&apos;nın D100 yolunun kıyısında küçük bir
                köfte ocağı olarak açıldı İbrahim&apos;in Yeri. İlk gün bir sac,
                bir köz ve İstanbul-Ankara arasını dolaşan bir avuç tırcı vardı.
                Bugün aynı köz yanıyor, aynı tarif uygulanıyor, aynı kapı hiç
                kapanmıyor.
              </p>
              <p>
                Mekanın adını veren İbrahim Usta artık oğullarıyla birlikte
                mutfaktadır. Bakacak Köftesi&apos;nin baharatı hâlâ elle
                hazırlanır, kuzu Bolu yaylasından, domates mevsiminde mevsim
                dışı asla kullanılmaz. Nesiller değişti — ateş değişmedi.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <div className="border-l border-ember pl-4">
                <p className="display-font text-3xl sm:text-4xl text-bone leading-none">34</p>
                <p className="mono-font text-[9px] uppercase tracking-[0.18em] text-bone-mute mt-2">
                  Yıllık Ocak
                </p>
              </div>
              <div className="border-l border-ember pl-4">
                <p className="display-font text-3xl sm:text-4xl text-bone leading-none">40+</p>
                <p className="mono-font text-[9px] uppercase tracking-[0.18em] text-bone-mute mt-2">
                  Kahvaltı Çeşidi
                </p>
              </div>
              <div className="border-l border-ember pl-4">
                <p className="display-font text-3xl sm:text-4xl text-bone leading-none">7/24</p>
                <p className="mono-font text-[9px] uppercase tracking-[0.18em] text-bone-mute mt-2">
                  Açık
                </p>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="mt-10 inline-flex items-center gap-2 mono-font text-[11px] uppercase tracking-[0.18em] text-ember hover:text-ember-soft"
            >
              Tam Hikaye <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
