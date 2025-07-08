import React from "react";

function ServicesIntro() {
  return (
    <>
      <div className="container my-[80px]">
        <div className="mb-8">
          <h2 className="mb-6">Services</h2>

          <div className="bg-[#F5F6E8] p-8 ">
            {/* Company Name */}
            <div className="text-center mb-8">
              <h3 className="mb-2 text-[28px] text-[#008C44] font-bold">IFFCO-MC</h3>
              <p className="text-lg italic">
                Kisan Suraksha Bima Yojna <br /> Krishi-Rasayanon Ke Saath, Bima
                Haathon Haath
              </p>
            </div>

            {/* Address and Phone Section */}
            <div className="flex items-start justify-center">
              {/* Address Section */}
              <div className="w-[100%]">
                  <p className="text-lg mb-6 text-center">
                    IFFCO-MC Crop Science Pvt. Ltd. has come up with a new
                    Personal Accident Insurance scheme for its customers buying
                    agrochemical products. This scheme offers a Personal
                    Accident cover, the premium for which will be paid by
                    IFFCO-MC and will be implemented by IFFCO-Tokio General
                    Insurance Co. Ltd.
                  </p>
                  <p className="text-lg mb-1 text-center">
                    Farmers purchasing products of a minimum of ₹150 will be
                    eligible under the insurance scheme and the sum insured will
                    vary between a minimum of ₹1,000 and a maximum of ₹1,00,000
                    depending upon the amount of agrochemical products purchased
                    by the farmer.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesIntro;
