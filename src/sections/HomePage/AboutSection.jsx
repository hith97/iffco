"use client";
import { useState } from "react";

export default function AboutSection({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  if (!data) return null;

  // Split title for two lines
  const [line1, line2] = data.title?.split("At") || ["", ""];

  return (
    <section className="w-full bg-yellow-50 py-12 md:py-16 lg:py-20 aboutsection relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-green-600 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {line1}
              <br />
              <span className="text-green-700">At {line2?.trim()}</span>
            </h2>

            <div
              className="text-gray-800 leading-relaxed text-justify whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: data.short }}
            />
            <button
              onClick={toggleModal}
              className="text-green-600 font-bold flex items-center hover:text-green-700 transition-colors duration-200 group"
            >
              Read More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={data.image}
              alt="About IFFCO-MC"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#fdfcf3] max-w-4xl mx-4 p-6 md:p-10 rounded-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-800 text-2xl hover:text-red-600"
            >
              &times;
            </button>

            <h3 className="text-green-700 text-3xl md:text-4xl font-bold text-center mb-6 leading-snug">
              {line1}
              <br />
              <span className="text-green-700">At {line2?.trim()}</span>
            </h3>

            <img
              src={data.image}
              alt="About Modal"
              className="mx-auto w-40 md:w-56 mb-6"
            />
            <div
              className="text-gray-800 leading-relaxed text-justify whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: data.long }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
