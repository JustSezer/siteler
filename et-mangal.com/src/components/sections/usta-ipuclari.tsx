import Image from "next/image";

interface Ipucu {
  tip: string;
  author: string;
  role: string;
}

const ipuclari: Ipucu[] = [
  {
    tip: "Et ocağa gelmeden önce oda sıcaklığına inmeli. Buzdolabından direkt ateş, dışı yanmış içi çiğ bir fatura keser.",
    author: "Bolu'dan bir usta",
    role: "30 yıllık köz ocağı",
  },
  {
    tip: "Kömürün hazır olduğunu alevlerden değil, üzerini kaplayan kül tabakasından anlarsın. Grimsi kül — eti ocağa çağırır.",
    author: "Erzurumlu cağ ustası",
    role: "Geleneksel çevirme",
  },
  {
    tip: "Eti bıçakla kesme testi yapmak amatörlüktür. Parmağınla bas: yumuşaksa rare, hafif direnç medium, sertse iyi pişmiş.",
    author: "İstanbul steak ustası",
    role: "Kuru dinlendirme atölyesi",
  },
];

export default function UstaIpuclari() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-paper-warm border-y border-rule paper-grain">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] lg:gap-14 xl:gap-16 items-start">
          {/* Sol — foto + küçük başlık */}
          <aside className="lg:sticky lg:top-28">
            <figure className="relative aspect-[4/5] max-w-sm lg:max-w-none mx-auto lg:mx-0 overflow-hidden mb-5 sm:mb-6">
              <Image
                src="https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=85"
                alt="Közleşmiş odun kömürünün grimsi küllü yüzeyi"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </figure>
            <p className="eyebrow mb-3">Köz Başından Notlar</p>
            <h2 className="display-font text-[clamp(2rem,5.5vw,3rem)] sm:text-5xl text-ink leading-[1.05] sm:leading-[1.02] tracking-tight">
              Usta sözü —<br />
              <span className="italic text-ember font-normal">
                ateşin dili.
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-ink-soft">
              Her cümle yanmış bir parmakla, sönmüş bir közle, unutulmuş bir
              dinlendirmeyle öğrenilmiş.
            </p>
          </aside>

          {/* Sağ — alıntı sütunu */}
          <div className="relative space-y-12 sm:space-y-16">
            <span
              aria-hidden
              className="absolute -left-1 -top-8 sm:-left-4 sm:-top-12 display-font italic text-[6rem] sm:text-[9rem] leading-none text-ember/12 select-none pointer-events-none"
            >
              “
            </span>

            {ipuclari.map((i, idx) => (
              <figure
                key={idx}
                className={`relative ${
                  idx === 1 ? "lg:pl-10" : idx === 2 ? "lg:pl-4" : ""
                }`}
              >
                <blockquote className="display-font text-xl sm:text-2xl lg:text-[30px] leading-[1.4] sm:leading-[1.35] text-ink italic">
                  {i.tip}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="w-10 h-px bg-ember" />
                  <div>
                    <p className="display-font text-lg text-ink leading-none">
                      {i.author}
                    </p>
                    <p className="eyebrow-mute mt-1.5">{i.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
