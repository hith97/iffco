import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import NewsBlog from "../sections/SingleNews/NewsBlog";

function SingleNews() {
  return (
    <>
      <HeroTitle title="NEWS" />
      <Breadcrumb title="News" />
      <NewsBlog />
    </>
  );
}

export default SingleNews;
