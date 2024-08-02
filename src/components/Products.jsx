import React, { useEffect } from "react";
import useProductStore from "../store/ProductStore";
import ProductCardDesign from "./common/ProductCardDesign";

const Products = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {products?.slice(0, 12).map((product) => (
        <>
          <ProductCardDesign product={product} key={product?._id} />
        </>
      ))}
    </div>
  );
};

export default Products;
