export default function BlogLoading() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px]">
          {/* Header Skeleton */}
          <div className="text-center xl:text-left">
            <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto xl:mx-0 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-96 mx-auto xl:mx-0 animate-pulse"></div>
          </div>

          {/* Articles Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[30px]">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-[#232329] rounded-lg overflow-hidden animate-pulse"
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 bg-gray-600 rounded w-20"></div>
                    <div className="h-4 bg-gray-600 rounded w-12"></div>
                  </div>

                  {/* Title */}
                  <div className="h-8 bg-gray-600 rounded mb-4"></div>

                  {/* Description */}
                  <div className="space-y-2 mb-6 flex-1">
                    <div className="h-4 bg-gray-600 rounded"></div>
                    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[1, 2, 3, 4].map((tag) => (
                      <div
                        key={tag}
                        className="h-6 bg-gray-600 rounded-full w-16"
                      ></div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="h-4 bg-gray-600 rounded w-16"></div>
                      <div className="h-4 bg-gray-600 rounded w-12"></div>
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full bg-gray-600"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dev.to Profile Link Skeleton */}
          <div className="text-center mt-12">
            <div className="h-6 bg-gray-300 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded-lg w-48 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
