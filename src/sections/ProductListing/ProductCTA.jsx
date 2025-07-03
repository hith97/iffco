export default function CallToActionBanner() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-600 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Farmer with products"
                className="w-full h-48 lg:h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6 lg:p-8 text-white">
              <p className="text-lg mb-4">
                To purchase exclusive products of IFFCO-MC, please visit the nearest IFFCO Bazar Store.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
