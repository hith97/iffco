import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import SingleCSRPage from "../sections/SingleCSR/SingleCSRPage";

function SingleCSR() {
  const [pageData, setPageData] = useState({
      featuredImage: null,
      content: "",
      title: "",
    });
  
    useEffect(() => {
      fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/227?_embed")
        .then((res) => res.json())
        .then((data) => {
          setPageData({
            featuredImage:
              data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            content: data?.content?.rendered || "",
            title: data?.title?.rendered || "CSR",
          });
        })
        .catch((error) => {
          console.error("Failed to fetch page data", error);
        });
    }, []);
  return (
    <>
      <HeroTitle title="CSR" imageUrl={pageData.featuredImage}/>
      <Breadcrumb title="CSR" />
      <SingleCSRPage />
    </>
  );
}

export default SingleCSR;
