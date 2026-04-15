import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tarifler } from "@/lib/data/tarifler";

const recipeImages = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=85",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=85",
  "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=900&q=85",
];

export default function OneCikanTarifler() {
  const ones = tarifler.slice(0, 3);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 flex flex-wrap items-end justify-between gap-5 sm:gap-6">
          <div>
            <p className="eyebrow mb-3 sm:mb-4">Tarif Kütüğü</p>
            <h2 className="display-font text-[clamp(2rem,5.5vw,3rem)] sm:text-5xl text-ink leading-[1.05] sm:leading-[1.02] tracking-tight max-w-2xl">
              Yanında duran,{" "}
              <span className="italic text-ember font-normal">
                sessiz yıldızlar.
              </span>
            </h2>
          </div>
          <Link
            href="/tarifler"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-ember hover:text-amber transition-colors font-sans font-semibold"
          >
            Tüm Tarifler <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          {/* Ana öne çıkan */}
          <article className="group">
            <Link href="/tarifler" className="block">
              <figure className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={recipeImages[0]}
                  alt={ones[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </figure>
              <div className="flex items-center gap-3 eyebrow mb-3">
                <span>{ones[0].kind}</span>
                <span className="w-6 h-px bg-ember" />
                <span className="text-ink-mute">{ones[0].time}</span>
              </div>
              <h3 className="display-font text-2xl sm:text-3xl lg:text-4xl text-ink leading-[1.1] sm:leading-[1.05] group-hover:text-ember transition-colors">
                {ones[0].title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft max-w-xl italic font-body">
                {ones[0].description}
              </p>
            </Link>
          </article>

          {/* Yan sütun — 2 küçük */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {ones.slice(1).map((t, i) => (
              <article key={t.slug} className="group">
                <Link href="/tarifler" className="block">
                  <figure className="relative aspect-[5/4] overflow-hidden mb-5">
                    <Image
                      src={recipeImages[i + 1]}
                      alt={t.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </figure>
                  <div className="flex items-center gap-3 eyebrow mb-2">
                    <span>{t.kind}</span>
                    <span className="w-5 h-px bg-ember" />
                    <span className="text-ink-mute">{t.time}</span>
                  </div>
                  <h3 className="display-font text-2xl text-ink leading-tight group-hover:text-ember transition-colors">
                    {t.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
