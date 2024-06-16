/* eslint-disable @next/next/no-img-element */
"use client";
import { FaRegStar, FaStar, FaStarHalfAlt, FaEye } from "react-icons/fa";
import ProductSizeSelector from "../../components/ProductDetails/ProductSizeSelector";
import { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import useWishlistStore from "../../store/wishlistStore";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore();

  const handleSizeClick = (size) => setSelectedSize(size);

  const handleAddToWishlist = () => {
    const productAdded = addToWishlist(product);
    if (!productAdded) {
      toast.error("Product already in wishlist");
    } else {
      toast.success("Product added to wishlist");
    }
  };
  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    toast.success("Product removed from wishlist");
  };

  return (
    <div className="col-span-3">
      <h2 className="bg-primary px-3 font-bold text-white tracking-wider w-14 py-1 rounded-sm">
        Sale
      </h2>
      <div className="flex items-center justify-between w-full mt-5">
        <h1 className="text-2xl font-bold capitalize tracking-wider">
          {product?.productName}
        </h1>
        {wishlist?.find((item) => item._id === product._id) ? (
          <h1
            onClick={() => handleRemoveFromWishlist(product._id)}
            className="tooltip tooltip-left text-primary cursor-pointer"
            data-tip="Remove From Wishlist"
          >
            <FaStar size={22} />
          </h1>
        ) : (
          <h1
            onClick={handleAddToWishlist}
            className="tooltip tooltip-left text-primary cursor-pointer"
            data-tip="Add To Wishlist"
          >
            <FaRegStar size={22} />
          </h1>
        )}
      </div>
      <h2 className="text-md text-orange-500 flex items-center mt-2">
        <FaStar /> <FaStar /> <FaStar /> <FaStar />
        <FaStarHalfAlt />
        <span className="text-black tracking-wider ml-2">(21 reviews)</span>
      </h2>
      <div className="flex items-center justify-between">
        <p className="leading-6 mt-4 text-lg font-[600] tracking-wider text-primary ">
          BDT <span className="text-2xl">{product?.sellPrice}.00</span>
          <span className="text-red-300 line-through ml-4 text-md font-normal">
            $45.00
          </span>
        </p>
      </div>
      <h2 className="flex items-center gap-3 tracking-wider mt-3">
        <FaEye size={18} /> <span className="font-bold">21</span> people are
        viewing this right now
      </h2>
      <h1 className="mt-2 font-bold tracking-wider">
        Size: <span className="font-normal">{selectedSize}</span>
      </h1>
      <ProductSizeSelector
        sizes={product?.size}
        selectedSize={selectedSize}
        onSizeClick={handleSizeClick}
      />
      <div>
        <h1 className="flex items-center text-md font-[500] mt-5 tracking-wider mb-4">
          <span className="mr-4">
            <LiaShippingFastSolid size={20} />
          </span>
          Free Shipping & Returns:
          <span className="text-gray-500 ml-3 font-normal">
            On all orders over <span className="text-black">$200.00</span>
          </span>
        </h1>
        <div className="bg-gray-200 mt-4 px-5 py-3 flex flex-col items-center justify-center rounded-md">
          <img
            src="https://minimog-4437.kxcdn.com/robust/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png"
            alt=""
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
