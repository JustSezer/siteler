import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import { etCesitleri } from "@/lib/data/et-cesitleri";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Et Çeşitleri — Kesim, Yağlılık, Çekirdek Sıcaklık",
  description:
    "Dana, kuzu, tavuk ve av eti kesimleri. Her et için yağlılık, ideal sıcaklık, dinlendirme süresi ve usta notu tablosu.",
  alternates: { canonical: `${site.url}/et-cesitleri` },
};

const groups = ["Dana", "Kuzu", "Tavuk", "Av"] as const;

export default function EtCesitleriPage() {
  const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Et Çeşitleri Rehberi",
    description:
      "Dana, kuzu, tavuk ve av eti kesimleri için teknik rehber.",
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <header className="max-w-[1100px] mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
          <p className="eyebrow mb-4 sm:mb-5">Et Kütüphanesi</p>
          <h1 className="display-font text-[clamp(2.6rem,10vw,5.25rem)] lg:text-[84px] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
            Et{" "}
            <span className="italic text-ember font-normal">Çeşitleri</span>
          </h1>
          <p className="mt-6 sm:mt-7 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] sm:leading-[1.78] text-ink-soft italic font-body">
            Her kesimin kendi kuralı var. Bu kütüphane etin kesim bölgesini,
            yağlılığını, en uygun pişirme yöntemini ve çekirdek sıcaklığını
            tek sayfada toplar.
          </p>
        </header>

        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 space-y-14 sm:space-y-20">
          {groups.map((g) => {
            const items = etCesitleri.filter((e) => e.group === g);
            return (
              <section key={g} id={g.toLowerCase()} className="scroll-mt-32">
                <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b-2 border-ink">
                  <h2 className="display-font text-[clamp(1.75rem,6vw,3rem)] sm:text-5xl text-ink leading-none tracking-tight">
                    {g}
                  </h2>
                  <span className="eyebrow-mute whitespace-nowrap">{items.length} kesim</span>
                </div>
                <div className="grid gap-x-10 gap-y-10 sm:gap-y-12 md:grid-cols-2">
                  {items.map((e) => (
                    <article
                      key={e.slug}
                      className="border-t border-rule pt-6"
                    >
                      <div className="flex items-start justify-between mb-2 gap-4">
                        <h3 className="display-font text-2xl text-ink leading-tight">
                          {e.name}
                        </h3>
                        <span className="eyebrow whitespace-nowrap">
                          yağ · {e.fat}
                        </span>
                      </div>
                      <p className="text-[13px] uppercase tracking-[0.14em] text-ink-mute font-sans mb-5">
                        {e.cut}
                      </p>
                      <dl className="text-[14.5px] leading-relaxed space-y-2 mb-5 font-body">
                        <div className="flex gap-3">
                          <dt className="text-ink-mute min-w-[100px]">
                            En iyi yöntem
                          </dt>
                          <dd className="text-ink-soft">{e.bestFor}</dd>
                        </div>
                        <div className="flex gap-3">
                          <dt className="text-ink-mute min-w-[100px]">
                            Çekirdek
                          </dt>
                          <dd className="text-ember font-medium">
                            {e.coreTemp}
                          </dd>
                        </div>
                        <div className="flex gap-3">
                          <dt className="text-ink-mute min-w-[100px]">
                            Dinlendirme
                          </dt>
                          <dd className="text-ink-soft">{e.restMin}</dd>
                        </div>
                      </dl>
                      <p className="pt-4 border-t border-rule-soft text-[14px] leading-[1.75] text-ink-soft italic font-body">
                        {e.note}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <JsonLd data={tableSchema} />
    </>
  );
}
