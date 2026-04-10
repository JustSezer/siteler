import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

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
  if (!post) return { title: "Yazi Bulunamadi" };

  return {
    title: `${post.title} | Bolu Dagi Rehberi`,
    description: post.description,
    alternates: {
      canonical: `https://bolu-dagi.com/blog/${slug}`,
    },
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
      siteName: "Bolu Dagi Rehberi",
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
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-foreground mt-8 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');

  // Italic
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary underline hover:text-primary-light transition-colors">$1</a>'
  );

  // Unordered lists
  html = html.replace(
    /^- (.+)$/gm,
    '<li class="ml-6 list-disc text-muted-foreground">$1</li>'
  );

  // Table (simple)
  html = html.replace(
    /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
    (_, header, body) => {
      const ths = header
        .split("|")
        .filter((s: string) => s.trim())
        .map((s: string) => `<th class="text-left p-3 font-semibold text-foreground">${s.trim()}</th>`)
        .join("");
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const tds = row
            .split("|")
            .filter((s: string) => s.trim())
            .map((s: string) => `<td class="p-3 text-muted-foreground">${s.trim()}</td>`)
            .join("");
          return `<tr class="border-t border-border">${tds}</tr>`;
        })
        .join("");
      return `<table class="w-full text-sm border border-border rounded-lg overflow-hidden my-6"><thead class="bg-muted"><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
    }
  );

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      if (trimmed.startsWith("#")) return trimmed;
      // Wrap consecutive list items
      if (trimmed.includes('<li class="')) {
        return `<ul class="my-4 space-y-1">${trimmed}</ul>`;
      }
      return `<p class="text-muted-foreground leading-relaxed mb-4">${trimmed.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);

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
      name: "Bolu Dagi Rehberi",
      url: "https://bolu-dagi.com",
    },
    image: post.image,
    mainEntityOfPage: `https://bolu-dagi.com/blog/${slug}`,
  };

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Tum Yazilar
          </Link>

          {/* Hero image */}
          {post.image && (
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 800px"
              />
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-base text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            {post.title}
          </h1>

          {/* Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">
                Etiketler
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-muted text-muted-foreground px-3 py-1.5 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Diger Yazilari Oku
            </Link>
          </div>
        </article>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </main>
      <Footer />
    </>
  );
}
