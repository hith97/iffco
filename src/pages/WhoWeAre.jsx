import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import WhoTabs from "../sections/Who/WhoTab";

function WhoWeAre() {
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8082/ifc/wp-json/wp/v2/pages/299?_embed")
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
      <HeroTitle title="Who" imageUrl={featuredImage} />
      <Breadcrumb title="Who" />
      <WhoTabs />
    </>
  );
}

export default WhoWeAre;
