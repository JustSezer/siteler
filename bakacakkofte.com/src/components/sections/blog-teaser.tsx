import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { UnderlineSquiggle } from "@/components/decor/caravan";

const posts = [
  {
    slug: "karavan-franchise-nedir",
    title: "Karavan franchise nedir, yatırımcıya ne getirir?",
    excerpt: "Sabit restoran modeline alternatif olan mobil konseptin avantajları, riskleri ve geri dönüş hesabı.",
    date: "Yakında",
    readTime: "6 dk",
    tag: "Franchise",
    tint: "from-red via-red-deep to-ink",
  },
  {
    slug: "kofteden-marka-olusturmak",
    title: "Köfteden marka oluşturmak: Bakacak hikâyesi",
    excerpt: "Bolu Dağı'nda 30 yılda şekillenen bir tarif, bugün Türkiye geneline yayılabilecek sistem hâline nasıl dönüştü?",
    date: "Yakında",
    readTime: "8 dk",
    tag: "Marka",
    tint: "from-gold via-gold-deep to-ink",
  },
  {
    slug: "lokasyon-secimi",
    title: "Karavan için doğru lokasyon nasıl seçilir?",
    excerpt: "Trafik, izin, görünürlük, yerel rekabet — lokasyon seçiminde kritik unsurlar.",
    date: "Yakında",
    readTime: "5 dk",
    tag: "Operasyon",
    tint: "from-leaf via-ink-2 to-ink",
  },
];

export default function BlogTeaser() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-ink font-bold">
                Section 07 · Yazılar
              </span>
              <span className="h-px w-24 bg-ink/20" />
            </div>
            <h2 className="display-font text-ink leading-[0.95] text-[48px] md:text-[80px] font-semibold tracking-[-0.02em]">
              Karavan franchise
              <span className="block italic font-[450]">
                <span className="relative inline-block text-red">
                  notları.
                  <UnderlineSquiggle className="absolute -bottom-2 left-0 right-0 h-3" />
                </span>
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pb-6">
            <p className="text-ink-2 leading-[1.7] opacity-85">
              Yatırımcılara yönelik rehber yazılar yakın zamanda burada yayımlanacak.
              Şimdilik başlıkları paylaşıyoruz.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <article
              key={p.slug}
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-cream border border-peach"
            >
              <div className={`relative aspect-[5/3] flex items-center justify-center bg-gradient-to-br ${p.tint}`}>
                <span className="display-font text-[6rem] md:text-[7rem] italic text-bone/25 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="badge-hot">{p.tag}</span>
                </div>
                <div className="absolute bottom-4 right-4 mono-font text-[10px] uppercase tracking-[0.22em] text-bone/70">
                  № 0{i + 1}
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-muted mb-4 mono-font uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {p.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {p.readTime}
                  </span>
                </div>
                <h3 className="display-font text-xl md:text-2xl font-semibold text-ink leading-[1.2] mb-3">
                  {p.title}
                </h3>
                <p className="text-ink-2 text-sm leading-[1.7] opacity-80 flex-1">
                  {p.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 mono-font text-[11px] uppercase tracking-[0.22em] text-red font-bold">
                  Yakında <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/iletisim" className="btn-outline">
            Bültene kayıt için iletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
