"use client";
import React, { useEffect } from "react";
import useRecentlyViewedStore from "../../store/RecentViewProduct";
import ProductCardDesign from "../common/ProductCardDesign";

const RecentProducts = () => {
  const { recentlyViewed, initializeRecentlyViewed } = useRecentlyViewedStore();

  useEffect(() => {
    initializeRecentlyViewed();
  }, [initializeRecentlyViewed]);

  if (!recentlyViewed.length) {
    return <p>No recently viewed products yet.</p>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recentlyViewed.map((product) => (
          <ProductCardDesign key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecentProducts;
