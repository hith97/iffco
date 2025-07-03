import productbg from '../../assets/productbg.jpg'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'


export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "HERBICIDES",
      color: "border-green-600",
      bgColor: "bg-green-600",
      productimg: product1,
    },
    {
      id: 2,
      name: "INSECTICIDES",
      color: "border-orange-500",
      bgColor: "bg-orange-500",
      productimg: product2,
    },
    {
      id: 3,
      name: "FUNGICIDES",
      color: "border-blue-600",
      bgColor: "bg-blue-600",
      productimg: product3,
    },
    {
      id: 4,
      name: "PGR",
      color: "border-pink-600",
      bgColor: "bg-pink-600",
      productimg: product4,
    },
  ]

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">OUR PRODUCTS</h2>
        <p className="mb-12 opacity-90 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {products.map((product) => (
            <div className="flex flex-col items-center group cursor-pointer" key={product.id}>
              <div
                className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white ${product.color} border-4 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
              >
                <img
                  src={product.productimg}
                  alt={product.name}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl group-hover:text-yellow-300 transition-colors duration-300">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
