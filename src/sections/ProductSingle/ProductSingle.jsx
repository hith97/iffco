"use client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";

export default function ProductSingleSection() {
    const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    const fetchProductBySlug = async () => {
      try {
        const res = await fetch(
          `https://covana.in/iffcobackend/wp-json/wp/v2/product?slug=${productSlug}&_embed`
        );
        const data = await res.json();

        if (data.length > 0) {
          const productData = data[0];
          setProduct(productData);
          const image =
            productData._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
            "/placeholder.svg";
          setFeaturedImage(image);
        } else {
          console.warn("No product found for slug:", productSlug);
        }
      } catch (error) {
        console.error("Error fetching product by slug:", error);
      }
    };

    fetchProductBySlug();
  }, [productSlug]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const accordionItems = [
    { title: "Crop Targets", content: product.acf.crop_targets },
    { title: "Dose/Acre", content: product.acf.doseacre },
    { title: "Mode Of Action", content: product.acf.mode_of_action },
    { title: "Application", content: product.acf.application },
    { title: "Composition", content: product.acf.composition },
    { title: "Benefits", content: product.acf.benefits },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <div className="flex justify-center lg:w-1/3">
            <div className="w-full h-auto">
              <img
                src={featuredImage}
                alt={product.title.rendered}
                className="w-full"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-2/3 space-y-6">
            <div>
              <h1 className="text-[30px] md:text-[55px] font-bold text-[#008C44] mb-4">
                {product.title.rendered}
              </h1>
              <div className="border-y border-[#535353] py-4">
                <p className="text-[#008C44] text-[18px] md:text-[25px] font-bold mb-0  ">
                  Pack Size Available <span className="text-[#ED1C24] "> | </span> {product.acf.pack_size}
                </p>
              </div>
            </div>

            {/* Technical Details */}
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-[#000000]">
                <span className="font-bold text-[#000000] text-[16px] md:text-[20px]">
                  Technical Name:
                </span>
                <span className="md:col-span-2 text-[#000000] text-[17px]">
                  {product.acf.technical_name}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-[#000000]">
                <span className="font-bold text-[#000000] text-[16px] md:text-[20px]">Category:</span>
                <span className="md:col-span-2 text-[#000000] text-[17px]">
                  {product.acf.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="">
              <h3 className="font-bold text-[#000000] text-[16px] md:text-[20px] mb-2">
                Description:
              </h3>
              <div
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.content.rendered }}
              />
            </div>

            {/* Accordion Section */}
            <div className="">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
