import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AnnounceBar from "@/components/layout/announce-bar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim · Franchise ve Bilgi",
  description:
    "Bakacak Köfte franchise başvuru, karavan lokasyon ve kurumsal iletişim. Telefon, e-posta ve sosyal medya kanalları.",
  alternates: { canonical: "https://bakacakkofte.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <AnnounceBar />
      <Header />
      <main id="main-content">
        <section className="paper-warm grain py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="eyebrow mb-4">İletişim</p>
            <h1 className="display-font text-[42px] leading-[1.05] md:text-[64px] md:leading-[1.02] tracking-tight text-ink max-w-4xl">
              Bir soru var mı?
              <span className="block text-red italic">Bize yaz.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-2xl">
              Franchise başvurusu, karavan lokasyonu, kurumsal işbirliği ve basın talepleri
              için aşağıdaki kanalları kullanabilirsin.
            </p>
          </div>
        </section>

        <section className="bg-bone py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {site.phones.map((p) => (
                <a
                  key={p.value}
                  href={`tel:${p.value}`}
                  className="card-food rounded-2xl p-8 flex items-center gap-5 group"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red/10 text-red">
                    <Phone className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{p.label}</p>
                    <p className="display-font text-2xl font-semibold text-ink mt-1 group-hover:text-red transition-colors">
                      {p.display}
                    </p>
                  </div>
                </a>
              ))}

              <a
                href={`mailto:${site.email}`}
                className="card-food rounded-2xl p-8 flex items-center gap-5 group md:col-span-2"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red/10 text-red">
                  <Mail className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Franchise & Bilgi</p>
                  <p className="display-font text-2xl font-semibold text-ink mt-1 group-hover:text-red transition-colors">
                    {site.email}
                  </p>
                </div>
              </a>

              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="card-food rounded-2xl p-8 flex items-center gap-5 group"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red/10 text-red">
                  <InstagramIcon className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Instagram</p>
                  <p className="display-font text-2xl font-semibold text-ink mt-1 group-hover:text-red transition-colors">
                    @bakacakkofte
                  </p>
                </div>
              </a>

              <div className="card-food rounded-2xl p-8 flex items-center gap-5">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red/10 text-red">
                  <Clock className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Çalışma Saatleri</p>
                  <p className="display-font text-2xl font-semibold text-ink mt-1">
                    {site.hours}
                  </p>
                </div>
              </div>

              <div className="card-food rounded-2xl p-8 md:col-span-2">
                <div className="flex items-start gap-5">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red/10 text-red shrink-0">
                    <MapPin className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Genel Merkez</p>
                    <p className="display-font text-2xl font-semibold text-ink mt-1">
                      {site.address.line}
                    </p>
                    <p className="text-ink-2 mt-1 opacity-80">
                      {site.address.district} · {site.address.city} · {site.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ink-panel py-16 md:py-24 grain">
          <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
            <h2 className="display-font text-3xl md:text-4xl text-bone">
              Franchise için <span className="italic text-orange">ilk adım?</span>
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Başvuru için önce franchise sayfasındaki bilgileri incele; ardından telefon veya
              e-posta ile iletişime geç. Ön görüşme sonrası kişiye özel paket değerlendirmesi
              yapılır.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${site.phones[0].value}`} className="btn-red">
                <Phone className="w-4 h-4" /> Şimdi ara
              </a>
              <a href={`mailto:${site.email}`} className="btn-outline !text-bone !border-bone/30">
                <Mail className="w-4 h-4" /> E-posta gönder
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
