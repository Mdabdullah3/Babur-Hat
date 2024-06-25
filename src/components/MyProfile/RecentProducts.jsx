"use client";
import React, { useEffect } from "react";
import useRecentlyViewedStore from "../../store/RecentViewProduct";
import ProductCard from "../common/ProductCard";
const RecentProducts = () => {
  const { recentlyViewed, initializeRecentlyViewed } = useRecentlyViewedStore();

  useEffect(() => {
    initializeRecentlyViewed();
  }, [initializeRecentlyViewed]);
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recentlyViewed?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProducts;
