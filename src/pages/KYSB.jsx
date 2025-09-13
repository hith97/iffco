"use client";

import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import ServicesIntro from "../sections/KYSB/ServicesIntro";
import InfoBox from "../sections/KYSB/InfoBox";
import Evidence from "../sections/KYSB/Evidence";
import HowtoClaim from "../sections/KYSB/HowtoClaim";

export default function KYSB() {
  const [acfData, setAcfData] = useState(null);

  useEffect(() => {
    fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/pages/265")
      .then((res) => res.json())
      .then((page) => {
        const acf = page.acf;

        setAcfData({
          intro: {
            html: page.content.rendered,
          },
          insured: {
            title: acf.what_we_insured_title,
            items: [
              {
                title: acf.insured_box_title_1,
                image: acf.insured_box_image_1,
              },
              {
                title: acf.insured_box_title_2,
                image: acf.insured_box_image_2,
              },
              {
                title: acf.insured_box_title_3,
                image: acf.insured_box_image_3,
              },
              {
                title: acf.insured_box_title_4,
                image: acf.insured_box_image_4,
              },
              {
                title: acf.insured_box_title_5,
                image: acf.insured_box_image_5,
              },
              {
                title: acf.insured_box_title_6,
                image: acf.insured_box_image_6,
              },
            ],
          },
          evidence: {
            core_objective_1: acf.core_objective_1,
            core_objective_2: acf.core_objective_2,
          },
          claim: {
            title: acf.document_titles,
            html: acf.document_required_texts,
          },
        });
      })
      .catch((err) => console.error("Failed to fetch service page:", err));
  }, []);

  if (!acfData) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      <HeroTitle title="KSBY" />
      <Breadcrumb title="KSBY" />
      <ServicesIntro data={acfData.intro} />
      <InfoBox data={acfData.insured} />
      <Evidence data={acfData.evidence} />
      <HowtoClaim data={acfData.claim} />
    </>
  );
}
