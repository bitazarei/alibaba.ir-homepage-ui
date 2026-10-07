const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 animate-pulse">
      <div className="max-w-[1200px] mx-auto">
        {/* اسکلتون هدر/منو */}
        <div className="h-16 bg-gray-200 rounded-lg mb-6"></div>

        {/* اسکلتون بنر */}
        <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>

        {/* اسکلتون کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* اسکلتون فوتر */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
