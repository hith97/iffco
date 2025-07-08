import React from "react";
import telephone from "../../assets/telephone.png";

function HowtoClaim() {
  return (
    <>
      <div className="container my-[80px]">
        {/* Corporate Office Section */}
        <div className="mb-8">
          <div className="bg-[#F5F6E8] p-8 ">
            {/* Company Name */}
            <div className="text-center mb-8">
              <h3 className="mb-2 text-[34px] font-bold text-[#008C44]">
                How to initiate a claim?
              </h3>
              <p className="text-lg text-black-700 font-bold">
                In the event of a claim, IFFCO-Tokio needs to be contacted on its Customer Care number:
              </p>
            </div>

            {/* Address and Phone Section */}
            <div className="flex items-start justify-center ">
              {/* Address Section */}
              <div className="flex items-center space-x-4 w-[30%] ">
                <img src={telephone} alt="Phone" className="w-12" />
                <p className="text-lg mb-1">1800-103-5499 (Toll Free)</p>
              </div>

              {/* Vertical Divider */}
              <div className="w-px h-20 bg-gray-300 mx-8"></div>

              {/* Phone Section */}
              <div className="flex items-center space-x-4 w-[30%] ">
                <img src={telephone} alt="Phone" className="w-12" />
                <p className="text-lg mb-1">+91-124-4285499</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
            <h2>Documents required for claim settlement</h2>
            <ol className="list-decimal list-inside text-black text-lg font-semibold space-y-1">
                <li>Purchase receipt in original</li>
                <li>Copy of FIR</li>
                <li>Copy of the medical report by treating doctor</li>
                <li>Copy of post mortem report </li>
                <li>Copy of death certificate duly attested by registrar</li>
                <li>Society documents duly attested by IFFCO Field Officer</li>
                <li>NEFT details of the claimant</li>
            </ol>
            <p className="font-semibold text-[30px] text-[#DC1F2C] py-6">All documents are to be submitted within 2 months of the accident / death.</p>
        </div>
      </div>
    </>
  );
}

export default HowtoClaim;
