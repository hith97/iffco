import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import PresenseCon from "../sections/Presence/PresenseCon";

function WhereWeAre() {
  return (
    <>
      <HeroTitle title="Where We Are" />
      <Breadcrumb title="Where We Are" />
      <PresenseCon />
    </>
  );
}

export default WhereWeAre;
