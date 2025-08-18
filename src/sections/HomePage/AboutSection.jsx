"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutSection({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 aboutsection relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Genuine Quality Agrochemicals at Reasonable Price !
            </h2>

            <div
              className="text-gray-800 leading-relaxed text-justify whitespace-pre-line para"
              dangerouslySetInnerHTML={{ __html: data.short }}
            />

            <button
              onClick={() => setIsOpen(true)}
              className="text-[#ED1C24] font-bold flex items-center hover:text-green-700 transition-colors duration-200 group"
            >
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                <i className="fa-solid fa-chevron-right"></i>
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

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-[800px] w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-3 text-gray-500 hover:text-red-600 text-[30px]"
            >
              &times;
            </button>

            <div
              className="text-gray-800 leading-relaxed text-justify whitespace-pre-line para"
              dangerouslySetInnerHTML={{ __html: data.long }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
