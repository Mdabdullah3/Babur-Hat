/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useEventStore from "../store/eventStore";
import ProductCardDesign from "./common/ProductCardDesign";
const BestDeal = () => {
  const { packageProducts, fetchPackageProducts } = useEventStore();
  useEffect(() => {
    fetchPackageProducts();
  }, [fetchPackageProducts]);
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8 w-11/12 mx-auto mb-10">
      {packageProducts?.filter((obj) => obj.product !== null)
        .map((product) => (
          <ProductCardDesign key={product?._id} product={product?.product} />
        ))}
    </section>
  );
};

export default BestDeal;
