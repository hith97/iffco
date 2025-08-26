import React, { useState } from "react";
import careerimg from "../../assets/careerimg.png"

function CareerIntro() {


  return (
    <section className="w-full py-12 md:py-16 lg:py-20 aboutsection relative careerintro">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Grow With a Purpose. <br /> Thrive With Us !
            </h2>

            <p className="text-gray-800 leading-relaxed text-justify whitespace-pre-line para">
              At IFFCO-MC, we believe that our people are our greatest strength.
              As a joint venture between IFFCO, India’s Premier Cooperative and
              Mitsubishi Corporation, Japan, A Global Leader in innovation
              IFFCO-MC offers a unique platform where purpose meets performance,
              and tradition meets transformation.
            </p>

           </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={careerimg}
              alt="About IFFCO-MC"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerIntro;
