import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import Breadcrumb from "@/components/Breadcrumb";

interface PageProps {
  searchParams: { q?: string };
}

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const q = searchParams.q || "";
  return {
    title: q ? `"${q}" arama sonuçları` : "Arama",
    description: `Et Mangal Bolu'da "${q}" ile ilgili yazılar`,
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const q = (searchParams.q || "").trim();

  const qLower = q.toLowerCase();
  const qUpper = q.charAt(0).toUpperCase() + q.slice(1);

  const posts = q.length > 0
    ? await prisma.post.findMany({
        where: {
          published: true,
          OR: [
            { title: { contains: q } },
            { title: { contains: qLower } },
            { title: { contains: qUpper } },
            { excerpt: { contains: q } },
            { excerpt: { contains: qLower } },
            { excerpt: { contains: qUpper } },
            { content: { contains: q } },
            { content: { contains: qLower } },
          ],
        },
        include: { category: true, tags: true },
        orderBy: { createdAt: "desc" },
      })
    : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Arama" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Arama</h1>

      {q ? (
        <p className="text-stone-500 mb-8">
          &quot;{q}&quot; için{" "}
          <strong>{posts.length}</strong> sonuç bulundu
        </p>
      ) : (
        <p className="text-stone-500 mb-8">
          Aramak istediğiniz kelimeyi yazın.
        </p>
      )}

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : q.length > 0 ? (
        <div className="text-center py-12">
          <p className="text-stone-500 text-lg mb-4">
            Aramanızla eşleşen sonuç bulunamadı.
          </p>
          <p className="text-stone-400 text-sm">
            Farklı anahtar kelimeler deneyin veya{" "}
            <a href="/blog" className="text-primary hover:underline">
              tüm yazılara göz atın
            </a>
            .
          </p>
        </div>
      ) : null}
    </div>
  );
}
