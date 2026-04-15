import type { Metadata } from "next";
import { PlaySquare, Newspaper, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCta from "@/components/layout/sticky-cta";
import { basinda } from "@/lib/data/basinda";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Basında",
  description: `${site.name} ulusal basında — NTV, TRT, Hürriyet, Milliyet, CNN Türk ve daha fazlasında yer alan haber ve röportajlar.`,
  alternates: { canonical: `${site.url}/basinda` },
};

export default function BasindaPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-24">
        <header className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-14 sm:mb-20">
          <p className="eyebrow-gold mb-5">Basında Biz</p>
          <h1 className="display-font text-[clamp(2.5rem,9vw,5.5rem)] text-bone leading-[0.98] tracking-tight">
            Ulusal basında, <br />
            <span className="italic text-gold">otuz yıldır</span>.
          </h1>
          <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] leading-[1.78] text-bone-soft">
            Bolu Dağı yolcusu olan herkesin bildiği bu ocak, ulusal basının da
            defalarca rotasına girdi. Aşağıdaki yayınlara tıklayarak haber veya
            video kaynağına ulaşabilirsiniz.
          </p>
        </header>

        <section className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <ol className="border-t border-smoke">
            {basinda.map((b, i) => {
              const Icon = b.kind === "video" ? PlaySquare : Newspaper;
              return (
                <li key={i} className="border-b border-smoke">
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-5 md:grid-cols-[48px_180px_1fr_auto] items-start py-8 sm:py-10 px-2 sm:px-4 hover:bg-coal-2/60 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 border border-smoke group-hover:border-gold text-bone-soft group-hover:text-gold transition-colors">
                      <Icon className="w-4 h-4" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="display-font text-2xl sm:text-3xl text-gold italic leading-none">
                        {b.outlet}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-wider text-bone-mute font-medium">
                        {b.kind === "video" ? "Video Haber" : "Yazılı Haber"}
                      </p>
                    </div>
                    <div>
                      <h3 className="display-font text-xl sm:text-2xl text-bone leading-snug mb-3 group-hover:text-gold-soft transition-colors">
                        &ldquo;{b.title}&rdquo;
                      </h3>
                      <p className="text-[14.5px] leading-[1.78] text-bone-soft italic max-w-2xl">
                        {b.note}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 md:justify-end md:pt-2">
                      <span className="text-[11px] uppercase tracking-wider text-bone-mute font-medium whitespace-nowrap">
                        {b.year}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-bone-mute group-hover:text-gold transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </a>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 pt-10 border-t border-smoke text-center">
            <p className="text-[14px] text-bone-mute italic">
              Daha fazla haber ve röportaj için{" "}
              <a
                href={site.brandUrl + "/basinda"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                ibrahiminyeri.com/basinda
              </a>{" "}
              sayfasını ziyaret edin.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
