import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import VideoComponent from "../sections/Videos/VideosMain";

function Video() {
  return (
    <>
      <HeroTitle title="VIDEOS" />
      <Breadcrumb title="Videos" />
      <VideoComponent />
    </>
  );
}

export default Video;
