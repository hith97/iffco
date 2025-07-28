import React from "react";
import whatrandd from "../../assets/randdimg.png";
import whatrocket from "../../assets/rocket.png";

function WhatRandD() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 overflow-hidden testiin randdtop mt-[80px]">
        {/* Text */}
        <div className="w-[100%] sm:w-[60%] text-left p-[15px] pb-[0px] sm:pr-[20px] sm:p-[80px] lftcon">
          <div className="whatleftmain flex flex-wrap sm:flex-nowrap gap-6">
            <div className="w-[100%] text-center sm:w-[15%]">
              <img src={whatrocket} alt="imgrc" className="w-auto" />
            </div>
            <div className="w-[100%] sm:w-[75%]">
              <h3 className="h2">Development & Innovation</h3>
              <p>
                Our team works across diverse agroclimatic zones, ensuring the
                effectiveness of our products for crop-specific solutions like
                cotton herbicides, rice fungicides, and sugarcane weed control.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-[100%] sm:w-[40%] overflow-hidden shadow-lg rightimg">
          <img
            src={whatrandd}
            alt="testimonial"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="h2">Key Highlights</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-[100%] sm:w-[45%] bg-[#F5F6E8] md:py-[40px] md:px-[25px] rounded-[15px] p-[15px] sm:rounded-[90px]">
            <h4 className="text-xl text-[#008C44] text-center font-bold max-w-xs mx-auto">
              A highly experienced product development team covering India’s
              major farming regions.
            </h4>
          </div>
          <div className="w-[100%] sm:w-[45%] bg-[#F5F6E8] md:py-[40px] md:px-[25px] rounded-[15px] p-[15px] sm:rounded-[90px]">
            <h4 className="text-xl text-[#008C44] text-center font-bold max-w-xs mx-auto">
              Strategic product testing centers across seven key agricultural
              zones.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatRandD;
