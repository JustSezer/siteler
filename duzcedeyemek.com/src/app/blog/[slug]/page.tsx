import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/db";
import { BlogPostJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { sanitizeHtml } from "@/lib/sanitize";
import RelatedPosts from "@/components/RelatedPosts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      section: post.category,
      tags: post.tags?.split(",").map((t) => t.trim()),
      images: post.cover_image ? [post.cover_image] : [],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(post.id, post.category, post.tags, 3);

  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BlogPostJsonLd post={post} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <nav
        aria-label="Breadcrumb"
        className="text-xs sm:text-sm text-stone-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none"
      >
        <Link href="/" className="hover:text-orange-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">{post.title}</span>
      </nav>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <Link
          href={`/blog/kategori/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
          className="bg-orange-100 text-orange-700 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold hover:bg-orange-200 active:bg-orange-300 transition-colors"
        >
          {post.category}
        </Link>
        <time dateTime={post.published_at} className="text-xs sm:text-sm text-stone-500">
          {new Date(post.published_at).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="text-xs sm:text-sm text-stone-500">
          {post.reading_time} dk okuma
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
        {post.title}
      </h1>

      {post.cover_image && (
        <div className="aspect-video rounded-2xl overflow-hidden mb-6 sm:mb-8 shadow-md -mx-4 sm:mx-0">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            width={800}
            height={450}
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none prose-headings:text-stone-900 prose-a:text-orange-600 prose-strong:text-stone-800 prose-li:text-stone-700"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
      />

      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-stone-200">
          {post.tags.split(",").map((tag: string) => (
            <Link
              key={tag.trim()}
              href={`/blog/etiket/${encodeURIComponent(tag.trim())}`}
              className="bg-stone-100 text-stone-600 hover:bg-orange-50 hover:text-orange-600 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-colors"
            >
              #{tag.trim()}
            </Link>
          ))}
        </div>
      )}

      <RelatedPosts posts={related} />

      <div className="mt-8 sm:mt-10">
        <Link
          href="/blog"
          className="text-orange-600 hover:text-orange-700 font-bold text-sm sm:text-base"
        >
          &larr; Tüm Yazılara Dön
        </Link>
      </div>
    </article>
  );
}
