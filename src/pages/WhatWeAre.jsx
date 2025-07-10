import React from "react";
import { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import VisionMision from "../sections/AboutUs/VisionMision";
import WhatInfosection from "../sections/WhatWeAre/Infosection";

function WhatWeAre() {
  const [acfData, setAcfData] = useState(null);

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/131")
      .then((res) => res.json())
      .then((data) => {
        const acf = data.acf;

        const resolved = {
          visionMission: {
            visionText: acf.vision_text,
            visionImage: acf.vision_image,
            missionTitle: acf.mission_title,
            missionIcon1: acf.mission_icon_1,
            missionText1: acf.mission_text_1,
            missionIcon2: acf.mission_icon_2,
            missionText2: acf.mission_text_2,
            missionIcon3: acf.mission_icon_3,
            missionText3: acf.mission_text_3,
          },

          // You can add more sections like boardOfDirectors, infrastructure, etc.
        };

        setAcfData(resolved);
      })
      .catch((err) => console.error("About page fetch failed:", err));
  }, []);

  if (!acfData) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      <HeroTitle title="WHAT WE ARE" />
      <Breadcrumb title="What We Are" />
      <WhatInfosection />
      <div className="container py-[80px]">
            <VisionMision data={acfData.visionMission} />
      </div>
      
    </>
  );
}

export default WhatWeAre;
