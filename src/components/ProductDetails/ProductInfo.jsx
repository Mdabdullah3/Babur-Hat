/* eslint-disable @next/next/no-img-element */
"use client";
import { FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProductInfo = ({ product, setSelectedVariant, selectedVariant }) => {
  const [selectedSize, setSelectedSize] = useState("");

  // Initialize the selected size and variant
  useEffect(() => {
    if (product?.productVariants?.length > 0) {
      const defaultVariant = product?.productVariants[0]; // First variant as default
      setSelectedSize(defaultVariant.size); // Set default size
      setSelectedVariant(defaultVariant); // Set default variant
    }
  }, [product, setSelectedVariant]);

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update selected size
    // Find the variant matching the selected size
    const variant = product?.productVariants?.find((v) => v?.size === size);
    setSelectedVariant(variant); // Update selected variant
  };

  return (
    <div className="col-span-3 lg:mt-0 mt-4">
      {/* Stock Status */}
      {selectedVariant?.quantity > 0 ? (
        <h2 className="bg-primary px-3 font-bold text-white tracking-wider w-12 py-1 rounded-sm">
          In Stock
        </h2>
      ) : (
        <h2 className="bg-red-500 px-3 font-bold text-white tracking-wider w-28 py-2 rounded-sm">
          Out of Stock
        </h2>
      )}

      {/* Product Name */}
      <div className="flex items-center justify-between w-full mt-2 lg:mt-5">
        <h1 className="lg:text-2xl text-lg font-bold capitalize tracking-wider">
          {product?.name}
        </h1>
      </div>

      {/* Reviews */}
      <h2 className="text-md text-orange-500 flex items-center mt-2">
        <span className="text-black tracking-wider ml-2">
          ({product?.reviews?.length || 0} reviews)
        </span>
      </h2>

      {/* Price and Discount */}
      <div className="flex items-center justify-between ">
        <p className="leading-6 lg:mt-4 mt-2 text-lg font-[600] tracking-wider text-primary">
          BDT{" "}
          <span className="lg:text-2xl text-xl">
            {selectedVariant?.discount > 0
              ? selectedVariant?.discount
              : selectedVariant?.price}
            .00
          </span>
          {selectedVariant?.discount > 0 && (
            <del className="font-normal ml-2 lg:text-sm text-gray-400 text-[14px]">
              {selectedVariant?.price}
            </del>
          )}
        </p>
      </div>

      {/* Colors Info */}
      <h2 className="flex items-center gap-3 tracking-wider lg:mt-3">
        {selectedVariant?.colors && selectedVariant?.color}
      </h2>

      {/* Size Selection */}
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

      {/* Trust Badge */}
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
  );
};

export default ProductInfo;
