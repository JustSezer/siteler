import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCta from "@/components/layout/sticky-cta";
import { menu, menuCategories } from "@/lib/data/menu";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menü",
  description: `${site.name} menüsü: Bakacak Köftesi, Bakacak Pirzolası, 40 çeşit serpme kahvaltı, Adana kebap, kuzu mangal, tarhana çorbası ve daha fazlası. 7/24 açık.`,
  alternates: { canonical: `${site.url}/menu` },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-24">
        <header className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-14 sm:mb-20">
          <p className="eyebrow mb-5">Menü</p>
          <h1 className="display-font text-[clamp(2.5rem,9vw,5.5rem)] text-bone leading-[0.98] tracking-tight">
            Ateşe ne <span className="italic text-ember">sorulursa</span>.
          </h1>
          <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] leading-[1.78] text-bone-soft">
            Menüde kalıcı olan; imza lezzetler, köz ızgarası, serpme kahvaltı,
            çorba ve tatlılar, geleneksel içecekler. Mevsime göre küçük
            eklemeler olur — ama ocak hiç değişmez.
          </p>
        </header>

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-24">
          {menuCategories.map((cat) => {
            const items = menu.filter((m) => m.category === cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} id={cat.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-ember">
                  <h2 className="display-font text-[clamp(1.75rem,5vw,3rem)] text-bone leading-none tracking-tight">
                    {cat}
                  </h2>
                  <span className="mono-font text-[10px] uppercase tracking-[0.2em] text-bone-mute whitespace-nowrap">
                    {items.length} lezzet
                  </span>
                </div>
                <div className="grid gap-x-10 gap-y-10 sm:gap-y-12 md:grid-cols-2">
                  {items.map((item) => (
                    <article
                      key={item.slug}
                      className="group border-t border-smoke pt-5 sm:pt-6"
                    >
                      <div className="flex gap-5 items-start">
                        {item.image ? (
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-coal-2">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="96px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-smoke flex items-center justify-center">
                            <span className="display-font italic text-ember text-2xl">
                              —
                            </span>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-3 mb-2">
                            <h3 className="display-font text-xl sm:text-2xl text-bone leading-tight">
                              {item.name}
                            </h3>
                            {item.signature && (
                              <span className="mono-font text-[9px] uppercase tracking-[0.22em] text-ember shrink-0">
                                İmza
                              </span>
                            )}
                          </div>
                          <p className="text-[14px] leading-[1.78] text-bone-soft italic font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 mt-20 sm:mt-28 pt-12 border-t border-smoke text-center">
          <p className="eyebrow-mute mb-4">Hatırlatma</p>
          <p className="display-font text-2xl sm:text-3xl text-bone italic max-w-2xl mx-auto leading-snug">
            Fiyatlar mevsime göre değişir; güncel fiyat için lütfen{" "}
            <a
              href={`tel:${site.phones[0].value}`}
              className="text-ember hover:underline"
            >
              arayın
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
