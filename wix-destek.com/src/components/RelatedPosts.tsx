import Link from "next/link";
import type { Post } from "@/lib/db";

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-10 sm:mt-12 pt-8 border-t border-slate-200">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">İlgili Yazılar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all group">
            {post.cover_image && (
              <div className="overflow-hidden aspect-video">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="p-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold mt-1 leading-snug text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
