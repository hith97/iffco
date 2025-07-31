import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import WhereTabs from "../sections/WherePage/WhereTab";

function WhereWeAre() {
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/302?_embed")
      .then((res) => res.json())
      .then((data) => {
        const imageUrl =
          data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        if (imageUrl) {
          setFeaturedImage(imageUrl);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch featured image", error);
      });
  }, []);

  return (
    <>
      <HeroTitle title="Where" imageUrl={featuredImage} />
      <Breadcrumb title="Where" />
      <WhereTabs />
    </>
  );
}

export default WhereWeAre;
