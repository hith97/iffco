import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // 👈 Required for fade effect

import iffcoimg from "../../assets/ifc2.png";
import mclogo from "../../assets/mclogo.png";

function WhatAbout() {
  const [scrollImages, setScrollImages] = useState([]);

  useEffect(() => {
    fetch("https://iffcomc.in/Iffcomcbackend/wp-json/wp/v2/pages/415")
      .then((res) => res.json())
      .then((data) => {
        const acf = data.acf || {};
        const imageUrls = [
          acf.scroll_img_1,
          acf.scroll_img_2,
          acf.scroll_img_3,
          acf.scroll_img_4,
          acf.scroll_img_5,
        ].filter(Boolean); // remove null/undefined
        setScrollImages(imageUrls);
      })
      .catch((error) => {
        console.error("Failed to fetch ACF scroll images", error);
      });
  }, []);

  return (
    <>
      <div className="whataboutmain">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px] mb-[40px] max-w-[950px] mx-auto">
            <img src={iffcoimg} alt="iffcomg" className="w-auto sm:w-[280px]" />
            <p className="mb-0">
              Incorporated on August 28, 2015, IFFCO-MC Crop Science Pvt. Ltd.
              (IFFCO-MC) is a Joint Venture between Indian Farmers Fertilizer
              Cooperative Limited (IFFCO) and Mitsubishi Corporation, Japan with
              equity holding in the ratio of 51:49 respectively. The company
              envisages to enhance farmer income by providing good quality crop
              protection products at reasonable prices.
            </p>
          </div>
          <div className="abmaincon max-w-[950px] mx-auto">
            <p>
              The company operations have expanded to 18 states, covering major
              agro-climatic zones with more than 7500 channel partners and a
              comprehensive product basket of 85+ products. IFFCO-MC operates on
              a Single-Tier Distribution Model with no middle-tier involved,
              ensuring greater Transparency, Efficiency, and a Farmer-Friendly
              system offering products at Reasonable Price. The Company also
              provides free Accidental Insurance cover to farmers through the
              novel insurance scheme named "Kisan Suraksha Bima Yojana". Farmers
              purchasing products of a minimum of ₹150 and a maximum of ₹15000
              will be eligible under the insurance scheme and the sum insured
              will vary between a minimum of ₹1,000 and a maximum of ₹1,00,000
              depending upon the amount of agrochemical products purchased by
              the farmer.
            </p>
          </div>

          {/* ⬇️ Full-Width Swiper Slider for ACF Images */}
          {scrollImages.length > 0 && (
            <div className="w-full mt-[60px]">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
              >
                {scrollImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slider ${index + 1}`}
                      className="w-full h-auto object-cover aboutslider"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WhatAbout;
