import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | Bolu Dağı Kahvaltı`,
    description: post.description,
    alternates: {
      canonical: `https://boludagikahvalti.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      locale: "tr_TR",
      siteName: "Bolu Dağı Kahvaltı",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

function markdownToHtml(content: string): string {
  let html = content;

  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="text-lg font-bold text-foreground mt-6 mb-2">$1</h4>'
  );
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="font-serif text-xl font-bold text-foreground mt-10 mb-3">$1</h3>'
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-14 mb-5 pb-3 border-b border-border">$1</h2>'
  );

  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-foreground">$1</strong>'
  );

  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match: string, text: string, url: string) => {
      if (url.startsWith("http")) {
        return `<a href="${url}" class="text-primary underline underline-offset-4 hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      return `<a href="${url}" class="text-primary underline underline-offset-4 hover:text-secondary transition-colors">${text}</a>`;
    }
  );

  html = html.replace(
    /^- (.+)$/gm,
    '<li class="ml-6 list-disc text-foreground-muted leading-relaxed">$1</li>'
  );

  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-6 list-decimal text-foreground-muted leading-relaxed">$1</li>'
  );

  html = html.replace(
    /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
    (_, header, body) => {
      const ths = header
        .split("|")
        .filter((s: string) => s.trim())
        .map(
          (s: string) =>
            `<th class="text-left p-3 font-semibold text-foreground text-sm">${s.trim()}</th>`
        )
        .join("");
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const tds = row
            .split("|")
            .filter((s: string) => s.trim())
            .map(
              (s: string) =>
                `<td class="p-3 text-foreground-muted text-sm">${s.trim()}</td>`
            )
            .join("");
          return `<tr class="border-t border-border">${tds}</tr>`;
        })
        .join("");
      return `<div class="overflow-x-auto my-8"><table class="w-full text-sm border border-border overflow-hidden"><thead class="bg-accent"><tr>${ths}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
  );

  html = html.replace(/^---$/gm, '<hr class="my-10 border-border" />');

  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      if (trimmed.startsWith("#")) return trimmed;
      if (trimmed.includes('<li class="')) {
        const isOrdered = trimmed.includes("list-decimal");
        const tag = isOrdered ? "ol" : "ul";
        return `<${tag} class="my-5 space-y-2">${trimmed}</${tag}>`;
      }
      return `<p class="text-foreground-muted leading-[1.85] mb-5">${trimmed.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Bolu Dağı Kahvaltı",
      url: "https://boludagikahvalti.com",
    },
    mainEntityOfPage: `https://boludagikahvalti.com/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://boludagikahvalti.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://boludagikahvalti.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://boludagikahvalti.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content" className="bg-background pt-28 pb-24">
        <article className="max-w-[720px] mx-auto px-5 sm:px-6 lg:px-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted text-[13px] uppercase tracking-wider font-medium mb-8 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-foreground-muted mb-6">
            <span className="eyebrow">{post.category}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-8 sm:mb-10">
            {post.title}
          </h1>

          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {post.tags.length > 0 && (
            <div className="mt-14 pt-8 border-t border-border">
              <p className="text-foreground-muted text-[11px] uppercase tracking-[0.15em] font-medium mb-4">
                Etiketler
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-foreground-muted bg-accent px-3 py-1.5 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sofra Notu — ibrahiminyeri organik entegrasyon */}
          <div className="mt-14 p-6 bg-forest/5 border-l-2 border-forest">
            <p className="eyebrow text-forest mb-2">Sofra Notu</p>
            <p className="text-[14.5px] leading-[1.8] text-ash">
              Bolu Dağı&apos;nda sabah sofrası arıyorsan,{" "}
              <a
                href="https://ibrahiminyeri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline underline-offset-4 hover:text-ochre transition-colors"
              >
                İbrahim&apos;in Yeri
              </a>{" "}
              Bakacak mevkiinde 1989&apos;dan beri açık. Klasiklerden.
            </p>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 mt-14 sm:mt-20">
            <div className="border-t border-border pt-14">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-10">
                Diğer Yazılar
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block border-t border-border pt-5"
                  >
                    <article>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ochre">
                        {rp.category}
                      </span>
                      <h3 className="font-serif text-lg text-foreground group-hover:text-forest transition-colors leading-snug mt-2">
                        {rp.title}
                      </h3>
                      <p className="text-[13px] text-foreground-muted mt-2">
                        {rp.readingTime}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </main>
      <Footer />
    </>
  );
}
