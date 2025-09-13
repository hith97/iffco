import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import SingleCareerPage from "../sections/CareerSingle/SingleCareer";
import BlogGrid from "../sections/Blog/BlogListing";

function Blogs() {
    const [featuredImage, setFeaturedImage] = useState(null);
      
        useEffect(() => {
          fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/pages/677?_embed")
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
      <HeroTitle title="BLOGS" imageUrl={featuredImage}  />
      <Breadcrumb title="Blogs" />
      <BlogGrid />
    </>
  );
}

export default Blogs;
