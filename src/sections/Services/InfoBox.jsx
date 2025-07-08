import React from "react";
import serimg1 from "../../assets/accident.png"

function InfoBox() {
  return (
    <>
      <div className="container mb-[50px]">
        <h2>What we insure?</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 lg:gap-4">
          
            <div
              className="text-center group cursor-pointer w-[32%] min-h-[360px] flex flex-col"
            >
              <div className="relative mb-[-125px]">
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                  <img
                    src={serimg1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                    Rail / Road Accident
                </h3>
              </div>
            </div>
            <div
              className="text-center group cursor-pointer w-[32%] min-h-[360px] flex flex-col"
            >
              <div className="relative mb-[-125px]">
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                  <img
                    src={serimg1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                    Rail / Road Accident
                </h3>
              </div>
            </div>
            <div
              className="text-center group cursor-pointer w-[32%] min-h-[360px] flex flex-col"
            >
              <div className="relative mb-[-125px]">
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                  <img
                    src={serimg1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                    Rail / Road Accident
                </h3>
              </div>
            </div>
            <div
              className="text-center group cursor-pointer w-[32%] min-h-[360px] flex flex-col"
            >
              <div className="relative mb-[-125px]">
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                  <img
                    src={serimg1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                    Rail / Road Accident
                </h3>
              </div>
            </div>
            <div
              className="text-center group cursor-pointer w-[32%] min-h-[360px] flex flex-col"
            >
              <div className="relative mb-[-125px]">
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                  <img
                    src={serimg1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                    Rail / Road Accident
                </h3>
              </div>
            </div>
            <div
              className="text-center group cursor-pointer w-[32%] min-h-[360px] flex flex-col"
            >
              <div className="relative mb-[-125px]">
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                  <img
                    src={serimg1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                    Rail / Road Accident
                </h3>
              </div>
            </div>
        </div>
        <p className="text-center text-red-600 text-xl font-bold">Natural Death is not covered under the policy.</p>
      </div>
    </>
  );
}

export default InfoBox;
