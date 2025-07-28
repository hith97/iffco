import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import WhoTabs from "../sections/Who/WhoTab";

function WhoWeAre() {
  return (
    <>
      <HeroTitle title="Who" />
      <Breadcrumb title="Who" />
      <WhoTabs />
    </>
  );
}

export default WhoWeAre;
