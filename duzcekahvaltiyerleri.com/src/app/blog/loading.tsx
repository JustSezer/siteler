export default function BlogLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="animate-pulse">
        <div className="h-8 bg-amber-100 rounded-xl w-1/4 mx-auto mb-4" />
        <div className="h-4 bg-stone-100 rounded w-1/2 mx-auto mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
              <div className="aspect-video bg-amber-50" />
              <div className="p-5 space-y-3">
                <div className="h-3 bg-amber-100 rounded w-1/4" />
                <div className="h-4 bg-stone-100 rounded w-3/4" />
                <div className="h-3 bg-stone-50 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
