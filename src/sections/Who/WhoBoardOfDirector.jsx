"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

export default function WhoBoardOfDirector() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8082/ifc/wp-json/wp/v2/team?_embed&order=asc&orderby=date"
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title.rendered,
          title: item.acf?.designation || "Board Member",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.svg",
          bio: item.excerpt?.rendered || "",
          detailedBio: item.content?.rendered || "",
        }));
        setDirectors(formatted);
      })
      .catch((err) => console.error("Failed to fetch team members:", err));
  }, []);

  if (directors.length === 0)
    return <div className="text-center py-12">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="mb-10 text-center">Board of Directors</h2>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        modules={[Navigation]}
        className="mb-12"
      >
        {directors.map((director) => (
          <SwiperSlide key={director.id} className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Swiper with details */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="max-w-full mx-auto"
      >
        {directors.map((director) => (
          <SwiperSlide key={director.id}>
            <div className="bg-white shadow-xl overflow-hidden boardmemberin">
              <div className="mb-6">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md"
                />
              </div>
              <div className="titleteam">
                <h3 className="text-green-700 text-2xl font-bold">
                  {director.name}
                </h3>
                <p className="text-gray-600 text-lg font-medium mb-0 mt-1">
                  {director.title}
                </p>
              </div>
              <div
                className="text-gray-700 text-base leading-relaxed text-left max-w-full mx-auto"
                dangerouslySetInnerHTML={{ __html: director.detailedBio }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
