export default function PostLoading() {
  return (
    <article className="py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-6 sm:mb-8">
          <div className="h-4 bg-stone-200 rounded w-16 animate-pulse" />
          <div className="h-4 bg-stone-200 rounded w-8 animate-pulse" />
          <div className="h-4 bg-stone-200 rounded w-40 animate-pulse" />
        </div>

        {/* Category */}
        <div className="h-6 bg-orange-100 rounded-full w-28 animate-pulse mb-4" />

        {/* Title */}
        <div className="space-y-3 mb-6">
          <div className="h-8 sm:h-10 bg-stone-200 rounded w-full animate-pulse" />
          <div className="h-8 sm:h-10 bg-stone-200 rounded w-3/4 animate-pulse" />
        </div>

        {/* Meta */}
        <div className="flex gap-4 mb-8">
          <div className="h-4 bg-stone-100 rounded w-28 animate-pulse" />
          <div className="h-4 bg-stone-100 rounded w-20 animate-pulse" />
        </div>

        {/* Cover image */}
        <div className="aspect-video bg-stone-200 rounded-2xl animate-pulse mb-8" />

        {/* Content skeleton */}
        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-4 bg-stone-100 rounded animate-pulse"
              style={{ width: `${70 + Math.random() * 30}%` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
