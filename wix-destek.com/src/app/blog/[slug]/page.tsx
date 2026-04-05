import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/db";
import { BlogPostJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import Image from "next/image";
import { sanitizeHtml } from "@/lib/sanitize";
import RelatedPosts from "@/components/RelatedPosts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wix-destek.com";

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
        className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none"
      >
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-slate-700">{post.title}</span>
      </nav>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <Link
          href={`/blog?kategori=${encodeURIComponent(post.category)}`}
          className="bg-blue-100 text-blue-700 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 active:bg-blue-300 transition-colors"
        >
          {post.category}
        </Link>
        <time dateTime={post.published_at} className="text-xs sm:text-sm text-slate-500">
          {new Date(post.published_at).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="text-xs sm:text-sm text-slate-500">
          {post.reading_time} dk okuma
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
        {post.title}
      </h1>

      {post.cover_image && (
        <div className="aspect-video rounded-xl overflow-hidden mb-6 sm:mb-8 shadow-md -mx-4 sm:mx-0 relative">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
      />

      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-200">
          {post.tags.split(",").map((tag: string) => (
            <span
              key={tag.trim()}
              className="bg-slate-100 text-slate-600 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-2">Wix ile ilgili sorunuz mu var?</h3>
        <p className="text-slate-600 text-sm mb-4">Uzman ekibimiz 24 saat içinde size yardımcı olur.</p>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          Destek Al
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <RelatedPosts posts={related} />

      <div className="mt-8 sm:mt-10">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
        >
          &larr; Tüm Yazılara Dön
        </Link>
      </div>
    </article>
  );
}
