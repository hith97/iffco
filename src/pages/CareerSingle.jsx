import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import SingleCareerPage from "../sections/CareerSingle/SingleCareer";

function CareerSingle() {
    const [featuredImage, setFeaturedImage] = useState(null);
      
        useEffect(() => {
          fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/660?_embed")
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
      <HeroTitle title="Careers at IFFCO-MC" imageUrl={featuredImage}  />
      <Breadcrumb title="Career" />
      <SingleCareerPage />
    </>
  );
}

export default CareerSingle;
