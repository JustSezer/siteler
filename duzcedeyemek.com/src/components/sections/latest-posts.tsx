import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

const tagColors: Record<string, string> = {
  Tarifler: "bg-tag-green text-tag-green-text",
  Rehber: "bg-tag-blue text-tag-blue-text",
  Kultur: "bg-tag-purple text-tag-purple-text",
  "Kültür": "bg-tag-purple text-tag-purple-text",
  Sahil: "bg-tag-blue text-tag-blue-text",
  Sofra: "bg-tag-yellow text-tag-yellow-text",
  Yerel: "bg-tag-green text-tag-green-text",
  Rota: "bg-tag-red text-tag-red-text",
};

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 6);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-14 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-foreground leading-tight">
            Son yazılar
          </h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
          >
            Hepsi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Görselsiz liste — temiz, hızlı, metin odaklı */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-card rounded-xl p-5 border border-border-light hover:border-primary/20 hover:shadow-md transition-all h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      tagColors[post.category] || "bg-tag-green text-tag-green-text"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-foreground-muted text-[11px]">
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link href="/blog" className="text-primary font-bold text-sm">
            Tüm yazılar &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
