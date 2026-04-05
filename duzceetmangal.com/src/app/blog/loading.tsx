export default function BlogLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="bg-gradient-to-r from-orange-900 to-stone-800 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="h-10 sm:h-12 bg-white/20 rounded-lg w-32 mx-auto mb-4 animate-pulse" />
          <div className="h-5 bg-white/10 rounded w-80 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Post grid skeleton */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="aspect-video bg-stone-200 animate-pulse" />
                <div className="p-4 sm:p-5 lg:p-6 space-y-3">
                  <div className="h-4 bg-stone-200 rounded-full w-20 animate-pulse" />
                  <div className="h-5 bg-stone-200 rounded w-full animate-pulse" />
                  <div className="h-4 bg-stone-100 rounded w-3/4 animate-pulse" />
                  <div className="flex justify-between pt-2">
                    <div className="h-3 bg-stone-100 rounded w-24 animate-pulse" />
                    <div className="h-3 bg-stone-100 rounded w-16 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
