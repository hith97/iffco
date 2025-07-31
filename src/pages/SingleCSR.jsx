import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import SingleCSRPage from "../sections/SingleCSR/SingleCSRPage";

function SingleCSR() {
  return (
    <>
      <HeroTitle title="CSR" />
      <Breadcrumb title="CSR" />
      <SingleCSRPage />
    </>
  );
}

export default SingleCSR;
