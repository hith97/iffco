import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import SingleBlogPage from "../sections/SingleBlog/SingleBlogPage";

function SingleBlog() {
  
  const [pageData, setPageData] = useState({
      featuredImage: null,
      content: "",
      title: "",
    });
  
    useEffect(() => {
      fetch("https://iffcomc.in/Iffcomcbackend/wp-json/wp/v2/pages/677?_embed")
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
      <HeroTitle title="BLOGS" imageUrl={pageData.featuredImage}/>
      <Breadcrumb title="Blogs" />
      <SingleBlogPage />
    </>
  );
}

export default SingleBlog;
