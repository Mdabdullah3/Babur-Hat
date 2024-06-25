import React from "react";
import { useRecentlyViewedStore } from "../../store/RecentViewProduct";
import ProductCard from "../common/ProductCard";
const RecentProducts = () => {
  const { recentlyViewed } = useRecentlyViewedStore();
  return (
    <section>
      <div className="w-11/12 mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Recently Viewed Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentlyViewed?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProducts;
