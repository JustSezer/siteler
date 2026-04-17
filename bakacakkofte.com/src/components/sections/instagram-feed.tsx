import { Heart, MessageCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const posts = [
  { src: "/images/bakacak-kofte.jpg", caption: "Bugünün ilk közü · Karavan K01", likes: "2.4k", comments: 38 },
  { src: "/images/bakacak-pirzola.jpg", caption: "Pirzola · kekik ve tuz", likes: "1.8k", comments: 22 },
  { src: "/images/bakacak-kofte-hero.jpg", caption: "Yoldan geçenin mola anı", likes: "3.1k", comments: 54 },
  { src: null, caption: "Köz başında bekleme yok", likes: "1.2k", comments: 18, tint: "from-red via-red-deep to-ink" },
  { src: null, caption: "Karavan modeli hazırlık", likes: "2.6k", comments: 41, tint: "from-gold via-gold-deep to-ink" },
  { src: null, caption: "Ayran ve şalgam", likes: "980", comments: 14, tint: "from-leaf via-ink-2 to-ink" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-cream py-20 md:py-24 border-t border-ink/10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <InstagramIcon className="w-5 h-5 text-red" />
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-ink font-bold">
                Section 09 · Günlük akış
              </span>
            </div>
            <h2 className="display-font text-ink text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              <span className="italic font-[450]">@bakacakkofte</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/bakacakkofte"
            target="_blank"
            rel="noreferrer noopener"
            className="mono-font text-[11px] uppercase tracking-[0.22em] text-red font-bold hover:text-ink transition-colors"
          >
            Takip et &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {posts.map((p, i) => (
            <a
              key={i}
              href="https://instagram.com/bakacakkofte"
              target="_blank"
              rel="noreferrer noopener"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-ink"
            >
              {p.src ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.src})` }}
                  aria-hidden
                />
              ) : (
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${p.tint}`}>
                  <span className="display-font text-5xl italic text-bone/30 font-[450]">
                    B
                  </span>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="flex items-center gap-4 text-bone text-sm mb-2">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Heart className="w-4 h-4 fill-current" /> {p.likes}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <MessageCircle className="w-4 h-4" /> {p.comments}
                  </span>
                </div>
                <p className="text-bone/90 text-xs leading-snug line-clamp-2">
                  {p.caption}
                </p>
              </div>

              <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-bone/20 backdrop-blur text-bone flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <InstagramIcon className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
