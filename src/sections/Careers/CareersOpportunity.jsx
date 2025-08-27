"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsimg from "../../assets/news.png";
import { Link } from "react-router-dom";

export default function CareersOpportunity() {
  const [newsItems, setNewsItems] = useState([]);

  // Fetch News
  useEffect(() => {
    fetch("https://iffcomc.in/Iffcomcbackend/wp-json/wp/v2/career?_embed")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Untitled",
          content: item.content?.rendered || "<p></p>",
          experience: item.acf?.experience || "Not specified",
          jobRole: item.acf?.job_role || "Not specified",
          location: item.acf?.location || "Not specified",
        }));
        setNewsItems(formatted);
      })
      .catch((err) => console.error("Failed to fetch news:", err));
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-20 latest-home">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Current Openings
          </h2>
        </div>

        {/* News Carousel */}
        {newsItems.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop
              className="pb-12 careersmain"
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative max-w-4xl mx-auto py-4">
                    <div className="bg-white shadow-xl overflow-hidden flex items-center justify-between flex-col md:flex-row testiin">
                      {/* Image */}
                      <div className="w-[40%] overflow-hidden shadow-lg rightimg lftimg">
                        <div className="careerjd">
                          <h3
                            className="text-[25px] sm:text-[35px] font-bold text-green-800 mb-4"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <p className="text-green-700 font-semibold">
                            Experience :{" "}
                            <span className="font-semibold text-black">
                              {item.experience}
                            </span>
                          </p>
                          <p className="text-green-700 font-semibold">
                            Job Role :{" "}
                            <span className="font-semibold text-black">{item.jobRole}</span>
                          </p>
                          <p className="text-green-700 font-semibold">
                            Location :{" "}
                            <span className="font-semibold text-black">{item.location}</span>
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-10 md:w-[55%] text-left">                       
                        <div
                          className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 latestcon"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <Link
                          to={`/career/${item.id}`}
                          className="text-red-600 font-bold text-sm hover:underline"
                        >
                          Continue Reading{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Swiper Navigation */}
              <button className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-red-600 z-10"></button>
              <button className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-red-600 z-10"></button>
            </Swiper>

           
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            Comeback to check for jobs again or fill the form below or write us
            at the email give below and we will get back to you once the opening
            of your interest comes up.
          </p>
        )}
      </div>
    </section>
  );
}
