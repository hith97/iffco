import React from "react";
import iffcoimg from "../../assets/ifc2.png";
import mclogo from "../../assets/mclogo.png";
import whatabimg from "../../assets/whatabimg.jpg";

function WhatAbout() {
  return (
    <>
      <div className="whataboutmain">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px] mb-[40px] max-w-[950px] mx-auto">
            <img src={iffcoimg} alt="iffcomg" className="w-auto sm:w-[280px]" />
            <p className="mb-0">
              Incorporated on August 28, 2015, IFFCO-MC Crop Science Pvt. Ltd.
              (IFFCO-MC) is a Joint Venture between Indian Farmers Fertilizer
              Cooperative Limited (IFFCO) and Mitsubishi Corporation, Japan with
              equity holding in the ratio of 51:49 respectively. The company
              envisages to enhance farmer income by providing good quality crop
              protection products at reasonable prices.
            </p>
          </div>
          <div className="abmaincon max-w-[950px] mx-auto">
            <p>
              The company operations have expanded to 18 states, covering major
              agro-climatic zones with more than 7500 channel partners and a
              comprehensive product basket of 85+ products. IFFCO-MC operates on
              a Single-Tier Distribution Model with no middle-tier involved,
              ensuring greater Transparency, Efficiency, and a Farmer-Friendly
              system offering products at Reasonable Price. The Company also
              provides free Accidental Insurance cover to farmers through the
              novel insurance scheme named "Kisan Suraksha Bima Yojana". Farmers
              purchasing products of a minimum of ₹150 and a maximum of ₹15000
              will be eligible under the insurance scheme and the sum insured
              will vary between a minimum of ₹1,000 and a maximum of ₹1,00,000
              depending upon the amount of agrochemical products purchased by
              the farmer.
            </p>
          </div>
          <img src={whatabimg} alt="about img" className="w-full mt-[60px]" />
        </div>
      </div>
    </>
  );
}

export default WhatAbout;
