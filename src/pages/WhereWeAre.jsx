import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import WhereTabs from "../sections/WherePage/WhereTab";

function WhereWeAre() {
  return (
    <>
      <HeroTitle title="Where We Are" />
      <Breadcrumb title="Where We Are" />
      <WhereTabs />
    </>
  );
}

export default WhereWeAre;
