import React from "react";
import telephone from "../../assets/telephone.png";

function HowtoClaim({ data }) {
  if (!data) return null;

  const { title, html } = data; // 👈 FIXED here

  return (
    <>
      <div className="container my-[80px]">
        {/* Contact Section */}
        <div className="mb-8">
          <div className="bg-[#F5F6E8] p-2 sm:p-8">
            <div className="text-center mb-8">
              <h3 className="mb-2 text-[34px] font-bold text-[#008C44]">
                How to initiate a claim?
              </h3>
              <p className="text-lg text-black font-bold">
                In the event of a claim, IFFCO-Tokio needs to be contacted on its Customer Care number:
              </p>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-0">
              <div className="flex items-center space-x-4 w-full sm:w-[30%]">
                <img src={telephone} alt="Phone" className="w-12" />
                <p className="text-lg mb-1">1800-103-5499 (Toll Free)</p>
              </div>

              <div className="w-px h-20 bg-gray-300 mx-8 hidden sm:inline-block"></div>

              <div className="flex items-center space-x-4 w-full sm:w-[30%]">
                <img src={telephone} alt="Phone" className="w-12" />
                <p className="text-lg mb-1">+91-124-4285499</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Claim Document Section */}
        <div className="mt-10">
          <h2 className="text-[26px] md:text-[30px] font-bold text-green-700 mb-4">
            {title}
          </h2>
          <div
            className="text-black text-lg font-semibold"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
}

export default HowtoClaim;
