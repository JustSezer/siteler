export default function PostLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-pulse">
      <div className="h-3 bg-stone-100 rounded w-1/3 mb-8" />
      <div className="h-6 bg-amber-100 rounded w-1/4 mb-4" />
      <div className="h-10 bg-stone-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-stone-100 rounded w-1/4 mb-8" />
      <div className="aspect-video bg-amber-50 rounded-2xl mb-8" />
      <div className="space-y-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`h-4 bg-stone-100 rounded ${i % 3 === 2 ? "w-4/5" : "w-full"}`} />
        ))}
      </div>
    </div>
  );
}
