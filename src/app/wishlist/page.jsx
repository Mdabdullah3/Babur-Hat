/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { LuMoveLeft } from "react-icons/lu";
import { cart } from "../../utils/constants";
import DeafultProducts from "../../components/Home/DeafultProducts";
const page = () => {
  return (
    <div>
      <div className="mt-12 relative">
        <div className="w-11/12 mx-auto mt-6 tracking-wider">
          <h1 className="text-3xl font-bold">Wishlist</h1>
          {cart.length !== 0 ? (
            <div className="mt-10 px-4 mx-auto">
              <div className=" col-span-2">
                <div>
                  {cart.map((item, index) => (
                    <>
                      {index !== 0 && (
                        <hr className="border-t border-gray-300 mt-6 w-[95%]" />
                      )}
                      <div className="flex items-center w-11/12 justify-between mt-6">
                        <div className=" relative">
                          <img
                            src={item?.image}
                            className="w-24 h-28 rounded-sm"
                            alt=""
                          />
                          <h1
                            className="tooltip tooltip-top text-primary cursor-pointer font-bold absolute top-1/3 -left-5"
                            data-tip="Remove"
                          >
                            <RxCross1 size={14} />
                          </h1>
                        </div>
                        <div className="flex-col items-center w-52">
                          <h1 className="font-bold uppercase tracking-wider">
                            {item.name}
                          </h1>
                          <h1 className=" capitalize text-gray-500 mt-1">
                            Size: {item.size}
                          </h1>
                        </div>
                        <div>
                          <h1>${item.price}.00</h1>
                        </div>
                        <div>
                          <h1>In Stock</h1>
                        </div>
                        <div className="">
                          <button className="bg-primary text-white px-10 py-3 rounded-sm font-[500] tracking-wider border-[1px] border-primary hover:bg-transparent hover:text-primary transition duration-500">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </>
                  ))}

                  <div>
                    <button className="flex items-center gap-2 mt-10 cursor-pointer tracking-wider">
                      <LuMoveLeft />
                      Go Back Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center">
                <img
                  src="https://minimog.thememove.com/robust/wp-content/themes/minimog/assets/woocommerce/empty-cart.png"
                  className="w-3/12 mx-auto"
                  alt=""
                />
                <div className="text-center mt-1 mb-4">
                  <h1 className="font-bold tracking-wider text-xl">
                    Your cart is currently empty.
                  </h1>
                  <p className="text-gray-500 mt-2 tracking-wider w-11/12 mx-auto">
                    You may check out all the available products and buy some in
                    the shop.
                  </p>
                  <button className="px-12 py-4 rounded-sm border-primary border-[1px] bg-primary mt-4 uppercase text-[14px] font-[500] tracking-widest text-white">
                    Return To Shop
                  </button>
                </div>
              </div>
            </div>
          )}
          <hr className="my-4" />
        </div>
      </div>
      <DeafultProducts />
    </div>
  );
};

export default page;