"use client"

import { useState } from "react"
import TestiImg from "../../assets/testimonial.jpg"

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "LOREM IPSUM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      subtitle: "Lorem ipsum",
    },
    {
      id: 2,
      name: "FARMER NAME",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      subtitle: "Village name",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentTestimonial]

  return (
    <section className="w-full bg-yellow-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">IIFCO-MC Kisaan</h2>
          <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="flex items-center justify-center relative">
          <button
            className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200 -ml-6"
            onClick={prevTestimonial}
          >
            <span className="text-xl md:text-2xl">‹</span>
          </button>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-4 -left-4 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              &ldquo;
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden testiin">
              <div className="w-[60%] text-left p-[80px] pr-[20px]">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{testimonial.text}</p>
                <h3 className="text-black font-bold text-lg md:text-3xl mb-2">{testimonial.name}</h3>
                <p className="text-[#ED1C24] text-sm md:text-xl">{testimonial.subtitle}</p>
              </div>

              <div className="w-[40%] overflow-hidden shadow-lg rightimg">
                <img
                  src={TestiImg}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              &rdquo;
            </div>
          </div>

          <button
            className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200 -mr-6"
            onClick={nextTestimonial}
          >
            <span className="text-xl md:text-2xl">›</span>
          </button>
        </div>
      </div>
    </section>
  )
}
