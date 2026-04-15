import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Konum() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 border-t border-smoke">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1fr_1.3fr] items-start">
          <div>
            <p className="eyebrow mb-5">Nerede?</p>
            <h2 className="display-font text-[clamp(2rem,5.5vw,3.75rem)] text-bone leading-[1.05] tracking-tight">
              Bolu Dağı&apos;nın
              <br />
              <span className="italic text-ember">tam göbeğinde</span>.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-bone-soft max-w-md">
              İstanbul–Ankara yolunun en bilinen molası. D100 Bakacak Mevki,
              Kaynaşlı çıkışından 2 dakika. Geniş otopark, TIR konaklama alanı,
              çocuk oyun bahçesi.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex gap-4 items-start">
                <span className="shrink-0 w-10 h-10 inline-flex items-center justify-center border border-ember/60 text-ember">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="eyebrow-mute mb-1">Adres</p>
                  <p className="text-[15px] text-bone leading-snug">
                    {site.address.line}
                    <br />
                    {site.address.district} / {site.address.city}
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="shrink-0 w-10 h-10 inline-flex items-center justify-center border border-ember/60 text-ember">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <p className="eyebrow-mute mb-1">Çalışma Saatleri</p>
                  <p className="text-[15px] text-bone leading-snug">
                    7 gün · 24 saat
                    <br />
                    <span className="text-bone-mute text-[13px]">
                      Yılbaşı ve bayramlar dahil
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="shrink-0 w-10 h-10 inline-flex items-center justify-center border border-ember/60 text-ember">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="eyebrow-mute mb-1">Rezervasyon</p>
                  <a
                    href={`tel:${site.phones[0].value}`}
                    className="text-[15px] text-bone hover:text-ember leading-snug block"
                  >
                    {site.phones[0].display}
                  </a>
                  <a
                    href={`tel:${site.phones[1].value}`}
                    className="text-[15px] text-bone hover:text-ember leading-snug block"
                  >
                    {site.phones[1].display}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={site.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember mt-10"
            >
              <Navigation className="w-4 h-4" />
              Google Maps&apos;te Aç
            </a>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[560px] border border-smoke overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Bolu+Dağı+İbrahimin+Yeri+Bakacak+Mevki+Kaynaşlı+Düzce&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="İbrahim'in Yeri Konum Haritası"
            />
            <div className="absolute inset-0 ring-1 ring-smoke pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
