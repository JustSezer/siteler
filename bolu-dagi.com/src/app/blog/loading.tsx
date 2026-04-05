export default function BlogLoading() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="h-8 bg-gray-100 rounded-lg w-24 animate-pulse mb-2" />
          <div className="h-5 bg-gray-100 rounded w-48 animate-pulse" />
        </div>
      </section>
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <div className="aspect-[16/10] bg-gray-100 animate-pulse" />
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="h-4 bg-green-50 rounded-full w-20 animate-pulse" />
                  <div className="h-5 bg-gray-100 rounded w-full animate-pulse" />
                  <div className="h-4 bg-gray-50 rounded w-3/4 animate-pulse" />
                  <div className="flex justify-between pt-2 border-t border-gray-50">
                    <div className="h-3 bg-gray-100 rounded w-24 animate-pulse" />
                    <div className="h-3 bg-green-50 rounded w-10 animate-pulse" />
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
