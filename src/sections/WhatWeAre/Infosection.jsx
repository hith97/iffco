import React, { useEffect, useState } from "react";

function WhatInfosection() {
  const [data, setData] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    // Fetch page content first
    fetch("http://localhost:8082/ifc/wp-json/wp/v2/pages/166?_embed")
      .then((res) => res.json())
      .then((page) => {
        setData(page);
        const image =
          page._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
        setFeaturedImage(image);
      })
      .catch((err) => {
        console.error("Failed to fetch page 166:", err);
      });
  }, []);

  if (!data) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <>
      <div className="container py-[60px]">
        <h2 className="mb-[0px]">Overview</h2>
      </div>
      <div className="infomain bg-[#F5F6E8] flex flex-col lg:flex-row justify-between w-full overflow-hidden gap-[10px] sm:gap-[80px] px-6 lg:px-0">
        <div
          className="leftmaincon py-[50px] max-w-[650px] ml-auto mr w-full lg:w-1/2"
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        ></div>

        <div className="overflow-hidden whattimg rightimg w-full lg:w-1/2">
          {featuredImage && (
            <img
              src={featuredImage}
              alt="Overview"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default WhatInfosection;
