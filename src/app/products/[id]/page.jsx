"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "../../../components/ProductDetails/ProductImages";
import ProductInfo from "../../../components/ProductDetails/ProductInfo";
import ProductShipInfo from "../../../components/ProductDetails/ProductShipInfo";
import ProductInfoTab from "../../../components/ProductDetails/ProductInfoTab";
import { productInformation } from "../../../utils/constants";
import Navbar from "../../../components/layout/Navbar";
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
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
    <section className="">
      <Navbar />
      <div className="">
        <div className="">
          <div className="w-11/12 mt-20 mx-auto">
            <div className="lg:grid grid-cols-8 gap-6 ">
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
      </div>
      <div className="flex border-t border-gray-200 p-4 bg-white sticky bottom-0 w-full justify-between self-center mt-5 ">
        <button className="w-full my-2 py-3 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 text-sm font-bold">
          Add To Cart
        </button>
        <button className="w-full py-3 rounded-full my-2 border-[1px] hover:border-primary border-black text-black tracking-wider  hover:bg-primary hover:text-white transition duration-500 font-bold">
          Buy Now
        </button>
        <button className="w-full py-3 border border-black rounded-full flex font-bold text-lg justify-center">
          <GoHeart />
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
