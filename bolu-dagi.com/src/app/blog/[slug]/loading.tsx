export default function PostLoading() {
  return (
    <article className="py-6 sm:py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex gap-2 mb-6">
          <div className="h-4 bg-gray-100 rounded w-16 animate-pulse" />
          <div className="h-4 bg-gray-100 rounded w-4 animate-pulse" />
          <div className="h-4 bg-gray-100 rounded w-32 animate-pulse" />
        </div>
        <div className="h-6 bg-green-50 rounded-full w-28 animate-pulse mb-4" />
        <div className="space-y-3 mb-6">
          <div className="h-9 bg-gray-100 rounded w-full animate-pulse" />
          <div className="h-9 bg-gray-100 rounded w-3/4 animate-pulse" />
        </div>
        <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="h-4 bg-gray-100 rounded w-32 animate-pulse" />
          <div className="h-4 bg-gray-100 rounded w-20 animate-pulse" />
        </div>
        <div className="aspect-video bg-gray-100 rounded-2xl animate-pulse mb-8" />
        <div className="space-y-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" style={{ width: `${70 + (i * 7) % 30}%` }} />
          ))}
        </div>
      </div>
    </article>
  );
}
