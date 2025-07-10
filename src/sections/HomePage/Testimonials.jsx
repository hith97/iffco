"use client";

import { useState, useEffect } from "react";
import TopQuote from "../../assets/tq.png";
import BotQuote from "../../assets/bq.png";

export default function TestimonialSection({ data }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8082/ifc/wp-json/wp/v2/testimonials?_embed")
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setIsModalOpen(false);
  };

  const testimonial = testimonials[currentTestimonial];

  if (!testimonial) return null;

  return (
    <section className="w-full bg-yellow-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {data?.title}
          </h2>
          <p className="text-gray-600 text-lg">{data?.subtitle}</p>
        </div>

        <div className="flex items-center justify-center relative">
          <button
            className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors duration-200 -ml-6"
            onClick={prevTestimonial}
          >
            <span className="text-xl md:text-2xl">‹</span>
          </button>

          <div className="relative max-w-4xl mx-auto">
            {/* Top Quote */}
            <div className="absolute -top-24 -left-24 z-0 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              <img src={TopQuote} alt="top quote" />
            </div>

            {/* Testimonial Card */}
            <div
              className="flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden testiin cursor-pointer"
              onClick={() => openModal(testimonial)}
            >
              {/* Text */}
              <div className="w-[60%] text-left p-[80px] pr-[20px]">
                <div
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonial.content }}
                />
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
            <div className="absolute -bottom-24 -right-24 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              <img src={BotQuote} alt="bottom quote" />
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

      {/* Modal Popup */}
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative shadow-lg overflow-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* YouTube Video */}
            {selectedTestimonial.video && (
              <div className="w-full aspect-video mb-6 mt-8">
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{
                    __html: selectedTestimonial.video.replace(
                      /width="\d+" height="\d+"/,
                      'class="w-full h-full"'
                    ),
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div
              className="text-gray-700 text-base md:text-lg"
              dangerouslySetInnerHTML={{
                __html: selectedTestimonial.content,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
