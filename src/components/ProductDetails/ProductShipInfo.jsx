import React from "react";
import { GoHeart } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
const ProductShipInfo = ({ product }) => {
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    const result = addToCart(product);
    if (!result) {
      toast.error("Product already in cart");
    } else {
      toast.success("Product added to cart");
    }
  };
  return (
    <div className="shadow-lg px-5 py-4 bg-white col-span-2 rounded-2xl border border-gray-300">
      <h1 className="flex items-center justify-between font-bold">
        Ship to{" "}
        <span className="flex items-center gap-1 font-normal">
          <CiLocationOn /> Bangladesh
        </span>
      </h1>
      <hr className="my-4" />
      <h1 className="font-bold mb-2 flex items-center justify-between">
        Standard Delivery{" "}
        <span className="flex items-center gap-1 font-normal">
          <FaBangladeshiTakaSign size={21} /> 60
        </span>
      </h1>
      <h1>Estimated delivery on Jul 18 </h1>
      <h1 className="mt-2 font-bold">Cash on Delivery Available</h1>
      <hr className="my-3" />
      <label htmlFor="" className="w-full text-md font-semibold">
        Quantity :
      </label>
      <div className="relative flex item-center bg-transparent rounded-lg my-3 mb-5 w-32">
        <button className="px-2 text-white rounded-full bg-primary/80 text-2xl font-bold ">
          -
        </button>
        <input
          className="flex items-center placeholder-black w-full font-semibold text-center   outline-none  text-md "
          placeholder="1"
        />
        <button className="px-1 text-white rounded-full bg-primary/80 text-2xl font-bold ml-4">
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full my-2 py-3 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 text-sm font-bold"
      >
        Add To Cart
      </button>
      <button className="w-full py-3 rounded-full my-2 border-[1px] hover:border-primary border-black text-black tracking-wider  hover:bg-primary hover:text-white transition duration-500 font-bold">
        Buy Now
      </button>
      <div className="grid grid-cols-3 items-center gap-2">
        <button className="w-full font-bold py-3 rounded-full my-2 bg-primary/20 justify-center  hover:border-primary col-span-2 flex items-center gap-2  text-primary tracking-wider hover:bg-primary hover:text-white transition duration-500">
          <FiShare2 /> Share
        </button>
        <button className="w-full py-3 border border-black rounded-full flex font-bold text-lg justify-center">
          <GoHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductShipInfo;
