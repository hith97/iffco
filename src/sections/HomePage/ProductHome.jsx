"use client";

import productbg from "../../assets/productbg.jpg";

export default function ProductsSection({ data }) {
  if (!data) return null;

  const {
    title,
    subtitle,
    categories = [],
  } = data;

  // Define static colors based on index (you can switch to a color map later)
  const colorClasses = [
    {
      color: "border-green-600",
      textColor: "text-green-600",
    },
    {
      color: "border-orange-500",
      textColor: "text-orange-500",
    },
    {
      color: "border-blue-600",
      textColor: "text-blue-600",
    },
    {
      color: "border-pink-600",
      textColor: "text-pink-600",
    },
    {
      color: "border-green-600",
      textColor: "text-green-600",
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 text-white text-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${productbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="mb-12 opacity-90 text-white">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {categories.map((product, index) => {
            const { color, textColor } = colorClasses[index] || colorClasses[0];

            return (
              <a
                href={product.link || "#"}
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white ${color} border-4 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-3/4 h-3/4"
                  />
                </div>
                <h3
                  className={`font-bold text-lg md:text-xl lg:text-2xl group-hover:text-yellow-300 transition-colors duration-300 ${textColor}`}
                >
                  {product.title}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
