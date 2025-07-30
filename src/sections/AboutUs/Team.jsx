"use client";

import { useState, useEffect } from "react";

export default function BoardOfDirectors() {
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/ifc/wp-json/wp/v2/team?_embed&order=asc&orderby=date")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title.rendered,
          title: item.acf?.designation || "Board Member",
          image:
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.svg",
          bio: item.excerpt?.rendered || "", // optional short description
          detailedBio: item.content?.rendered || "",
        }));
        setDirectors(formatted);
      })
      .catch((err) =>
        console.error("Failed to fetch team members from WP:", err)
      );
  }, []);

  const openModal = (director) => {
    setSelectedDirector(director);
  };

  const closeModal = () => {
    setSelectedDirector(null);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
          Board of Directors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {directors.map((director) => (
            <div
              key={director.id}
              className="text-center group cursor-pointer"
              onClick={() => openModal(director)}
            >
              <div className="relative mb-[-80px]">
                <div className="w-60 h-60 mx-auto rounded-full overflow-hidden transition-all duration-300">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[100px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-2 group-hover:text-green-700 transition-colors duration-200">
                  {director.name}
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  {director.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDirector && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 md:p-8 lg:p-10">
              {/* Modal Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={selectedDirector.image}
                    alt={selectedDirector.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-green-600 text-2xl md:text-3xl font-bold mb-2">
                    {selectedDirector.name}
                  </h3>
                  <p className="text-gray-700 text-lg md:text-xl font-medium">
                    {selectedDirector.title}
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div
                  className="text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: selectedDirector.detailedBio }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
