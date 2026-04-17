import { WaxSeal, UnderlineSquiggle, ForkKnifeMark } from "@/components/decor/caravan";

export default function Hikaye() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* dotted background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-ink) 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
          {/* Photo collage column */}
          <div className="col-span-12 md:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-ink shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/bakacak-kofte.jpg)" }}
                aria-hidden
              />
              <div className="absolute top-5 left-5 mono-font text-[10px] uppercase tracking-[0.24em] text-bone/80 bg-ink/60 backdrop-blur px-3 py-1.5 rounded-full">
                Bolu Dağı · 1990'lar
              </div>
            </div>

            {/* Secondary photo (bottom right) */}
            <div className="hidden md:block absolute -bottom-10 -right-10 w-52 aspect-[3/4] rounded-[20px] overflow-hidden border-[6px] border-cream shadow-2xl rotate-[6deg]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/bakacak-pirzola.jpg)" }}
                aria-hidden
              />
            </div>

            {/* Wax seal top-right */}
            <div className="absolute -top-8 -right-6 w-28 h-28 bg-cream rounded-full p-2 shadow-xl">
              <WaxSeal className="w-full h-full text-red" text="Nesiller boyu · Ocak" />
            </div>
          </div>

          {/* Text column */}
          <div className="col-span-12 md:col-span-6 md:pl-8">
            <div className="flex items-center gap-4 mb-6">
              <ForkKnifeMark className="w-5 h-5 text-red" />
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-ink font-bold">
                Section 01 · Hikâye
              </span>
              <span className="h-px flex-1 bg-ink/20 max-w-16" />
            </div>

            <h2 className="display-font text-ink leading-[0.95] text-[44px] md:text-[68px] font-semibold tracking-[-0.02em]">
              Bir ocak,
              <span className="block italic font-[450] relative">
                üç nesil
                <UnderlineSquiggle className="absolute -bottom-2 left-0 right-[40%] h-3 text-red" />
              </span>
              sonra <span className="italic text-red font-[450]">yola çıktı.</span>
            </h2>

            <div className="mt-8 space-y-5 text-ink-2 text-lg leading-[1.7] max-w-xl">
              <p>
                Bakacak Köftesi'nin öyküsü Bolu Dağı D100 karayolu kenarında, Bakacak
                Mevki&apos;de başlar. 1990&apos;larda kurulan küçük bir aile ocağı; zamanla yolun
                en bilinen mola duraklarından birine dönüştü.
              </p>
              <p>
                Kuşaklar boyu aynı tarif, aynı baharat ve aynı köz disipliniyle piştik.
                2026&apos;da ise markayı sabit bir dükkânın dışına çıkardık: aynı reçeteyi,
                aynı kıvamı koruyan <span className="font-semibold text-ink">standartlaşmış karavan modeli</span> ile
                Türkiye genelinde yola açıldık.
              </p>
            </div>

            {/* Founder quote */}
            <figure className="mt-10 pl-6 border-l-4 border-red">
              <blockquote className="display-font italic text-ink text-2xl md:text-3xl leading-[1.3]">
                &ldquo;Tarif aynı, sadece ocak yerinde duramaz hâle geldi.&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-ink text-red-soft display-font font-bold flex items-center justify-center">
                  Hİ
                </span>
                <div>
                  <p className="display-font font-semibold text-ink">Halil İbrahim</p>
                  <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted mt-0.5">
                    Kurucu usta · Bakacak ocağı
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-ink/15">
              <div>
                <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted">Kuruluş</p>
                <p className="display-font text-2xl font-semibold text-ink mt-1">1990</p>
              </div>
              <div>
                <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted">Kuşak</p>
                <p className="display-font text-2xl font-semibold text-ink mt-1">3.</p>
              </div>
              <div>
                <p className="mono-font text-[10px] uppercase tracking-[0.22em] text-muted">Karavan</p>
                <p className="display-font text-2xl font-semibold text-ink mt-1">2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
