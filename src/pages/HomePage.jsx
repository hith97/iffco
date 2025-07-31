import { useEffect, useState } from "react";
import Banner from "../sections/HomePage/Banner";
import AboutSection from "../sections/HomePage/AboutSection";
import ProductsSection from "../sections/HomePage/ProductHome";
import TestimonialSection from "../sections/HomePage/Testimonials";
import NewsSection from "../sections/HomePage/News";
import StatsCounter from "../sections/HomePage/Counter";
import LatestFromIffco from "../sections/HomePage/latestFromIffco";

function HomePage() {
  const [acfData, setAcfData] = useState(null);

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/37")
      .then((res) => res.json())
      .then((data) => {
        const acf = data.acf;

        const resolved = {
          banner: {
            who: {
              title: acf.who_title,
              image: acf.who_image, // ✅ using URL directly
              link: acf.who_link,
            },
            what: {
              title: acf.what_title,
              image: acf.what_image,
              link: acf.what_link,
            },
            where: {
              title: acf.where_title,
              image: acf.where_image,
              link: acf.where_link,
            },
          },
          about: {
            title: acf.about_title,
            short: acf.about_brief,
            long: acf.about_brief_main,
            image: acf.about_image,
          },
          products: {
            title: acf.products_title,
            subtitle: acf.products_subtitle,
            categories: [
              {
                title: acf.product_cat_title_1,
                image: acf.product_cat_image_1,
                link: acf.product_cat_link_1,
              },
              {
                title: acf.product_cat_title_2,
                image: acf.product_cat_image_2,
                link: acf.product_cat_link_2,
              },
              {
                title: acf.product_cat_title_3,
                image: acf.product_cat_image_3,
                link: acf.product_cat_link_3,
              },
              {
                title: acf.product_cat_title_4,
                image: acf.product_cat_image_4,
                link: acf.product_cat_link_4,
              },
              {
                title: acf.product_cat_title_5,
                image: acf.product_cat_image_5,
                link: acf.product_cat_link_5,
              },
            ],
          },

          testimonials: {
            title: acf.testimonial_title,
            subtitle: acf.testimonial_subtitle,
          },
          news: {
            title: "Latest From IFFCO-MC", // static or from ACF
            subtitle: "What's happening across India", // static or from ACF
            
            items: [
              {
                id: 1,
                category: "News",
                title: acf.highlight_news_brief,
                image: acf.news_image,
                link: acf.news_link,
              },
              {
                id: 2,
                category: "Media Release",
                title: acf.media_brief,
                image: acf.media_image,
                link: acf.media_link,
              },
              {
                id: 3,
                category: "Videos",
                title: acf.videos_brief,
                image: acf.video_image,
                link: acf.videos_link,
              },
            ],
          },
        };

        setAcfData(resolved);
      })
      .catch((err) => console.error("Home page fetch failed:", err));
  }, []);

  if (!acfData) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      <Banner data={acfData.banner} />
      <AboutSection data={acfData.about} />
      <StatsCounter />
      <ProductsSection data={acfData.products} />
      <TestimonialSection data={acfData.testimonials} />
      <LatestFromIffco data={acfData.news} />      
    </>
  );
}

export default HomePage;
