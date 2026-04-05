export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-stone-200 rounded w-1/3" />
        <div className="h-4 bg-stone-200 rounded w-1/2" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-stone-200" />
              <div className="p-6 space-y-3">
                <div className="h-3 bg-stone-200 rounded w-1/4" />
                <div className="h-5 bg-stone-200 rounded w-3/4" />
                <div className="h-3 bg-stone-200 rounded w-full" />
                <div className="h-3 bg-stone-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
