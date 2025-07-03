import whoimg from "../../assets/banner1.jpg";
import whatimg from "../../assets/banner2.png";
import whereimg from "../../assets/banner3.png";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 flex-col lg:flex-row">
          {/* WHO Panel */}
          <div className="relative flex-1 h-64 md:h-80 lg:h-96 xl:h-[650px] overflow-hidden group">
            <img
              src={whoimg}
              alt="Farmer planting rice in a field"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                  WHO
                </h2>
              </div>
            </div>
          </div>

          {/* WHAT Panel */}
          <div className="relative flex-1 h-64 md:h-80 lg:h-96 xl:h-[650px] overflow-hidden group">
            <img
              src={whatimg}
              alt="Tractor spraying crops in a green field"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                  WHAT
                </h2>
              </div>
            </div>
          </div>

          {/* WHERE Panel */}
          <div className="relative flex-1 h-64 md:h-80 lg:h-96 xl:h-[650px] overflow-hidden group">
            <img
              src={whereimg}
              alt="Hand touching rice crop"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                  WHERE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
