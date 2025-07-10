import { useEffect, useState } from "react";

export default function NewsComponent() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/ifc/wp-json/wp/v2/news")
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
      })
      .catch((err) => console.error("Failed to fetch news:", err));
  }, []);

  return (
    <div className="container py-[80px]">
      <h2>News</h2>

      <div className="space-y-4">
        {newsItems.map((item, index) => {
          const isEven = index % 2 === 0;
          const bgColor = isEven ? "bg-green-50" : "bg-green-600";
          const titleColor = isEven ? "text-green-600" : "text-white";
          const contentColor = isEven ? "text-gray-600" : "text-green-100";
          const bgcClass = isEven ? "bgc-light" : "bgc-dark";

          return (
            <div
              key={item.id}
              className={`flex items-start gap-4 p-4 pl-[70px] relative ${bgColor} ${bgcClass}`}
            >
              {/* Number Circle */}
              <div className="number absolute left-0 top-0 flex-shrink-0 w-10 h-10 bg-green-600 text-white flex items-center justify-center font-semibold text-2xl">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`font-bold text-2xl mb-2 ${titleColor}`}
                  dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                />
                {item.content?.rendered && (
                  <div
                    className={`text-lg descon leading-relaxed ${contentColor}`}
                    dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
