import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
  });
  if (!category) return { title: "Kategori Bulunamadı" };

  return {
    title: `${category.name} Yazıları`,
    description: `${category.name} kategorisindeki tüm blog yazıları - Et Mangal Bolu`,
    alternates: {
      canonical: `https://etmangalbolu.com/kategoriler/${category.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = await prisma.category.findMany({ select: { slug: true } });
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: {
      posts: {
        where: { published: true },
        include: { category: true, tags: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!category) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kategoriler", href: "/kategoriler" },
          { label: category.name },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-2">{category.name}</h1>
      <p className="text-stone-500 mb-8 sm:mb-10">
        {category.posts.length} yazı bulundu
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {category.posts.map((post) => (
          <article key={post.id} className="card">
            {post.coverImage && (
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-stone-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary text-sm font-semibold hover:underline min-h-[44px] inline-flex items-center"
              >
                Devamını Oku &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
