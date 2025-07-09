"use client";

export default function NewsSection({ data }) {
  if (!data) return null;

  const { title, subtitle, items = [] } = data;

  return (
    <section className="w-full bg-yellow-50 py-12 md:py-16 lg:py-20 bg-[#F5F6E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="bg-green-600 catnews text-white px-3 py-2 text-lg">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-grow">
                <div className="text-gray-500 text-sm mb-4">
                  {new Date().toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div
                  className="text-gray-700 text-left leading-relaxed text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>

              <div className="p-4 pt-0">
                <button className="text-green-600 font-bold flex items-center hover:text-green-700 transition-colors duration-200 group">
                  {item.category === "Videos" ? "View More" : "Read More"}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>

              <div className="h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.category}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
