import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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

export const metadata: Metadata = {
  title: "Blog | Düzce'de Yemek",
  description:
    "Düzce yöresel lezzetleri, restoran rehberleri, tarifler ve mutfak kültürü hakkında yazılar.",
  alternates: {
    canonical: "https://duzcedeyemek.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-3">
              Blog
            </h1>
            <p className="text-foreground-muted">
              Düzce yöresel lezzetleri, tarifler ve restoran rehberleri.
            </p>
          </div>

          <div className="space-y-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-5 border-b border-border-light"
              >
                <article>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        tagColors[post.category] || "bg-tag-green text-tag-green-text"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-foreground-muted text-xs">
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-foreground-muted text-xs">
                      &middot; {post.readingTime}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                    {post.title}
                  </h2>
                  <p className="text-foreground-muted text-sm line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
