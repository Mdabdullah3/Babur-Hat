"use client";
import React, { useEffect } from "react";
import Navbar from "../../../components/layout/Navbar";
import useProductStore from "../../../store/ProductStore";

const SingleVendorShop = () => {
  const { products, fetchProducts } = useProductStore();
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default SingleVendorShop;
