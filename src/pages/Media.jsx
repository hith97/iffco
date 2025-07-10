import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import MediaComponent from "../sections/MediaRelease/Media";

function Media() {
  return (
    <>
      <HeroTitle title="MEDIA RELEASE" />
      <Breadcrumb title="Media Release" />
      <MediaComponent />
    </>
  );
}

export default Media;
