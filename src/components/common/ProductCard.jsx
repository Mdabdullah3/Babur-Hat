/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    const productAdded = addToCart(product);
    if (!productAdded) {
      toast.error("Product already in cart");
    } else {
      toast.success("Product added to cart");
    }
  };
  return (
    <section
      className="relative hover:shadow-md px-2 py-4 transition duration-300 rounded-2xl hover:bg-white"
      key={product._id}
    >
      <Link
        href={`/products/${product._id}`}
        className="lg:mb-4  cursor-pointer "
      >
        <div className="">
          <img
            className="md:w-64 w-64 h-40 md:h-52 "
            src={product.topimg}
            alt=""
          />
        </div>
        <h1 className="text-[14px] md:text-md">
          {product.productName.slice(0, 20)}...
        </h1>
        <h1 className="flex items-center  justify-between lg:text-sm text-[14px] text-yellow-500 my-2">
          <div className="flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-gray-500 lg:text-sm text-[12px] lg:ml-3">
            1000+ Sold
          </span>
        </h1>
        <h1 className="lg:text-xl text-[14px] font-bold">
          <span className="lg:text-sm text-[14px]">৳</span> {product.sellPrice}
          .00{" "}
          <del className="font-normal ml-2 lg:text-sm text-gray-400 text-[14px]">
            535.00
          </del>
        </h1>
      </Link>
      <div
        onClick={handleAddToCart}
        className="absolute bottom-[105px] lg:bottom-28 right-5 lg:px-3 px-2 py-2 lg:py-3 rounded-full bg-black text-white tooltip tooltip-left text-xl lg:text-2xl"
        data-tip="Add To Cart"
      >
        <LiaCartPlusSolid />
      </div>
    </section>
  );
};

export default ProductCard;
