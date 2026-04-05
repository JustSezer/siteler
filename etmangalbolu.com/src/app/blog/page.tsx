import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import Breadcrumb from "@/components/Breadcrumb";

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Blog - Et Mangal Bolu",
  description:
    "Bolu'da et mangal kültürü, tarifler, restoran önerileri ve mangal ipuçları hakkında blog yazıları.",
  alternates: { canonical: "https://etmangalbolu.com/blog" },
};

interface PageProps {
  searchParams: { sayfa?: string };
}

export default async function BlogPage({ searchParams }: PageProps) {
  const currentPage = Math.max(1, parseInt(searchParams.sayfa || "1", 10) || 1);
  const skip = (currentPage - 1) * POSTS_PER_PAGE;

  const [posts, totalCount] = await Promise.all([
    prisma.post.findMany({
      where: { published: true },
      include: { category: true, tags: true },
      orderBy: { createdAt: "desc" },
      skip,
      take: POSTS_PER_PAGE,
    }),
    prisma.post.count({ where: { published: true } }),
  ]);

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog</h1>
      <p className="text-stone-500 mb-8 sm:mb-10">
        Et mangal dünyasından en güncel yazılar
        {totalCount > 0 && (
          <span className="text-stone-400"> ({totalCount} yazı)</span>
        )}
      </p>

      {posts.length === 0 ? (
        <p className="text-stone-500">Henüz yazı eklenmemiş.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Sayfalama" className="mt-12 flex justify-center items-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/blog?sayfa=${currentPage - 1}`}
              className="px-4 py-2 rounded-lg border border-stone-300 hover:border-primary hover:text-primary transition-colors min-h-[44px] flex items-center text-sm"
            >
              &larr; Önceki
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/blog?sayfa=${page}`}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-primary text-white"
                  : "border border-stone-300 hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link
              href={`/blog?sayfa=${currentPage + 1}`}
              className="px-4 py-2 rounded-lg border border-stone-300 hover:border-primary hover:text-primary transition-colors min-h-[44px] flex items-center text-sm"
            >
              Sonraki &rarr;
            </Link>
          )}
        </nav>
      )}

      {/* Backlink */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-stone-100 rounded-xl text-center">
        <p className="text-stone-600 mb-4">
          Daha fazla içerik ve güncel yazılar için:
        </p>
        <a
          href="https://ibrahiminyeri.com/blog"
          target="_blank"
          rel="dofollow"
          className="btn-primary inline-block"
        >
          İbrahim İnyeri Blog &rarr;
        </a>
      </div>
    </div>
  );
}
