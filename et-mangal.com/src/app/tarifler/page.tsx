import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import { tarifler } from "@/lib/data/tarifler";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tarifler — Marinad, Sos, Garnitür, Teknik",
  description:
    "Mangalın yanında duran tarifler: yoğurtlu marinad, chimichurri, közde patlıcan, kuru tuzlama, közde biber sosu ve daha fazlası.",
  alternates: { canonical: `${site.url}/tarifler` },
};

const kinds = ["Marinad", "Sos", "Garnitür", "Teknik"] as const;

export default function TariflerPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tarifler.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.title,
    })),
  };

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <header className="max-w-[1100px] mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
          <p className="eyebrow mb-4 sm:mb-5">Tarif Kütüğü</p>
          <h1 className="display-font text-[clamp(2.6rem,10vw,5.25rem)] lg:text-[84px] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
            <span className="italic text-ember font-normal">Tarifler</span>
          </h1>
          <p className="mt-6 sm:mt-7 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] sm:leading-[1.78] text-ink-soft italic font-body">
            Marinaddan sosa, garnitürden tekniğe — etin yanında duran her şey.
            Her tarif malzeme, adım ve zaman tablosuyla birlikte.
          </p>
        </header>

        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 space-y-14 sm:space-y-20">
          {kinds.map((kind) => {
            const items = tarifler.filter((t) => t.kind === kind);
            if (items.length === 0) return null;
            return (
              <section
                key={kind}
                id={kind.toLowerCase()}
                className="scroll-mt-32"
              >
                <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b-2 border-ink">
                  <h2 className="display-font text-[clamp(1.75rem,6vw,3rem)] sm:text-5xl text-ink leading-none tracking-tight">
                    {kind}
                  </h2>
                  <span className="eyebrow-mute whitespace-nowrap">{items.length} tarif</span>
                </div>
                <div className="grid gap-x-10 gap-y-10 sm:gap-y-14 md:grid-cols-2">
                  {items.map((t) => (
                    <article key={t.slug} className="border-t border-rule pt-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="display-font text-2xl text-ink leading-tight">
                          {t.title}
                        </h3>
                        <span className="eyebrow whitespace-nowrap">
                          {t.difficulty}
                        </span>
                      </div>
                      <p className="eyebrow-mute mb-5">{t.time}</p>
                      <p className="text-[15.5px] leading-[1.78] text-ink-soft mb-6 italic font-body">
                        {t.description}
                      </p>
                      <div className="space-y-5">
                        <div>
                          <p className="eyebrow mb-3">Malzemeler</p>
                          <ul className="space-y-1.5 font-body">
                            {t.ingredients.map((ing, i) => (
                              <li
                                key={i}
                                className="text-[14.5px] text-ink-soft pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-ember before:font-bold"
                              >
                                {ing}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="eyebrow mb-3">Adımlar</p>
                          <ol className="space-y-2.5">
                            {t.steps.map((step, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="display-font italic text-ember text-lg leading-none min-w-[1.5rem]">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-[14.5px] leading-[1.75] text-ink-soft font-body">
                                  {step}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <JsonLd data={listSchema} />
    </>
  );
}
