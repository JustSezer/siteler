import { Award, Flame, Users, Shield } from "lucide-react";

const pillars = [
  { icon: Award, label: "30+ yıl usta geleneği", detail: "1990'lardan bugüne kesintisiz" },
  { icon: Flame, label: "Bolu Dağı köz reçetesi", detail: "Meşe köz + baharat oranı standart" },
  { icon: Users, label: "3 kuşak aile ocağı", detail: "Tarif aynı, standardize edildi" },
  { icon: Shield, label: "Standardize kalite", detail: "Her karavanda aynı ürün, aynı servis" },
];

export default function MarkaGucu() {
  return (
    <section className="relative bg-cream py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: photo collage */}
          <div className="md:col-span-5 relative">
            {/* Main photo */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-ink shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/bakacak-kofte.jpg)" }}
                aria-hidden
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 text-bone">
                <p className="text-xs uppercase tracking-wider font-bold text-red-soft">
                  Bolu Dağı · 1990'lar
                </p>
                <p className="display-font text-2xl mt-1">Bakacak ocağı</p>
              </div>
              <div className="absolute top-5 right-5 bg-bone text-ink px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl rotate-[6deg]">
                ★ 30+ yıl
              </div>
            </div>

            {/* Small photo overlay */}
            <div className="hidden md:block absolute -bottom-10 -right-8 w-48 aspect-[3/4] rounded-2xl overflow-hidden border-[6px] border-cream shadow-2xl rotate-[-5deg]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/bakacak-pirzola.jpg)" }}
                aria-hidden
              />
            </div>

            {/* Year badge */}
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-red text-bone rounded-full flex flex-col items-center justify-center shadow-xl rotate-[-12deg]">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">Since</span>
              <span className="display-font text-2xl leading-none">1990</span>
            </div>
          </div>

          {/* Right: content */}
          <div className="md:col-span-7 md:pl-8">
            <span className="inline-flex items-center gap-2 bg-gold text-ink rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Marka gücü
            </span>
            <h2 className="display-font text-ink leading-[1.02] text-[40px] md:text-[60px]">
              Bayi, boş bir isim almıyor.
              <span className="block text-red">Test edilmiş bir reçete alıyor.</span>
            </h2>

            <p className="mt-7 text-ink-soft text-lg leading-[1.7]">
              Bakacak Köftesi, Bolu Dağı Bakacak Mevki&apos;de 1990&apos;larda küçük bir aile
              ocağı olarak başladı. Yoldan geçenin imza mola durağına dönüştü; aynı baharat
              ve aynı köz disipliniyle üç kuşak pişirildi. 2026&apos;da bu reçeteyi karavan
              modeliyle yaygınlaştırıyoruz.
            </p>

            <blockquote className="mt-8 pl-6 border-l-4 border-red italic text-ink text-xl leading-relaxed">
              &ldquo;Tarif aynı &mdash; sadece ocak yerinde duramaz hâle geldi.&rdquo;
              <cite className="block mt-3 text-sm not-italic font-bold text-muted uppercase tracking-wider">
                Halil İbrahim · Kurucu usta
              </cite>
            </blockquote>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-start gap-4 bg-bone border border-peach rounded-xl p-4 hover:border-ink transition-colors"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-ink text-red-soft shrink-0">
                    <p.icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-ink text-sm leading-tight">{p.label}</p>
                    <p className="text-xs text-muted mt-1">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
