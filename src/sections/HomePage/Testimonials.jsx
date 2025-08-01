"use client";

import { useState, useEffect } from "react";
import TopQuote from "../../assets/tq.png";
import BotQuote from "../../assets/bq.png";
import { Link } from "react-router-dom";

export default function TestimonialSection({ data }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/testimonials?_embed")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          content: item.content.rendered,
          video: item.acf?.youtube_video || "",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/testimonial.jpg",
        }));
        setTestimonials(formatted);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
      });
  }, []);
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  if (!testimonial) return null;

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 sm:mb-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mb-4 sm:mb-[120px]">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold ">
            {data?.title}
          </h2>
          <p className="text-gray-600 text-lg">
            Empowering Fields, Earning Trust
          </p>
        </div>

        <div className="flex items-center justify-center relative">
          <button
            className="hidden sm:inline-block absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200 -ml-6"
            onClick={prevTestimonial}
          >
            <span className="text-xl md:text-2xl">‹</span>
          </button>

          <div className="relative max-w-4xl mx-auto">
            {/* Top Quote */}
            <div className="hidden sm:inline-block absolute -top-24 -left-24 z-0 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              <img src={TopQuote} alt="top quote" />
            </div>

            {/* Testimonial Card */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 overflow-hidden testiin">
              {/* Text */}
              <div className="w-[100%] sm:w-[60%] text-left p-[15px] pb-[0px] sm:pr-[20px] sm:p-[80px]">
                <div
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonial.content }}
                />
                {/* <Link
                  href="#" // TODO: Replace with your actual link
                  className="text-[#ED1C24] font-bold flex items-center hover:text-green-700 transition-colors duration-200 group"
                >
                  Learn More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </Link> */}
              </div>

              {/* Image */}
              <div className="w-[40%] overflow-hidden shadow-lg rightimg">
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="hidden sm:inline-block absolute -bottom-24 -right-24 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              <img src={BotQuote} alt="bottom quote" />
            </div>
          </div>

          <button
            className="hidden sm:inline-block absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200 -mr-6"
            onClick={nextTestimonial}
          >
            <span className="text-xl md:text-2xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
