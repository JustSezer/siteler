import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | Bolu Mangal Rehberi`,
    description: post.description,
    alternates: { canonical: `https://etmangalbolu.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }]
        : [],
      locale: "tr_TR",
      siteName: "Bolu Mangal Rehberi",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

function markdownToHtml(content: string): string {
  let html = content;

  // Headers
  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="font-display text-lg lg:text-xl font-bold text-ink mt-8 mb-3">$1</h4>'
  );
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="font-display text-xl lg:text-2xl font-bold text-ink mt-10 mb-4">$1</h3>'
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="font-display text-2xl sm:text-3xl lg:text-[34px] font-black text-ink mt-14 mb-6 leading-tight">$1</h2>'
  );

  // Bold
  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-ink">$1</strong>'
  );

  // Italic
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match: string, text: string, url: string) => {
      const target = url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${url}" class="editorial-link"${target}>${text}</a>`;
    }
  );

  // Lists
  html = html.replace(
    /^- (.+)$/gm,
    '<li class="ml-6 list-disc text-ink-soft leading-[1.8] mb-2 marker:text-ember">$1</li>'
  );
  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-6 list-decimal text-ink-soft leading-[1.8] mb-2 marker:text-ember marker:font-bold">$1</li>'
  );

  // Tables
  html = html.replace(
    /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
    (_, header, body) => {
      const ths = header
        .split("|")
        .filter((s: string) => s.trim())
        .map(
          (s: string) =>
            `<th class="text-left p-3 sm:p-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-ember border-b-2 border-ink">${s.trim()}</th>`
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
                `<td class="p-3 sm:p-4 text-ink-soft text-[14px] sm:text-[15px] font-body">${s.trim()}</td>`
            )
            .join("");
          return `<tr class="border-b border-rule-soft">${tds}</tr>`;
        })
        .join("");
      return `<div class="overflow-x-auto my-10 border border-ink"><table class="w-full font-body">${ths ? `<thead class="bg-paper-dark"><tr>${ths}</tr></thead>` : ""}<tbody>${rows}</tbody></table></div>`;
    }
  );

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="my-12 border-t-2 border-double border-ink/30" />');

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      if (trimmed.startsWith("#")) return trimmed;
      if (trimmed.includes('<li class="')) {
        const isOrdered = trimmed.includes("list-decimal");
        const tag = isOrdered ? "ol" : "ul";
        return `<${tag} class="my-6 space-y-1">${trimmed}</${tag}>`;
      }
      // İlk paragraf drop cap alır
      const dropCap = idx === 0 ? " drop-cap" : "";
      return `<p class="font-body text-[16px] sm:text-[17px] lg:text-[18px] text-ink-soft leading-[1.85] mb-6${dropCap}">${trimmed.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);
  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Bolu Mangal Rehberi",
      url: "https://etmangalbolu.com",
    },
    image: post.image,
    mainEntityOfPage: `https://etmangalbolu.com/blog/${slug}`,
  };

  return (
    <>
      <Header />
      <main className="bg-paper">
        {/* Üst masthead */}
        <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 paper-grain">
          <div className="max-w-[920px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="rule-thick pt-3 mb-10 sm:mb-12">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft">
                <span className="font-semibold">Bolu Mangal Rehberi</span>
                <span>Sayı 01 · 2026</span>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink-muted hover:text-ember transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Arşive Dön
            </Link>

            {/* Kategori + meta */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
              <span className="text-ember font-semibold">{post.category}</span>
              <span className="w-6 h-px bg-rule" />
              <span className="text-ink-muted">
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="w-6 h-px bg-rule" />
              <span className="text-ink-muted">{post.readingTime}</span>
              <span className="w-6 h-px bg-rule" />
              <span className="text-ink-muted">{post.author}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.02] tracking-[-0.02em] text-ink font-black mb-8">
              {post.title}
            </h1>

            <p className="font-body text-lg sm:text-xl lg:text-2xl text-ink-soft leading-relaxed italic max-w-[60ch]">
              {post.description}
            </p>
          </div>
        </section>

        {/* Hero görsel */}
        {post.image && (
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 mb-12 sm:mb-16">
            <figure className="relative aspect-[16/9] overflow-hidden border-2 border-ink">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover grayscale-[35%] sepia-[10%] contrast-[1.05]"
                priority
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            </figure>
            <figcaption className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted text-center">
              Foto · {post.imageAlt}
            </figcaption>
          </div>
        )}

        {/* İçerik */}
        <article className="max-w-[720px] mx-auto px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {/* Etiketler */}
          {post.tags.length > 0 && (
            <div className="mt-14 sm:mt-16 pt-8 border-t-2 border-double border-ink/30">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-4">
                Etiketler
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft border border-ink/20 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Yazı sonu işareti */}
          <div className="mt-12 text-center font-display text-2xl text-ink-muted">
            —∎—
          </div>
        </article>

        {/* İlgili yazılar */}
        {related.length > 0 && (
          <section className="bg-paper-dark border-t border-rule py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="rule-thick pt-3 mb-10 sm:mb-12">
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
                  Devamı Var · Diğer Yazılar
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {related.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                    <figure className="relative aspect-[16/10] mb-5 overflow-hidden border-2 border-ink">
                      <Image
                        src={rp.image}
                        alt={rp.imageAlt}
                        fill
                        className="object-cover grayscale-[35%] sepia-[8%] contrast-[1.05] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </figure>
                    <div className="flex items-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em]">
                      <span className="text-ember font-semibold">{rp.category}</span>
                      <span className="w-4 h-px bg-rule" />
                      <span className="text-ink-muted">{rp.readingTime}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] text-ink font-bold leading-tight group-hover:text-ember transition-colors">
                      {rp.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </main>
      <Footer />
    </>
  );
}
