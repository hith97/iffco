import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import LatestFromTabs from "../sections/LatestFromIffcoMC/LatestFromTabs";

function LatestFromIffcoMCPage() {
  return (
    <>
      <HeroTitle title="LATEST FROM IFFCO-MC" />
      <Breadcrumb title="Latest From IFFCO-MC" />
      <LatestFromTabs />
    </>
  );
}

export default LatestFromIffcoMCPage;
