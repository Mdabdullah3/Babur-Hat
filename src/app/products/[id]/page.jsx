"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "../../../components/ProductDetails/ProductImages";
import ProductInfo from "../../../components/ProductDetails/ProductInfo";
import ProductShipInfo from "../../../components/ProductDetails/ProductShipInfo";
const ProductDetails = ({ params }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    const url = `https://api.rebzigo.com/products/${params?.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [params.id]);
  return (
    <div>
      <div className="w-11/12 mt-20 mx-auto">
        <div className="grid grid-cols-8 gap-6">
          <ProductImages
            images={singleProduct.img}
            topImage={singleProduct.topimg}
          />
          <ProductInfo product={singleProduct} />
          <ProductShipInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
