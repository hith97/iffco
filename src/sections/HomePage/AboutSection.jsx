"use client";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection({ data }) {
  if (!data) return null;

  // Split title for two lines (optional, still here if you want to use later)
  const [line1, line2] = data.title?.split("At") || ["", ""];

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
              className="text-gray-800 leading-relaxed text-justify whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: data.short }}
            />

            <Link
              href="#" // TODO: Replace with your actual link
              className="text-green-600 font-bold flex items-center hover:text-green-700 transition-colors duration-200 group"
            >
              Read More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
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
    </section>
  );
}
