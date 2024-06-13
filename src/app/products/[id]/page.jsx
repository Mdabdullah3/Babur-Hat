"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "../../../components/ProductDetails/ProductImages";
import ProductInfo from "../../../components/ProductDetails/ProductInfo";
import ProductShipInfo from "../../../components/ProductDetails/ProductShipInfo";
import ProductInfoTab from "../../../components/ProductDetails/ProductInfoTab";
import { productInformation } from "../../../utils/constants";
import Navbar from "../../../components/layout/Navbar";
const ProductDetails = ({ params }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [openDetails, setOpenDetails] = useState(
    productInformation[0]?.Description
  );

  const handleDetailClick = (details) => {
    setOpenDetails(details);
  };

  useEffect(() => {
    const url = `https://api.rebzigo.com/products/${params?.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [params.id]);

  return (
    <section>
      <Navbar />
      <div className="">
        <div className="w-11/12 mt-20 mx-auto">
          <div className="grid grid-cols-8 gap-6 ">
            <ProductImages
              images={singleProduct.img}
              topImage={singleProduct.topimg}
            />
            <ProductInfo product={singleProduct} />
            <ProductShipInfo product={singleProduct} />
          </div>
          <hr className="mt-4" />
          <h1 className="text-2xl font-bold mt-10">Related Products</h1>
        </div>
      </div>
      <div>
        <ProductInfoTab
          Details={productInformation}
          openDetails={openDetails}
          handleDetailClick={handleDetailClick}
        />
      </div>
    </section>
  );
};

export default ProductDetails;
