import React from "react";
import distriicon from "../../assets/distriicon.png";
import whatrocket from "../../assets/salesandmarket.png";
import wicon1 from "../../assets/wicon1.png";
import wicon2 from "../../assets/wicon2.png";


function WhoInfra() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap sm:flex-nowrap overflow-hidden rounded-[20px] sm:rounded-[150px]">
          <div className="w-[100%] sm:w-[50%] p-[20px]">
            <div className="whatleftmain flex flex-wrap sm:flex-nowrap gap-6">
              <div className="w-[100%] text-center sm:w-[15%]">
                <img src={whatrocket} alt="imgrc" className="w-auto" />
              </div>
              <div className="w-[100%] sm:w-[75%]">
                <h3 className="text-3xl font-bold text-[#008C44] mb-2">
                  Sales & Marketing Network
                </h3>
                <p>
                  IFFCO-MC has a nationwide presence, operating in 20+ major
                  agricultural states with a robust distribution framework.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] sm:w-[50%] p-[20px] bg-[#008C44]">
            <div className="whatrighmain flex flex-wrap sm:flex-nowrap gap-6">
              <div className="w-[100%] text-center sm:w-[15%]">
                <img src={wicon1} alt="imgrc" className="w-auto" />
              </div>
              <div className="w-[100%] sm:w-[75%]">
                <p className="text-white">
                  110 sales territories, supported by a 300 member field demand
                  generation team
                </p>
              </div>
            </div>
            <div className="whatrighmain flex flex-wrap sm:flex-nowrap gap-6">
              <div className="w-[100%] text-center sm:w-[15%]">
                <img src={wicon2} alt="imgrc" className="w-auto" />
              </div>
              <div className="w-[100%] sm:w-[75%]">
                <p className="text-white">
                  A total workforce of 500 professionals, ensuring seamless
                  farmer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="h2 flex gap-4">
          <img src={distriicon} className="w-[75px]" />
          Distribution Network
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-[100%] sm:w-[45%] bg-[#F5F6E8] md:py-[40px] md:px-[25px] rounded-[15px] p-[15px] sm:rounded-[90px]">
            <div className="flex items-center flex-wrap sm:flex-nowrap justify-center mb-4">
              <h4 className="text-5xl font-semibold text-[#ED1C24]">11,000+</h4>
              <p className="uppercase font-semibold text-2xl text-[#008C44] mb-0">
                active channel partners
              </p>
            </div>
            <p className="text-center">
              {" "}
              making IFFCO-MC the widest-reaching agrochemical supplier in
              India.
            </p>
          </div>
          <div className="w-[100%] sm:w-[45%] bg-[#F5F6E8] md:py-[40px] md:px-[25px] rounded-[15px] p-[15px] sm:rounded-[90px]">
            <div className="flex items-center flex-wrap sm:flex-nowrap justify-center mb-4">
              <h4 className="text-5xl font-semibold text-[#ED1C24]">25+</h4>
              <p className="uppercase font-semibold text-2xl text-[#008C44] mb-0">
                FIELD WAREHOUSES
              </p>
            </div>
            <p className="text-center">
              enabling efficient supply chain management and wholesale
              agricultural inputs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoInfra;
