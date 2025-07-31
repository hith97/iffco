"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import newsimg from "../../assets/news.png";

const tabs = [
  { id: "introduction", label: "Introduction" },
  { id: "csr", label: "CSR Initiatives" },
];

export default function CSRDetails({ data }) {
  const [activeTab, setActiveTab] = useState("news"); // default will be overridden
  const [csrItems, setCsrItems] = useState([]);

  // Handle tab from URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (tabs.some((tab) => tab.id === hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab("introduction"); // fallback
    }
  }, []);

  // Fetch CSR Initiatives
  useEffect(() => {
    if (activeTab !== "csr") return;

    fetch("http://localhost:8082/ifc/wp-json/wp/v2/csr?_embed&order=asc")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Untitled",
          content: item.content?.rendered || "<p></p>",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || newsimg,
        }));
        setCsrItems(formatted);
      })
      .catch((err) => console.error("Failed to fetch CSR:", err));
  }, [activeTab]);

  const { title, subtitle } = data || {};
  const currentItems = activeTab === "csr" ? csrItems : [];

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

        {/* Content */}
        {activeTab === "introduction" ? (
          <div
            className="csrcontentintro"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          />
        ) : currentItems.length > 0 ? (
          <div className="relative csrtabs">
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
                    <h3
                      className="text-2xl font-semibold text-gray-800 mb-3 leading-snug"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <div
                      className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 latestcon"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <Link
                      to={`/csr/${item.id}`}
                      className="text-red-600 font-bold text-sm hover:underline"
                    >
                      Continue Reading{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
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
