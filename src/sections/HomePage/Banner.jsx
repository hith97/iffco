export default function Banner({ data }) {
  if (!data) return null;

  const sections = [data.who, data.what, data.where];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {sections.map((item, index) => (
            <div
              key={index}
              className="relative flex-1 h-64 md:h-80 lg:h-96 xl:h-[650px] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8">
                  <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
