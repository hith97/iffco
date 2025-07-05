import React from "react";
import coreimg from "../../assets/coreimg.jpg";

export default function CoreObjective() {
  return (
    <>
      <div className="w-full">
        {/* Company Overview Section */}
        <div className="w-full bg-[#F5F6E8]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-between">
            <div className="w-[45%] lg:pr-8">
              <div className="p-6">
                <p className="">
                  Founded in August 2015, IFFCO-MC Crop Science Pvt. Ltd.
                  established as a joint venture between IFFCO and Mitsubishi
                  Corporation, with an equity structure of 51:49. Since its
                  inception, the company has demonstrated steady growth,
                  offering innovative crop protection solutions and expanding
                  its presence in India’s agricultural sector.
                </p>
              </div>
            </div>

            <div className="w-[40%] overflow-hidden rightimg caseimg">
              <img
                src={coreimg}
                alt="IFFCO-MC team members in office setting"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Core Objectives Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
          <div className=" mb-12">
            <h2 className="h2">Core Objectives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Diversified Product Portfolio */}
            <div className="bg-[#F5F6E8] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-4 leading-tight">
                  Diversified Product Portfolio
                </h3>
                <p className="">
                  Offering herbicides, pesticides, fungicides, and plant growth
                  regulators to enhance farm productivity.
                </p>
              </div>
            </div>

            {/* Farmer-Centric Business Model */}
            <div className="bg-[#008C44] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                  Farmer-Centric Business Model
                </h3>
                <p className="text-white max-w-xs m-auto">
                  Prioritizing transparency and trust in all operations
                </p>
              </div>
            </div>

            {/* High-Quality, Affordable Products */}
            <div className="bg-[#008C44] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                  High-Quality, Affordable Products
                </h3>
                <p className="text-white max-w-xs m-auto">
                  Ensuring cost-effective crop solutions for Indian farmers.
                </p>
              </div>
            </div>

            {/* Kisan Suraksha Bima Yojana */}
            <div className="bg-[#F5F6E8] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-4 leading-tight">
                  Kisan Suraksha Bima Yojana
                </h3>
                <p className="max-w-xs m-auto">
                  Providing free accidental insurance for farmers purchasing
                  IFFCO-MC products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
