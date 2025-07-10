import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";

function Privacy() {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/220")
      .then((res) => res.json())
      .then((data) => {
        setPageContent(data.content?.rendered || "");
      })
      .catch((err) => console.error("Failed to fetch Privacy Policy:", err));
  }, []);

  return (
    <>
      <HeroTitle title="PRIVACY POLICY" />
      <Breadcrumb title="Privacy Policy" />
      <div className="container py-[80px]">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: pageContent }}
        />
      </div>
    </>
  );
}

export default Privacy;
