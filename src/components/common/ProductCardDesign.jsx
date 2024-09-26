/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
import { SERVER } from "../../config";
const ProductCardDesign = ({ product }) => {
  // const { addToCart } = useCartStore();

  // const handleAddToCart = () => {
  //   if (product?.quantity < 1) {
  //     toast.error("Product is out of stock");
  //   } else {
  //     const productAdded = addToCart(product);
  //     if (!productAdded) {
  //       toast.error("Product already in cart");
  //     } else {
  //       toast.success("Product added to cart");
  //     }
  //   }
  // };
  return (
    <section
      className="relative hover:shadow-md px-2 py-4 transition duration-300 rounded-2xl hover:bg-white"
      key={product._id}
    >
      <Link
        href={`/products/${product?._id}`}
        className="lg:mb-4  cursor-pointer "
      >
        <div className="">
          <img
            className="md:w-64 w-64 h-40 md:h-52 rounded-2xl"
            src={`${SERVER}${product?.coverPhoto?.secure_url}`}
            alt=""
          />
        </div>
        <h1 className="text-[14px]  my-1 capitalize">
          {product?.name?.slice(0, 20)}...
        </h1>

        <h1 className="lg:text-xl text-[14px] font-bold">
          <span className="lg:text-sm text-[14px]">BDT</span>{" "}
          {product?.productVariants[0]?.discount > 0
            ? product?.productVariants[0]?.discount
            : product?.productVariants[0]?.price}
          .00{" "}
          <del className="font-normal ml-2 lg:text-sm text-gray-400 text-[14px]">
            {product?.productVariants[0]?.discount > 0 &&
              product?.productVariants[0]?.price}
          </del>
        </h1>
      </Link>
      {/* <div
        onClick={handleAddToCart}
        className="absolute bottom-[105px] lg:bottom-28 right-5 lg:px-3 px-2 py-2 lg:py-3 cursor-pointer rounded-full bg-black text-white tooltip tooltip-left text-xl lg:text-2xl"
        data-tip="Add To Cart"
      >
        <LiaCartPlusSolid />
      </div> */}
    </section>
  );
};

export default ProductCardDesign;
