import React from "react";
import { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import WhatTabs from "../sections/WhatWeAre/WhatTabs";

function WhatWeAre() {
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/415?_embed")
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
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
      <HeroTitle title="WHAT" imageUrl={featuredImage} />
      <Breadcrumb title="What" />
      <WhatTabs />
    </>
  );
}

export default WhatWeAre;
