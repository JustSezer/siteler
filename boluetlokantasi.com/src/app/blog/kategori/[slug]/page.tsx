import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, getCategoryWithSlug } from "@/lib/db";
import PostCard from "@/components/PostCard";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://boluetlokantasi.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const categories = await getCategoryWithSlug();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategoryWithSlug();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};

  return {
    title: `${cat.name} Yazıları | Bolu Et Lokantası Blog`,
    description: `${cat.name} kategorisindeki tüm yazılar. Bolu yemekleri, et kültürü ve ${cat.name.toLowerCase()} hakkında rehberler.`,
    alternates: { canonical: `${SITE_URL}/blog/kategori/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categories = await getCategoryWithSlug();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const posts = await getPostsByCategory(cat.name);

  const breadcrumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: cat.name, url: `${SITE_URL}/blog/kategori/${slug}` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <BreadcrumbJsonLd items={breadcrumbs} />

      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-amber-800">Ana Sayfa</Link>
        <span className="mx-1.5">/</span>
        <Link href="/blog" className="hover:text-amber-800">Blog</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">{cat.name}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">{cat.name}</h1>
      <p className="text-stone-500 text-sm mb-8">{cat.count} yazı</p>

      {/* Other categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/blog" className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-stone-200 text-stone-700 hover:bg-stone-300">
          Tümü
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/kategori/${c.slug}`}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              c.slug === slug ? "bg-amber-800 text-white" : "bg-stone-200 text-stone-700 hover:bg-stone-300"
            }`}
          >
            {c.name} ({c.count})
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
