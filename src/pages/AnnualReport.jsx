import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import AnnualReportCon from "../sections/AnnualReports/AnnualReportCon";

function AnnualReport() {
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    fetch("https://iffcomc.in/Iffcomcbackend/wp-json/wp/v2/pages/223?_embed")
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
      <HeroTitle title="ANNUAL REPORT" imageUrl={featuredImage} />
      <Breadcrumb title="Annual Report" />
      <AnnualReportCon />
    </>
  );
}

export default AnnualReport;
