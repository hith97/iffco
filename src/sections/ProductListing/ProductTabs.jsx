"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductTabs() {
  const [categories, setCategories] = useState([
    { id: "all", name: "Show All", slug: "all" },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState([]);

  // Handle initial hash-based tab activation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    }
  }, []);

  // Fetch categories on mount
  useEffect(() => {
    fetch(`https://covana.in/iffcobackend/wp-json/wp/v2/product_category`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((cat) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
        }));

        // Define desired order
        const desiredOrder = [
          "Herbicide",
          "Insecticide",
          "Fungicide",
          "PGR",
          "Biological",
        ];

        // Reorder categories according to desiredOrder
        const ordered = desiredOrder
          .map((name) => formatted.find((cat) => cat.name === name))
          .filter(Boolean);

        // Add "Show All" at the start
        setCategories([
          { id: "all", name: "Show All", slug: "all" },
          ...ordered,
        ]);
      });
  }, []);

  // Fetch products based on active tab
  useEffect(() => {
    const url =
      activeTab === "all"
        ? `https://covana.in/iffcobackend/wp-json/wp/v2/product?per_page=100&_embed`
        : `https://covana.in/iffcobackend/wp-json/wp/v2/product?product_category_slug=${activeTab}&per_page=100&_embed`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [activeTab]);

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center">
          Our wide portfolio of insecticides, fungicides, herbicides, plant
          growth promoters and biologicals are developed through rigorous
          research and produced in modern manufacturing facilities that follow
          the highest quality standards. Every product is priced transparently
          and sold strictly at the printed Maximum Retail Price (MRP), ensuring
          fair value and eliminating middle-layer inflation.
        </p>
        {/* Tabs */}
        <div className="flex flex-wrap mb-8 justify-center">
          <div className="tabmain">
            {categories.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => {
                  setActiveTab(tab.slug);
                  window.location.hash = tab.slug;
                }}
                className={`capitalize px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.slug
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[40px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                slug: product.slug,
                class_list: product.class_list,
                name: product.title.rendered,
                categoryLabel:
                  product._embedded?.["wp:term"]?.[0]?.[0]?.name || "Product",
                categorySlug:
                  product._embedded?.["wp:term"]?.[0]?.[0]?.slug ||
                  "uncategorized",
                categoryColor: getCategoryColor(
                  product._embedded?.["wp:term"]?.[0]?.[0]?.name || ""
                ),
                image:
                  product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/placeholder.png",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional utility to determine category badge color
function getCategoryColor(category) {
  const colorMap = {
    Herbicide: "bg-green-600",
    Insecticide: "bg-orange-500",
    Fungicide: "bg-blue-600",
    PGR: "bg-pink-600",
    Biological: "bg-purple-600",
  };
  return colorMap[category] || "bg-gray-400";
}
