import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import NewsBlog from "../sections/SingleNews/NewsBlog";

function SingleNews() {
  const [featuredImage, setFeaturedImage] = useState(null);
    
      useEffect(() => {
        fetch("https://iffcomc.in/Iffcomcbackend/wp-json/wp/v2/pages/412?_embed")
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
      <HeroTitle title="NEWS & MEDIA" imageUrl={featuredImage}/>
      <Breadcrumb title="News & Media" />
      <NewsBlog />
    </>
  );
}

export default SingleNews;
