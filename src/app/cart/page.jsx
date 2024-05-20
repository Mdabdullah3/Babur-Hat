/* eslint-disable @next/next/no-img-element */
import { LuMoveLeft } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { cart } from "../../utils/constants";
const Cart = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-14 tracking-wider">
        <h1 className="text-3xl font-bold tracking-widest">Shopping Cart</h1>
        {cart.length !== 0 ? (
          <div className="grid grid-cols-3 mt-10 px-4 w-full">
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
                      <div className="w-28 mt-2">
                        <div className="relative flex flex-row w-36 h-12 bg-transparent rounded-lg">
                          <button className="w-20 h-full  bg-gray-200  cursor-pointer hover:text-gray-700  hover:bg-gray-400">
                            <span className="m-auto text-2xl">-</span>
                          </button>

                          <input
                            type="number"
                            className="flex items-center placeholder-black w-full font-semibold text-center   bg-gray-200 outline-none  text-md "
                            placeholder="1"
                          />

                          <button className="w-20 h-full  bg-gray-200  cursor-pointer  hover:text-gray-700 hover:bg-gray-400">
                            <span className="m-auto text-xl">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <div className="mt-16 flex items-center ml-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code..."
                      className="input focus:outline-none rounded-sm input-secondary h-12 tracking-widest w-full max-w-xs"
                    />
                    <button className="bg-black border-t-[1px] border-b-[1px]  border-black -mr-[1px] -ml-1 text-sm tracking-widest font-bold h-12 rounded-sm text-white uppercase text-[13px] w-64 hover:bg-primary hover:text-white hover:border-primary transition duration-500">
                      Apply Coupon
                    </button>
                  </div>
                  <div className="">
                    <button className=" border-t-[1px] border-b-[1px] border-black h-12 w-72 text-sm px-10 tracking-widest font-bold border-r-[1px] text-black uppercase text-[13px] hover:bg-primary  hover:border-primary hover:text-white transition duration-300">
                      Update Cart
                    </button>
                  </div>
                </div>
                <div>
                  <button className="flex items-center gap-2 mt-10 cursor-pointer tracking-wider">
                    <LuMoveLeft />
                    Go Back Shopping
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-primary shadow-sm rounded-sm shadow-primary h-[460px]">
              <div className="mx-10 py-8 text-white">
                <h1 className="text-3xl font-[500] tracking-widest">
                  Cart Totals
                </h1>
                <h1 className="text-sm tracking-wider mt-5 uppercase">
                  SubTotal :
                  <span className="ml-10 font-[500] text-lg">${234}.00</span>
                </h1>
                <h1 className="mt-4 tracking-wider uppercase text-sm flex gap-10 items-start">
                  Shipping :
                  <div>
                    <div className="">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-green-500 radio-sm radio-success"
                          checked
                        />
                        <span className="ml-2 capitalize">Free shipping</span>
                      </label>
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center  cursor-pointer">
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-green-500 radio-sm radio-success"
                        />
                        <span className="capitalize ml-2">Local pickup</span>
                      </label>
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-green-500 radio-sm radio-success"
                        />
                        <span className="ml-2 capitalize">Flat Rate: $10</span>
                      </label>
                    </div>
                    <h1 className="mt-5 capitalize text-lg tracking-wider">
                      Shipping to Bangladesh.
                    </h1>
                  </div>
                </h1>
                <div className="mt-10">
                  <h1 className="border-b-[0.5px]  border-white"> </h1>
                  <h1 className="font-bold tracking-widest text-md uppercase mt-4 flex justify-between items-center">
                    Total <span className="text-xl">$560.00</span>
                  </h1>
                  <button className="text-[14px] font-bold uppercase tracking-widest border-white border-[1px] text-primary w-full mt-8 py-4 bg-white hover:bg-transparent hover:text-white transition duration-500">
                    Proceed to Checkout
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
      </div>
    </div>
  );
};

export default Cart;
