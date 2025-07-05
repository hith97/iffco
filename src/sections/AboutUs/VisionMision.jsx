import React from "react";
import TestiImg from "../../assets/visionimg.jpg";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";

export default function VisionMision() {
  return (
    <>
      <div className="visiontop mb-8">
        <h2>Vision</h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden testiin">
          <div className="w-[60%] text-left p-[80px] pr-[20px]">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To enhance farmer income by providing good quality crop protection
              products at reasonable prices
            </p>
          </div>

          <div className="w-[40%] overflow-hidden shadow-lg rightimg">
            <img
              src={TestiImg}
              alt="vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="visiontop">
        <h2>Mission</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 lg:gap-8">
          <div className="text-center group cursor-pointer flex-1 min-h-[360px] flex flex-col">
            <div className="relative mb-[-65px]">
              <div className="w-[130px] h-[130px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                <img
                  src={Icon1}
                  alt="icon1"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F5F6E8] pt-[90px] pb-[10px] px-6 flex-1 flex items-center">
              <p className="text-black-700 text-lg">
                To develop a channel for farmers to access genuine products and
                knowledge with focus on safety, health and environment.
              </p>
            </div>
          </div>
          <div className="text-center group cursor-pointer flex-1 min-h-[360px] flex flex-col">
            <div className="relative mb-[-65px]">
              <div className="w-[130px] h-[130px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#F5F6E8] duration-300">
                <img
                  src={Icon2}
                  alt="icon1"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-[#008C44] pt-[90px] pb-[10px] px-6 flex-1 flex items-center">
              <p className="text-black-700 text-lg text-white">
                To develop a channel for farmers to access genuine products and
                knowledge with focus on safety, health and environment.
              </p>
            </div>
          </div>
          <div className="text-center group cursor-pointer flex-1 min-h-[360px] flex flex-col">
            <div className="relative mb-[-65px]">
              <div className="w-[130px] h-[130px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                <img
                  src={Icon1}
                  alt="icon1"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F5F6E8] pt-[90px] pb-[10px] px-6 flex-1 flex items-center">
              <p className="text-black-700 text-lg">
                To develop a channel for farmers to access genuine products and
                knowledge with focus on safety, health and environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
