import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string | null;
    createdAt: Date;
    category: { name: string };
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card-bordo group">
      {post.coverImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 sm:p-6">
        <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-900 px-2 py-1 rounded uppercase tracking-wider mb-2">
          {post.category.name}
        </span>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-dark mt-1 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-150">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <time className="text-xs text-stone-400">
            {new Date(post.createdAt).toLocaleDateString("tr-TR")}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="text-secondary text-sm font-semibold hover:text-amber-700 transition-colors duration-150 min-h-[44px] flex items-center gap-1"
          >
            Devamını Oku &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
