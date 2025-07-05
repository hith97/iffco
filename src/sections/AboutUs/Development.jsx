import React from "react";
import devimg from "../../assets/development.jpg";

export default function Development() {
  return (
    <>
      <div className="flex my-[80px] flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden testiin">
        <div className="w-[60%] text-left p-[80px] pr-[20px]">
          <p className="text-black-700 text-base md:text-lg leading-relaxed max-w-[480px]">
            Our team works across diverse agroclimatic zones, ensuring the
            effectiveness of our products for crop-specific solutions like
            cotton herbicides, rice fungicides, and sugarcane weed control.
          </p>
        </div>

        <div className="w-[40%] overflow-hidden shadow-lg rightimg">
          <img
            src={devimg}
            alt="vision"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h2 className="h2 mb-6">Key Highlights</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-[#F5F6E8] px-6 py-[40px] flex-1 text-2xl font-bold text-[#008C44] text-center">
            A highly experienced product development team covering India’s major
            farming regions.
          </div>
          <div className="bg-[#008C44] px-6 py-[40px] flex-1 text-2xl font-bold text-white text-center">
            Strategic product testing centers across seven key agricultural
            zones.
          </div>
        </div>
      </div>
    </>
  );
}
