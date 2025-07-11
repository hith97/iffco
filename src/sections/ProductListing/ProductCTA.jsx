import proimg from "../../assets/proimg.png"

export default function CallToActionBanner() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-600 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3">
              <img
                src={proimg}
                alt="Farmer with products"
                className="w-full h-48 lg:h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-white flex items-center justify-between">
              <p className="text-[22px]/[42px] mb-4 text-white">
                To purchase exclusive products of IFFCO-MC,<br /> please visit the nearest IFFCO Bazar Store.
              </p>
              <a className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"  href="https://www.iffco.in/en/iffco-e-bazar" target="_blank">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
