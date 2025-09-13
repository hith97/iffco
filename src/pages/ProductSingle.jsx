import React, { useEffect, useState } from "react";
import HeroTitle from '../components/PageTitle/Hero'
import Breadcrumb from '../components/PageTitle/Breadcum'
import ProductSingleSection from '../sections/ProductSingle/ProductSingle'

function ProductSingle() {
  const [featuredImage, setFeaturedImage] = useState(null);
    
      useEffect(() => {
        fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/pages/639?_embed")
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
      <HeroTitle title="PRODUCTS" imageUrl={featuredImage} />
      <Breadcrumb title="PRODUCTS" />
      <ProductSingleSection />
    </>
  )
}

export default ProductSingle
