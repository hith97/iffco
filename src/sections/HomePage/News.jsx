import news from "../../assets/news.png";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      category: "News",
      date: "FEB 20, 2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-green-600",
    },
    {
      id: 2,
      category: "Media Release",
      date: "FEB 20, 2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-green-600",
    },
    {
      id: 3,
      category: "Videos",
      date: "FEB 20, 2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-green-600",
    },
  ];

  return (
    <section className="w-full bg-yellow-50 py-12 md:py-16 lg:py-20 bg-[#F5F6E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest From IFFCO-MC
          </h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item) => (
            <div
              className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              key={item.id}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`${item.color} catnews text-white px-3 py-2 text-lg`}
                >
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-grow">
                <div className="text-gray-500 text-sm mb-4">{item.date}</div>
                <p className="text-gray-700 text-left leading-relaxed text-sm md:text-base">
                  {item.title}
                </p>
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
                  src={news}
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
