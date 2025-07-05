import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import PresenseCon from "../sections/Presence/PresenseCon";

function Presence() {
  return (
    <>
      <HeroTitle title="PRESENCE" />
      <Breadcrumb title="PRESENCE" />
      <PresenseCon />
    </>
  );
}

export default Presence;
