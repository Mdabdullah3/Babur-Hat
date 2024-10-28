/* eslint-disable @next/next/no-img-element */
"use client";
import { FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const ProductInfo = ({ product, setSelectedVariant, selectedVariant }) => {
  const [selectedSize, setSelectedSize] = useState("");

  // Set the default size and variant when product data is loaded
  useEffect(() => {
    if (product?.productVariants?.length > 0) {
      const defaultSize = product?.productVariants[0]?.size;
      setSelectedSize(defaultSize);
      setSelectedVariant(
        product?.productVariants?.find((v) => v?.size === defaultSize)
      );
    }
  }, [product, setSelectedVariant]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    const variant = product?.productVariants?.find((v) => v?.size === size);
    setSelectedVariant(variant);
  };

  return (
    <div className="col-span-3 lg:mt-0 mt-4">
      {selectedVariant?.quantity > 0 ? (
        <h2 className="bg-primary px-3 font-bold text-white tracking-wider w-12 py-1 rounded-sm">
          Sell
        </h2>
      ) : (
        <h2 className="bg-primary px-3 font-bold text-white tracking-wider w-28 py-2 rounded-sm">
          Stock Out
        </h2>
      )}
      <div className="flex items-center justify-between w-full mt-2 lg:mt-5">
        <h1 className="lg:text-2xl text-lg font-bold capitalize tracking-wider">
          {product?.name}
        </h1>
      </div>
      <h2 className="text-md text-orange-500 flex items-center mt-2">
        <span className="text-black tracking-wider ml-2">
          ({product?.reviews?.length || 0} reviews)
        </span>
      </h2>
      <div className="flex items-center justify-between ">
        <p className="leading-6 lg:mt-4 mt-2 text-lg font-[600] tracking-wider text-primary">
          BDT{" "}
          <span className="lg:text-2xl text-xl">
            {product?.productVariants?.[0]?.discount > 0
              ? product?.productVariants?.[0]?.discount
              : product?.productVariants?.[0]?.price}
            .00
          </span>
          {product?.productVariants?.[0]?.discount > 0 && (
            <del className="font-normal ml-2 lg:text-sm text-gray-400 text-[14px]">
              {product?.productVariants?.[0]?.price}
            </del>
          )}
        </p>
      </div>
      <h2 className="flex items-center gap-3 tracking-wider lg:mt-3">
        <FaEye size={18} /> <span className="font-bold">21</span> people are
        viewing this right now
      </h2>
      <h1 className="mt-2 font-bold tracking-wider w-12">
        Size: <span className="font-normal capitalize">{selectedSize}</span>
      </h1>

      <div className="flex flex-wrap gap-2 mt-4">
        {product?.productVariants?.map((variant) => (
          <button
            key={variant?.size}
            className={`px-4 py-2 border uppercase rounded-md ${
              selectedSize === variant?.size
                ? "bg-primary text-white"
                : "bg-white text-primary border-primary"
            } hover:bg-primary hover:text-white`}
            onClick={() => handleSizeClick(variant?.size)}
          >
            {variant?.size}
          </button>
        ))}
      </div>

      <div>
        <h1 className="flex items-center lg:text-md text-[13px] font-[500] mt-5 tracking-wider mb-4">
          {/* <span className="mr-4">
            <LiaShippingFastSolid size={20} />
          </span> */}
          {/* <span>
            Free Shipping & Returns:
            <span className="text-gray-500 lg:ml-3 ml-1 font-normal">
              On all orders over <span className="text-black">$200.00</span>
            </span>
          </span> */}
        </h1>
        <div className="bg-gray-200 mt-4 px-5 py-3 flex flex-col items-center justify-center rounded-md">
          <img
            src="https://minimog-4437.kxcdn.com/robust/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png"
            alt="Trust Badge"
          />
          <h1 className="mt-1 tracking-wider">
            Guaranteed safe & secure checkout
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
