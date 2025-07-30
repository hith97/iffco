import { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import InfoTabs from "../sections/AboutUs/AboutTab";

function Aboutus() {
  const [acfData, setAcfData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8082/ifc/wp-json/wp/v2/pages/131")
      .then((res) => res.json())
      .then((data) => {
        const acf = data.acf;

        const resolved = {
          about: data.content.rendered, // main About content
          coreObjectives: {
            title: acf.core_objective_title,
            text: acf.objective_text,
            image: acf.objective_image,
            blocks: [
              acf.objective_block_1,
              acf.objective_block_2,
              acf.objective_block_3,
              acf.objective_block_4,
            ],
          },
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
      <HeroTitle title="ABOUT US" />
      <Breadcrumb title="ABOUT US" />
      <InfoTabs acfData={acfData} />
    </>
  );
}

export default Aboutus;
