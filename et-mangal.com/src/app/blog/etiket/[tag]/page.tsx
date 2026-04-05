import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByTag, getAllTags } from "@/lib/db";
import PostCard from "@/components/PostCard";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://et-mangal.com";

type Props = { params: Promise<{ tag: string }> };

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((t) => ({ tag: encodeURIComponent(t) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `#${decodedTag} Yazıları`,
    description: `"${decodedTag}" etiketli tüm yazılar. Et tarifleri, mangal teknikleri ve ${decodedTag} hakkında içerikler.`,
    alternates: { canonical: `${SITE_URL}/blog/etiket/${tag}` },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = await getPostsByTag(decodedTag);

  if (posts.length === 0) notFound();

  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: `#${decodedTag}`, url: `${SITE_URL}/blog/etiket/${tag}` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BreadcrumbJsonLd items={breadcrumbs} />

      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-red-700">Ana Sayfa</Link>
        <span className="mx-1.5">/</span>
        <Link href="/blog" className="hover:text-red-700">Blog</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">#{decodedTag}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">#{decodedTag}</h1>
      <p className="text-stone-500 text-sm mb-8">{posts.length} yazı</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/blog" className="text-red-700 hover:text-red-800 font-medium text-sm">
          &larr; Tüm Yazılara Dön
        </Link>
      </div>
    </div>
  );
}
