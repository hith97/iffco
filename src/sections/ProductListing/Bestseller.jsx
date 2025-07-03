"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import ProductCard from "./ProductCard"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function BestSellers() {
  const bestSellerProducts = [
    { id: 1, name: "FURUSATO", category: "fungicides", categoryLabel: "Fungicide", categoryColor: "bg-blue-600" },
    { id: 2, name: "FURUSATO", category: "pgr", categoryLabel: "PGR", categoryColor: "bg-pink-600" },
    { id: 3, name: "FURUSATO", category: "insecticides", categoryLabel: "Insecticide", categoryColor: "bg-orange-500" },
    { id: 4, name: "FURUSATO", category: "herbicides", categoryLabel: "Herbicide", categoryColor: "bg-green-600" },
    { id: 5, name: "FURUSATO", category: "fungicides", categoryLabel: "Fungicide", categoryColor: "bg-blue-600" },
    { id: 6, name: "FURUSATO", category: "pgr", categoryLabel: "PGR", categoryColor: "bg-pink-600" },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">BEST SELLERS</h2>
          <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="best-sellers-swiper"
          >
            {bestSellerProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="flex justify-center mt-8">
          <div className="swiper-pagination-custom flex space-x-2"></div>
        </div>
      </div>
    </section>
  )
}
