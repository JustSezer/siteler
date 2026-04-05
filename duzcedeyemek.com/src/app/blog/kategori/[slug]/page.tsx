import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, getCategoryWithSlug } from "@/lib/db";
import PostCard from "@/components/PostCard";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duzcedeyemek.com";

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
    title: `${cat.name} Yazıları | Düzce'de Yemek`,
    description: `${cat.name} kategorisindeki tüm yazılar. Düzce yemek kültürü ve ${cat.name.toLowerCase()} hakkında rehberler.`,
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
        <Link href="/" className="hover:text-orange-600">Ana Sayfa</Link>
        <span className="mx-1.5">/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">{cat.name}</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <span className="w-1 h-7 bg-orange-500 rounded-full inline-block"></span>
        <h1 className="text-3xl sm:text-4xl font-bold">{cat.name}</h1>
      </div>
      <p className="text-stone-500 text-sm mb-6 ml-4">{cat.count} yazı</p>

      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/blog" className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-stone-100 text-stone-700 hover:bg-stone-200">
          Tümü
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/kategori/${c.slug}`}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-colors ${
              c.slug === slug ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {c.name} ({c.count})
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
