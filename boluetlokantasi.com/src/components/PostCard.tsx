import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/db";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card group flex flex-col overflow-hidden">
      {/* Gorsel */}
      {post.cover_image && (
        <div className="post-card-image overflow-hidden aspect-video relative">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(30,30,30,0.85) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Icerik */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Kategori badge */}
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase w-fit mb-3 px-2 py-1"
          style={{
            color: "#d4af37",
            backgroundColor: "rgba(212, 175, 55, 0.1)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            borderRadius: "2px",
          }}
        >
          {post.category}
        </span>

        {/* Baslik */}
        <h2
          className="text-lg sm:text-xl font-semibold leading-snug mb-3 flex-1"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#f5f5f5" }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="post-card-title-link"
          >
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p
          className="text-sm line-clamp-3 leading-relaxed mb-4"
          style={{ color: "#888888" }}
        >
          {post.excerpt}
        </p>

        {/* Alt bilgi satiri */}
        <div
          className="flex items-center justify-between pt-4 text-xs"
          style={{ borderTop: "1px solid #2a2a2a", color: "#555555" }}
        >
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
