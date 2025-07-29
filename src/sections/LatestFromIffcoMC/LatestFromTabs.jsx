"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsimg from "../../assets/news.png"
const tabs = [
  { id: "news", label: "News & Media" },
  { id: "awards", label: "Awards & Recognition" },
  { id: "csr", label: "CSR Initiatives" },
  { id: "events", label: "Event Gallery" },
  { id: "videos", label: "Videos" },
];

const staticData = {
  awards: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.....",
      image: newsimg,
    },
  ],
  csr: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.....",
      image: newsimg,
    },
  ],
  events: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.....",
      image: newsimg,
    },
  ],
  videos: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.....",
      image: newsimg,
    },
  ],
};

export default function LatestFromTabs({ data }) {
  const [activeTab, setActiveTab] = useState("news");
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    if (activeTab !== "news") return;

    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/news?_embed")
      .then((res) => res.json())
      .then((json) => {
        console.log("News API response:", json); // <--- optional but helpful
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Untitled",
          content: item.content?.rendered || "<p></p>",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            newsimg,
          date: "25 April, 2025",
        }));
        setNewsItems(formatted);
      })

      .catch((err) => console.error("Failed to fetch news:", err));
  }, [activeTab]);

  const { title, subtitle } = data || {};

  const currentItems =
    activeTab === "news" ? newsItems : staticData[activeTab] || [];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <div className="tabmain">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`capitalize px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#d12627] text-white"
                    : "text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        {currentItems.length > 0 ? (
          <div className="relative">
            
              {currentItems.map((item) => (
                  <div className="relative container mx-auto py-4">
                    <div className="bg-white shadow-xl overflow-hidden flex justify-between flex-col md:flex-row testiin">
                      {/* Image */}
                      <div className="w-[100%] sm:w-[40%] overflow-hidden shadow-lg rightimg lftimg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-10 w-full md:w-[60%] text-left">
                        {activeTab === "news" && (
                          <p className="text-gray-500 text-sm mb-2">
                            {item.date}
                          </p>
                        )}
                        <h3
                          className="text-2xl font-semibold text-gray-800 mb-3 leading-snug"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        <div
                          className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 latestcon"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <a
                          href="#"
                          className="text-red-600 font-bold text-sm hover:underline"
                        >
                          Continue Reading →
                        </a>
                      </div>
                    </div>
                  </div>
              ))}

              
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No content available.
          </p>
        )}
      </div>
    </section>
  );
}
