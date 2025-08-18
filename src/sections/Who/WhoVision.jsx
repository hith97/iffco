import React from "react";
import missionicon from "../../assets/mission.png";
import micon1 from "../../assets/micon1.png";
import micon2 from "../../assets/micon2.png";
import micon3 from "../../assets/micon3.png";
import visicon from "../../assets/visionicon.png";
import bgvso from "../../assets/bgvso.png";

function WhoVision() {
  return (
    <>
      <div className="container">
        <div
          className="msmain relative"
          style={{ "--after-bg": `url(${bgvso})` }}
        >
          <div className="visioncon">
            <div className="max-w-lg">
              <div className="misionttl flex gap-8 items-start mt-[50px] flex-wrap md:flex-nowrap">
                <img src={visicon} alt="misionicon" className="w-[70px]" />
                <div className="w-[100%] md:w-[80%]">
                  <h3 className="text-[#008C44] text-4xl font-bold mb-5">
                    Vision
                  </h3>
                  <p>
                    To enhance farmer income by providing good quality crop
                    protection products at reasonable prices
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mission md:mt-[40px] sm:mb-[80px]">
            <div className="missionin max-w-lg">
              <div className="misionttl flex gap-8 items-center mb-[50px] flex-wrap md:flex-nowrap">
                <img src={missionicon} alt="misionicon" className="w-[70px]" />
                <h3 className="text-[#008C44] text-4xl font-bold">Mission</h3>
              </div>
              <div className="misioncon flex gap-8 items-center mb-8 flex-wrap md:flex-nowrap">
                <img src={micon1} alt="misionicon" className="w-[70px]" />
                <p className="w-[100%] md:w-[80%]">
                  To develop a channel for farmers to access genuine products
                  and knowledge with focus on safety, health and environment.
                </p>
              </div>
              <div className="misioncon flex gap-8 items-center mb-8 flex-wrap md:flex-nowrap">
                <img src={micon2} alt="misionicon" className="w-[70px]" />
                <p className="w-[100%] md:w-[80%]">
                  To enrich knowledge base of employees and provide open and
                  congenial work environment for their development
                </p>
              </div>
              <div className="misioncon flex gap-8 items-center mb-8 flex-wrap md:flex-nowrap">
                <img src={micon3} alt="misionicon" className="w-[70px]" />
                <p className="w-[100%] md:w-[80%]">
                  To identify and provide new generation crop protection
                  products for farmers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoVision;
