import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/db";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-200 group flex flex-col">
      {post.cover_image && (
        <div className="overflow-hidden aspect-video relative">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 uppercase tracking-wide px-2.5 py-1 rounded-full w-fit">
          {post.category}
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3 mb-2 sm:mb-3 leading-snug text-slate-900">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors duration-150"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-slate-500 text-sm line-clamp-3 flex-1 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
          <time dateTime={post.published_at}>
            {new Date(post.published_at).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span>{post.reading_time} dk okuma</span>
        </div>
      </div>
    </article>
  );
}
