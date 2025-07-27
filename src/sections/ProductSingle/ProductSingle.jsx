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
          `http://localhost:8082/ifc/wp-json/wp/v2/product?slug=${productSlug}&_embed`
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={featuredImage}
                alt={product.title.rendered}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-green-600 mb-4">
                {product.title.rendered}
              </h1>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-red-500 text-lg font-medium">
                  Pack Size Available | {product.acf.pack_size}
                </p>
              </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-100">
                <span className="font-semibold text-gray-700">
                  Technical Name:
                </span>
                <span className="md:col-span-2 text-gray-600">
                  {product.acf.technical_name}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-100">
                <span className="font-semibold text-gray-700">Category:</span>
                <span className="md:col-span-2 text-gray-600">
                  {product.acf.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 text-lg">
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
