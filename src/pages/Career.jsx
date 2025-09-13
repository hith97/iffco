import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import CareerIntro from "../sections/Careers/CareerIntro";
import WhyJoinIFFCO from "../sections/Careers/CareerWhy";
import CareersTestimonials from "../sections/Careers/Careerstesti";
import Lifeat from "../sections/Careers/Lifeat";
import CareersOpportunity from "../sections/Careers/CareersOpportunity";
import CareerContact from "../sections/Careers/CareerContact";

function Career() {
    const [featuredImage, setFeaturedImage] = useState(null);
      
        useEffect(() => {
          fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/pages/660?_embed")
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
      <CareerIntro />
      <WhyJoinIFFCO />
      <CareersTestimonials />
      <Lifeat />
      <CareersOpportunity />
      <CareerContact />
    </>
  );
}

export default Career;
