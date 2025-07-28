import React from "react";
import iffcoimg from "../../assets/iflg.png";
import mclogo from "../../assets/mclogo.png";
import whatabimg from "../../assets/whatabimg.jpg"

function WhatAbout() {
  return (
    <>
      <div className="whataboutmain">
        <div className="flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px] mb-[40px]">
          <img src={iffcoimg} alt="iffcomg" className="w-[180px]" />
          <h3 className="h2">Indian Farmers Fertilizer Cooperative Limited</h3>
        </div>
        <div className="abmaincon">
          <p>
            IFFCO stands as the world's largest cooperative, built by farmers,
            for farmers. With decades of trust and excellence in agriculture
            solutions, IFFCO has emerged as a national leader in the fertilizer
            industry.
          </p>
          <p>
            With a vast network of 36,000 Primary Agricultural Credit Societies
            (PACs) and 50 million farmer members, IFFCO is at the forefront of
            sustainable farming and precision agriculture. Holding a 30-35%
            market share in bulk fertilizers, the cooperative is dedicated to
            empowering farmers through crop protection, organic farming, and
            high-yield crop solutions.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px] mb-[40px]">
          <img src={mclogo} alt="iffcomg" className="w-[180px]" />
          <h3 className="h2">Mitsubishi Corporation</h3>
        </div>
        <div className="abmaincon">
          <p>
            Mitsubishi Corporation is Japan’s largest trading company, renowned
            for its strong global presence and expertise across finance, energy,
            chemicals, and food industries. With a workforce of over 83,000
            professionals worldwide, Mitsubishi Corporation is a leader in smart
            farming solutions, AI in agriculture, and digital farming tools.
          </p>
          <p>
            Guided by a strong commitment to innovation and sustainability,
            Mitsubishi Corporation continues to forge strategic partnerships to
            revolutionize modern agricultural inputs and advance global food
            security.
          </p>
        </div>
        <img src={whatabimg} alt="about img" className="w-full mt-[60px]" />
      </div>
    </>
  );
}

export default WhatAbout;
