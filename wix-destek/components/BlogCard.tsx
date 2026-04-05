import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  meta_description: string | null;
  keywords: string | null;
  published: number;
  created_at: string;
  updated_at: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

function getCategoryColor(index: number): string {
  const colors = [
    'bg-blue-100 text-blue-700',
    'bg-purple-100 text-purple-700',
    'bg-green-100 text-green-700',
    'bg-orange-100 text-orange-700',
    'bg-pink-100 text-pink-700',
  ];
  return colors[index % colors.length];
}

function getPlaceholderBg(index: number): string {
  const bgs = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-indigo-400 to-indigo-600',
    'from-cyan-400 to-cyan-600',
    'from-sky-400 to-sky-600',
  ];
  return bgs[index % bgs.length];
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const readingTime = estimateReadingTime(post.content);
  const formattedDate = formatDate(post.created_at);
  const postIndex = post.id - 1;

  if (featured) {
    return (
      <article
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100"
        aria-label={`Blog yazısı: ${post.title}`}
      >
        {/* Gorsel placeholder — gercek gorsele gecilene kadar */}
        <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
          <div
            className={`w-full h-56 bg-gradient-to-br ${getPlaceholderBg(postIndex)} flex items-center justify-center`}
            role="img"
            aria-label={`${post.title} - kapak görseli`}
          >
            <div className="text-white text-center px-6">
              <svg
                className="w-16 h-16 mx-auto mb-3 opacity-60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <p className="text-sm opacity-80 font-medium">Wix Rehberi</p>
            </div>
          </div>
        </Link>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getCategoryColor(postIndex)}`}
            >
              Rehber
            </span>
            <span className="text-gray-400 text-xs">{readingTime} dk okuma</span>
          </div>

          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          {post.excerpt && (
            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <time
              className="text-gray-400 text-xs"
              dateTime={post.created_at}
            >
              {formattedDate}
            </time>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary-600 hover:text-primary-700 text-sm font-semibold flex items-center gap-1 transition-colors"
              aria-label={`${post.title} yazısını oku`}
            >
              Oku
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col sm:flex-row overflow-hidden"
      aria-label={`Blog yazısı: ${post.title}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="sm:w-48 flex-shrink-0"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className={`w-full h-40 sm:h-full bg-gradient-to-br ${getPlaceholderBg(postIndex)} flex items-center justify-center min-h-[120px]`}
          role="img"
          aria-label={`${post.title} - kapak görseli`}
        >
          <svg
            className="w-10 h-10 text-white opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getCategoryColor(postIndex)}`}
          >
            Rehber
          </span>
          <span className="text-gray-400 text-xs">{readingTime} dk okuma</span>
          <time
            className="text-gray-400 text-xs ml-auto"
            dateTime={post.created_at}
          >
            {formattedDate}
          </time>
        </div>

        <h3 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="text-primary-600 hover:text-primary-700 text-sm font-semibold flex items-center gap-1 mt-3 w-fit transition-colors"
          aria-label={`${post.title} yazısının devamını oku`}
        >
          Devamını Oku →
        </Link>
      </div>
    </article>
  );
}
