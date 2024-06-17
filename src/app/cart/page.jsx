/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import useCartStore from "../../store/cartStore";
import Link from "next/link";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleUpdateQuantity = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-14 tracking-wider">
        <h1 className="text-3xl font-bold">Shopping Cart ({cart?.length})</h1>
        {cart?.length !== 0 ? (
          <div className="grid grid-cols-3 mt-8 px-4 w-full">
            <div className="col-span-2">
              <div>
                {cart?.map((item, index) => (
                  <React.Fragment key={item._id}>
                    {index !== 0 && (
                      <hr className="border-t border-gray-300 mt-6 w-[95%]" />
                    )}
                    <div className="flex items-center w-11/12 justify-between mt-6">
                      <div className="relative">
                        <img
                          src={item.topimg}
                          className="w-24 h-28 rounded-sm"
                          alt={item.productName}
                        />
                        <h1
                          className="tooltip tooltip-top text-primary cursor-pointer font-bold absolute top-1/3 -left-5"
                          data-tip="Remove"
                          onClick={() => handleRemove(item._id)}
                        >
                          <RiDeleteBin6Line size={14} />
                        </h1>
                      </div>
                      <div className="flex-col items-center w-52">
                        <h1 className="font-bold tracking-wider">
                          {item?.productName?.slice(0, 20)}...
                        </h1>
                      </div>
                      <div className="flex-col items-center w-52">
                        <h1 className="font-bold tracking-wider">
                          {item?.quantity} pcs
                        </h1>
                      </div>
                      <div>
                        <h1>${item.sellPrice}.00</h1>
                      </div>
                      <div className="w-28 mt-2">
                        <div className="relative flex flex-row w-36 h-12 bg-transparent rounded-lg">
                          <button
                            className="w-20 h-full bg-gray-200 cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity - 1)
                            }
                          >
                            <span className="m-auto text-2xl">-</span>
                          </button>
                          <input
                            type="number"
                            className="flex items-center placeholder-black w-full font-semibold text-center bg-gray-200 outline-none text-md"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="w-20 h-full bg-gray-200 cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity + 1)
                            }
                          >
                            <span className="m-auto text-xl">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div>
                  <button className="flex items-center gap-2 mt-10 cursor-pointer tracking-wider">
                    <LuMoveLeft />
                    Go Back Shopping
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-primary shadow-sm rounded-sm shadow-primary h-[510px]">
              <div className="mx-10 py-8 text-white">
                <h1 className="text-3xl font-[500]">Cart Totals</h1>
                <h1 className="text-sm tracking-wider mt-5 uppercase flex items-center">
                  SubTotal :
                  <span className="ml-10 flex font-[500] text-lg items-center">
                    <FaBangladeshiTakaSign />
                    {cart.reduce(
                      (total, item) => total + item.sellPrice * item.quantity,
                      0
                    )}
                    .00
                  </span>
                </h1>
                <h1 className="mt-4 tracking-wider uppercase text-sm flex gap-10 items-start">
                  Shipping Fee:
                  <span className="flex items-center">
                    <FaBangladeshiTakaSign /> 60
                  </span>
                </h1>
                <div className="mt-10">
                  <div className="border-b-[0.5px] border-white"> </div>
                  <h1 className="font-bold tracking-widest text-md uppercase mt-4 flex justify-between items-center">
                    Total{" "}
                    <span className="text-xl">
                      $
                      {cart.reduce(
                        (total, item) => total + item.sellPrice * item.quantity,
                        0
                      ) + 60}
                      .00
                    </span>
                  </h1>
                  <Link href="/shipping">
                    <button className="text-[14px] font-bold uppercase border-white border-[1px] text-primary w-full mt-8 py-4 bg-white rounded-full hover:bg-transparent hover:text-white transition duration-500">
                      Proceed to Checkout
                    </button>
                  </Link>
                  <button
                    onClick={handleClearCart}
                    className="text-[14px] font-bold uppercase border-white border-[1px] text-primary w-full mt-4 py-2 bg-white rounded-full hover:bg-transparent hover:text-white transition duration-500"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              <hr className="py-2" />
              <div className="flex justify-center flex-col">
                <img
                  src="https://minimog-4437.kxcdn.com/robust/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png"
                  alt="payment image"
                  className="w-9/12 mt-4 mx-auto"
                />
                <h1 className="my-2 text-center text-white">
                  Guaranteed safe & secure checkout
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <img
                src="https://minimog.thememove.com/robust/wp-content/themes/minimog/assets/woocommerce/empty-cart.png"
                className="w-3/12 mx-auto"
                alt="empty cart"
              />
              <div className="text-center mt-1 mb-4">
                <h1 className="font-bold tracking-wider text-xl">
                  Your cart is currently empty.
                </h1>
                <p className="text-gray-500 mt-2 tracking-wider w-11/12 mx-auto">
                  You may check out all the available products and buy some in
                  the shop.
                </p>
                <Link href="/">
                  <button className="px-12 py-4 rounded-sm border-primary border-[1px] bg-primary mt-4 uppercase text-[14px] font-[500] tracking-widest text-white">
                    Return To Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
