// src/api/api.js
import axiosClient from "./axiosClient";

const api = {
  getCategories: () => axiosClient.get("/product_category"),
  getProducts: (categorySlug = "all") =>
    categorySlug === "all"
      ? axiosClient.get("/product", {
          params: { per_page: 100, _embed: true },
        })
      : axiosClient.get("/product", {
          params: {
            product_category_slug: categorySlug,
            per_page: 100,
            _embed: true,
          },
        }),
};

export default api;
