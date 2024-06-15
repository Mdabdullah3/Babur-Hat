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
    <section className="relative" key={product._id}>
      <Link
        href={`/products/${product._id}`}
        className="mb-4 hover:bg-white hover:shadow-md transition duration-300 px-4 py-4 cursor-pointer rounded-2xl"
      >
        <div className="">
          <img className="w-64 h-52 " src={product.topimg} alt="" />
        </div>
        <h1 className="text-md">{product.productName.slice(0, 20)}...</h1>
        <h1 className="flex items-center text-sm my-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-gray-500 text-sm ml-3">1000+ Sold</span>
        </h1>
        <h1 className="text-xl font-bold">
          <span className="text-sm">BDT</span> {product.sellPrice}.00{" "}
          <del className="font-normal text-sm text-gray-400">BDT 535.00</del>
        </h1>
      </Link>
      <div
        onClick={handleAddToCart}
        className="absolute bottom-28 right-5 px-3 py-3 rounded-full bg-black text-white tooltip tooltip-left"
        data-tip="Add To Cart"
      >
        <LiaCartPlusSolid size={28} />
      </div>
    </section>
  );
};

export default ProductCard;
