import Link from "next/link";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kategoriler",
  description: "Et mangal blog kategorileri - tarifler, restoranlar, ipuçları ve daha fazlası.",
  alternates: { canonical: "https://etmangalbolu.com/kategoriler" },
};

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kategoriler" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kategoriler</h1>
      <p className="text-stone-500 mb-8 sm:mb-10">Konulara göre yazıları keşfedin</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/kategoriler/${cat.slug}`}
            className="card p-6 sm:p-8 text-center hover:border-primary border-2 border-transparent transition-all"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{cat.name}</h2>
            <p className="text-stone-500">{cat._count.posts} yazı</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
