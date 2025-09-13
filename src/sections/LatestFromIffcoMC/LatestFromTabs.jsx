"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsimg from "../../assets/news.png";
import { Link } from "react-router-dom";
import awardbg from "../../assets/awardbg.png";

const tabs = [
  { id: "news", label: "News & Media" },
  { id: "awards", label: "Awards & Recognition" },
  { id: "events", label: "Event Gallery" },
  { id: "videos", label: "Videos" },
];

const staticData = {
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
const AwardCard = ({ title, image, content }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <div className="topbgimg">
        <div className="relative w-[250px] h-[250px] sm:w-[360px] sm:h-[360px] mb-4">
          <img
            src={image}
            alt={title}
            className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-contain mx-auto"
          />
          <img
            src={awardbg}
            className="absolute inset-0 w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>

      {/* 🟢 Title */}
      <p
        className="font-bold titleaward text-xl text-green-800 mb-0"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {/* 🔵 Description */}
      <p
        className="text-gray-800 text-lg font-medium px-2 mt-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

const EventCard = ({ image, title, content }) => {
  return (
    <div className="relative group overflow-hidden rounded shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#008C44] bg-opacity-65 flex flex-col items-center justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
        <h3 className="text-white italic font-bold mb-2 text-2xl">{title}</h3>
        {content && <p className="text-white text-xl">{content}</p>}
      </div>
    </div>
  );
};
export default function LatestFromTabs({ data }) {
  const [activeTab, setActiveTab] = useState("news");
  const [newsItems, setNewsItems] = useState([]);
  const [eventItems, setEventItems] = useState([]);
  const [awardItems, setAwardItems] = useState([]);
  const [videoItems, setVideoItems] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (tabs.some((tab) => tab.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  // News
  useEffect(() => {
    if (activeTab !== "news") return;

    fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/news?_embed")
      .then((res) => res.json())
      .then((json) => {
        console.log("News API response:", json); // <--- optional but helpful
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
  }, [activeTab]);

  // Events
  useEffect(() => {
    if (activeTab !== "events") return;

    fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/mediarelease?_embed")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Untitled",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || newsimg,
        }));
        setEventItems(formatted);
      })
      .catch((err) => console.error("Failed to fetch events:", err));
  }, [activeTab]);

  // Awards
  useEffect(() => {
    if (activeTab !== "awards") return;

    fetch(
      "https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/awards?_embed&order=asc"
    )
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "",
          content: item.content?.rendered || "", // ⬅ Make sure this line uses `item.content.rendered`
          image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || cir,
        }));
        setAwardItems(formatted);
      })
      .catch((err) => console.error("Failed to fetch awards:", err));
  }, [activeTab]);

  // videos

  useEffect(() => {
    if (activeTab !== "videos") return;

    fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/videos")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Untitled",
          content: item.content?.rendered || "",
          iframe: item.acf?.video_url || "",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || newsimg,
          date: item.date || "No Date",
        }));
        setVideoItems(formatted);
        setActiveVideo(formatted[0]); // Set the first as default active
      })
      .catch((err) => console.error("Failed to fetch videos:", err));
  }, [activeTab]);

  const { title, subtitle } = data || {};

  const currentItems =
    activeTab === "news"
      ? newsItems
      : activeTab === "events"
      ? eventItems
      : activeTab === "awards"
      ? awardItems
      : activeTab === "videos"
      ? videoItems
      : [];

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
                onClick={() => {
                  setActiveTab(tab.id);
                  window.history.replaceState(null, "", `#${tab.id}`);
                }}
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
          activeTab === "awards" ? (
            // Custom Awards Layout
            <div className="text-center">
              <div className="flex justify-center gap-12 flex-wrap items-center mb-6 max-w-[1050px] mx-auto">
                {currentItems.map((item) => (
                  <AwardCard
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          ) : activeTab === "events" ? (
            // 🖼️ Event Gallery Grid (No Slider)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {currentItems.map((item) => (
                <EventCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          ) : activeTab === "videos" ? (
            <div className="max-w-7xl mx-auto p-4 lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Embedded Video */}
                  <div className="relative mb-4 videomain">
                    <div
                      className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: activeVideo?.iframe }}
                    />
                  </div>

                  {/* Timestamp */}
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(activeVideo?.date).toLocaleString("en-IN", {
                      dateStyle: "long",
                      timeStyle: "short",
                      timeZone: "Asia/Kolkata",
                    })}
                  </p>

                  {/* Headline */}
                  <h1
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                    dangerouslySetInnerHTML={{ __html: activeVideo?.title }}
                  />

                  {/* Description (if any) */}
                  <div
                    className="prose prose-gray max-w-none"
                    dangerouslySetInnerHTML={{ __html: activeVideo?.content }}
                  />
                </div>

                {/* Sidebar */}
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    {videoItems
                      .filter((item) => item.id !== activeVideo?.id) // Exclude the currently active video
                      .map((article) => (
                        <div
                          key={article.id}
                          className="flex gap-3 group cursor-pointer"
                          onClick={() => {
                            setActiveVideo(article);
                            window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: scroll to top on click
                          }}
                        >
                          {/* Thumbnail */}
                          <div className="flex-shrink-0">
                            <img
                              src={article.image || "/placeholder.svg"}
                              alt="Related article thumbnail"
                              className="w-20 h-16 md:w-24 md:h-18 object-cover rounded group-hover:opacity-80 transition-opacity"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm text-gray-700 font-bold leading-tight line-clamp-3 group-hover:text-gray-900 transition-colors"
                              dangerouslySetInnerHTML={{
                                __html: article.title,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              {currentItems.map((item) => (
                <div key={item.id} className="relative container mx-auto py-4">
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
                      <Link
                        to={`/news/${item.id}`}
                        className="text-red-600 font-bold text-sm hover:underline"
                      >
                        Continue Reading{" "}
                        <i class="fa-solid fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No content available.
          </p>
        )}
      </div>
    </section>
  );
}
