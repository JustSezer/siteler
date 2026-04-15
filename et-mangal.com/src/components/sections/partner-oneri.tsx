import Image from "next/image";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { partner } from "@/lib/partner";

export default function PartnerOneri() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-paper-warm border-y border-rule">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
          <figure className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden">
            <Image
              src="/images/ibrahimin-yeri-signature.webp"
              alt={`${partner.name} — ahşap tahtada köz ızgara et tabağı`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute left-5 bottom-5 bg-paper/95 backdrop-blur-sm px-4 py-3 border border-ink/10">
              <p className="eyebrow-mute leading-none mb-1">Editörün Seçimi</p>
              <p className="display-font italic text-lg text-ember leading-none">
                Bu Sezon
              </p>
            </div>
          </figure>

          <div className="relative">
            <p className="eyebrow mb-5">Önerilen Mekan</p>
            <h2 className="display-font text-[clamp(2rem,6vw,3.5rem)] lg:text-[56px] leading-[1.05] sm:leading-[1.02] text-ink tracking-tight">
              Rehberi okuduktan sonra,
              <br />
              <span className="italic text-ember font-normal">
                ateşi tadın.
              </span>
            </h2>

            <p className="mt-6 sm:mt-7 text-[16px] sm:text-[17px] leading-[1.75] sm:leading-[1.78] text-ink-soft max-w-xl font-body italic">
              {partner.note} {partner.city}&apos;da köz başında dana pirzola ve
              kuzu şiş için editörümüzün bu sezon listelediği tek mekan
              <strong className="text-ink not-italic font-semibold">
                {" "}
                {partner.name}
              </strong>
              . Rezervasyon önerilir.
            </p>

            <dl className="mt-7 sm:mt-8 grid gap-4 sm:gap-5 grid-cols-2 max-w-lg">
              <div>
                <dt className="eyebrow-mute mb-1">Mekan</dt>
                <dd className="display-font text-xl text-ink">
                  {partner.name}
                </dd>
              </div>
              <div>
                <dt className="eyebrow-mute mb-1">Şehir</dt>
                <dd className="display-font text-xl text-ink inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ember" />
                  {partner.city}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="eyebrow-mute mb-1">Uzmanlık</dt>
                <dd className="text-[15px] text-ink-soft italic font-body">
                  Dana pirzola · Kuzu şiş · Köz ızgara
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={partner.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber"
              >
                Rezervasyon
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={`tel:${partner.phone}`} className="btn-line">
                <Phone className="w-4 h-4" />
                {partner.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
