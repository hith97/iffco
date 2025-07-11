import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import VideoComponent from "../sections/Events/VideosMain";

function Events() {
  return (
    <>
      <HeroTitle title="Events" />
      <Breadcrumb title="Events" />
      <VideoComponent />
    </>
  );
}

export default Events;
