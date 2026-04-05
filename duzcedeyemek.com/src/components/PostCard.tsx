import Link from "next/link";
import type { Post } from "@/lib/db";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#ede8e0] hover:border-[#c2571a] hover:shadow-lg transition-all duration-200 group flex flex-col">
      {post.cover_image && (
        <div className="overflow-hidden aspect-video">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
            width={400}
            height={225}
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-block self-start text-xs font-bold text-[#2d6a4f] bg-[#e8f4ee] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
          {post.category}
        </span>

        {/* Title */}
        <h2
          className="text-base sm:text-lg font-bold mb-2 leading-snug line-clamp-2"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="text-[#1a1a1a] hover:text-[#c2571a] transition-colors duration-150"
          >
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-[#6b6b6b] text-sm line-clamp-3 flex-1 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f0ebe3] text-xs text-[#9a9a9a]">
          <time dateTime={post.published_at}>
            {new Date(post.published_at).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.reading_time} dk okuma
          </span>
        </div>
      </div>
    </article>
  );
}
