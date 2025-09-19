import productimg from "../../assets/product.png";
import { useNavigate, Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
  // Extract category slug from product.class_list
  const categoryClass = product.class_list?.find(cls =>
    cls.startsWith("product_category-")
  );
  const categorySlug = categoryClass?.replace("product_category-", "") || "uncategorized";
  const productSlug = product.slug;

  navigate(`/${categorySlug}/${productSlug}`);
};


  return (
    <div
      onClick={handleClick}
      className="bg-white procard hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
    >
      <div className="relative">
        <div
          className={`proband absolute top-0 left-0 text-white px-3 py-1 text-sm font-semibold z-10`}
           style={{ "--category-color": product.categoryColor }}
        >
          {product.categoryLabel}
        </div>
        <div className="p-6 pt-12">
          <div className="flex justify-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-[220px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-center font-bold text-green-600 text-lg">
            {product.name}
          </h3>
        </div>
      </div>
    </div>
  );
}
