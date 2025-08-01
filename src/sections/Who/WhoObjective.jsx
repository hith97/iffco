import React from "react";
import objectiveimg from "../../assets/objective.png";

export default function WhoObjective() {
  return (
    <>
    <div className="container">
      <div className="-mb-8 md:-mb-12 lg:-mb-16">
        <div className="main-con w-full">
          <h2 className="text-center sm:mb-[80px]">Core Objectives</h2>
          <div className="relative ">
{/*           
            <p className="max-w-md text-left text-lg text-black relative md:absolute">
              Founded in August 2015, IFFCO-MC Crop Science Pvt. Ltd.
              established as a joint venture between IFFCO and Mitsubishi
              Corporation, with an equity structure of 51:49. Since its
              inception, the company has demonstrated steady growth, offering
              innovative crop protection solutions and expanding its presence in
              India’s agricultural sector.
            </p> */}
            <img src={objectiveimg} alt="img" className="w-full" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
