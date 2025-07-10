import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import NewsComponent from "../sections/News/NewsCon";

function News() {
  return (
    <>
      <HeroTitle title="NEWS" />
      <Breadcrumb title="News" />
      <NewsComponent />
    </>
  );
}

export default News;
