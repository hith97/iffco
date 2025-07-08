import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import ServicesIntro from "../sections/Services/ServicesIntro";
import InfoBox from "../sections/Services/InfoBox";
import CompasitionTable from "../sections/Services/CompasitionTable";
import Evidence from "../sections/Services/Evidence";
import HowtoClaim from "../sections/Services/HowtoClaim";

function Services() {
  return (
    <>
      <HeroTitle title="SERVICES" />
      <Breadcrumb title="Services" />
      <ServicesIntro />
      <InfoBox />
      <CompasitionTable />
      <Evidence />
      <HowtoClaim />
    </>
  );
}

export default Services;
