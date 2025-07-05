import React from "react";

function QualityPolicyCon() {
  return (
    <div>
      <div className="w-full mb-[80px]">
        {/* Core Objectives Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
          <div className=" mb-12">
            <h2 className="h2">QUALITY POLICY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Diversified Product Portfolio */}
            <div className="bg-[#F5F6E8] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <p className="">
                  At IFFCO MC Crop Science Pvt. Ltd., we are dedicated to
                  exceeding customer expectations by delivering high-quality
                  products and innovative crop solutions – on time, every time.
                </p>
              </div>
            </div>

            {/* Farmer-Centric Business Model */}
            <div className="bg-[#008C44] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <p className="text-white max-w-xs m-auto">
                  We focus on continuous improvement to enhance the quality of
                  our products and services, ensuring maximum customer
                  satisfaction and value.
                </p>
              </div>
            </div>

            {/* High-Quality, Affordable Products */}
            <div className="bg-[#008C44] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <p className="text-white max-w-xs m-auto">
                  As a responsible and compliant organization, we strictly
                  adhere to all statutory and regulatory requirements governing
                  the industry.
                </p>
              </div>
            </div>

            {/* Kisan Suraksha Bima Yojana */}
            <div className="bg-[#F5F6E8] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-center">
                <p className=" m-auto">
                  Our goal is to drive operational excellence by optimizing business processes, adopting industry best practices, and consistently developing staff competencies for sustained effectiveness and productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityPolicyCon;
