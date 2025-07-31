import React from "react";

import iffcoimg from "../../assets/ifcohin.png";
import mclogo from "../../assets/mclogo.png";
import whatabimg from "../../assets/whatabimg.jpg";

function WhoOverview() {
  return (
    <>
      <div className="container">
        <div className="whataboutmain">
          <div className="flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px] mb-[40px]">
            <img src={iffcoimg} alt="iffcomg" className="w-[180px]" />
            <h3 className="text-[30px] sm:text-[40px] text-[#008C44] font-bold">
              Indian Farmers Fertilizer <br />
              Cooperative Limited
            </h3>
          </div>
          <div className="abmaincon mb-[60px]">
            <p>
              IFFCO, world’s biggest processed Fertiliser Cooperative which was
              started in the year 1967 by only 57 Indian Cooperatives with an
              aim for the betterment of farmers and ensuring food security for
              the country. Over the past 53 years, IFFCO has remained committed
              to this cause by providing world-class Soil Nutrients and
              Agri-Services to the Indian farmers thus, play an important role
              in empowering them.
            </p>
            <p>
              IFFCO provides its services to more than 5 crore farmers with more
              than 35,000 Cooperative Societies across the country.
            </p>
            <p>
              An organization with local and global reach, IFFCO has been
              constantly contributing to increase in the Food Productivity
              through its diversified range of Nitrogenous, Phosphatic, Bio
              Fertilisers along with other speciality Fertilisers. With joint
              ventures in Senegal, Oman, Dubai and Jordan, IFFCO has made its
              presence global. Besides Fertilisers, IFFCO has diversified into
              sectors like General Insurance, Rural Mobile telephony, rural
              ecommerce, SEZ, Oil and Gas and international trading, food
              processing, urban gardening, Organics and IFFCO Bazar in Rural
              retailing amongst others. IFFCO over the years has demonstrated
              its commitment towards socially responsible practices through its
              initiatives like CORDET and IFFDC that aim at empowering the
              entire farmer community. As a leader in the Fertiliser industry
              IFFCO understands its heightened responsibility, therefore,
              believes in finding the best solutions through interaction and
              collaboration with research institutes.
            </p>
            <p>
              <a
                href="https://www.iffco.in/en/corporate"
                className="text-[#ED1C24] font-bold underline"
              >
                https://www.iffco.in/en/corporate
              </a>
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px] mb-[40px]">
            <img
              src={mclogo}
              alt="iffcomg"
              className="w-[180px] object-contain"
            />
            <h3 className="text-[30px] sm:text-[40px] text-[#008C44] font-bold">
              Mitsubishi Corporation
            </h3>
          </div>
          <div className="abmaincon">
            <p>
              Mitsubishi Corporation (MC) established in 1954 (Registered,1950),
              is a globally integrated Trading and Investment company that
              develops and operates diverse businesses through its expansive
              International Network. The company’s operations are organized into
              eight Industry Specific Business Groups: Environmental Energy,
              Materials Solution, Mineral Resources, Urban Development &
              Infrastructure, Mobility, Food Industry, Smart‑Life Creation, and
              Power Solution. Mitsubishi Corporation is guided by its enduring
              “Three Corporate Principles”, Shoki Hoko (Corporate Responsibility
              to Society), Shoji Komei (Integrity & Fairness), and Ritsugyo
              Boeki (Global Understanding through Business). Mitsubishi
              Corporation is steadfast in conducting its Global Business with
              Integrity, Fairness, and a Commitment to Enriching both Society
              and the Environment.
            </p>
            <p>
              <a
                href="https://www.mitsubishicorp.com"
                className="text-[#ED1C24] font-bold underline"
              >
                https://www.mitsubishicorp.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoOverview;
