"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsimg from "../../assets/news.png";
import { Link } from "react-router-dom";
import TopQuote from "../../assets/tq.png";
import BotQuote from "../../assets/bq.png";

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState([]);

  // Fetch News
  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/careertestimonials?_embed")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Untitled",
          content: item.content?.rendered || "<p></p>",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || newsimg,
          date: item.acf?.date || "Date not available",
        }));
        setNewsItems(formatted);
      })
      .catch((err) => console.error("Failed to fetch news:", err));
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-20 md:mb-[40px]">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-[20px] sm:mb-[100px]">
            Latest News
          </h2>
        </div>

        {/* News Carousel */}
        {newsItems.length > 0 ? (
          <div className="relative careertesto">
            {/* Top Quote */}
            <div className="hidden sm:inline-block absolute -top-24 left-24 z-0 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              <img src={TopQuote} alt="top quote" />
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop
              className="pb-12"
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative max-w-4xl mx-auto py-4">
                    <div className="bg-white shadow-xl overflow-hidden flex justify-between flex-col md:flex-row testiin">
                      {/* Content */}
                      <div className="w-[100%] sm:w-[60%] text-left p-[15px] pb-[0px] sm:pr-[20px] sm:p-[80px]">
                        <div
                          className="text-gray-700 text-base md:text-lg leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                      {/* Image */}
                      <div className="w-[40%] overflow-hidden shadow-lg rightimg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Swiper Navigation */}
              <button className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-red-600 z-10"></button>
              <button className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-red-600 z-10"></button>
            </Swiper>
            {/* Bottom Quote */}
            <div className="hidden sm:inline-block absolute -bottom-24 right-24 text-green-600 text-6xl md:text-7xl lg:text-8xl font-serif leading-none">
              <img src={BotQuote} alt="bottom quote" />
            </div>
            {/* View More */}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No news available.</p>
        )}
      </div>
    </section>
  );
}
