/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuMoveLeft } from "react-icons/lu";
import { toast } from "react-toastify";
import useWishlistStore from "../../store/wishlistStore";
import useCartStore from "../../store/cartStore";

const WishlistCard = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    toast.success("Product removed from wishlist");
  };

  const handleAddToCart = (product) => {
    const productAdded = addToCart(product);
    if (!productAdded) {
      toast.error("Product already in cart");
    } else {
      toast.success("Product added to cart");
    }
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="lg:mt-12 mt-4 relative">
      <div className="w-11/12 mx-auto mt-6 tracking-wider">
        <h1 className="lg:text-3xl text-lg font-bold">
          Wishlist ({wishlist.length})
        </h1>
        {wishlist.length !== 0 ? (
          <div className="lg:mt-10 mt-4 lg:px-4 px-1 mx-auto">
            <div className=" col-span-2">
              <div>
                {wishlist.map((item, index) => (
                  <div key={index}>
                    {index !== 0 && (
                      <hr className="border-t border-gray-300 mt-4 lg:mt-6 w-[95%]" />
                    )}
                    <div className="lg:flex items-center w-11/12 justify-between mt-6">
                      <div className=" relative flex items-center justify-between">
                        <img
                          src={item?.topimg}
                          className="w-24 h-24 rounded-sm"
                          alt="whislist image"
                        />
                        <h1
                          onClick={() => handleRemoveFromWishlist(item._id)}
                          className="tooltip tooltip-top text-primary cursor-pointer font-bold absolute top-1/3 -left-5"
                          data-tip="Remove"
                        >
                          <RxCross1 size={14} />
                        </h1>
                        <div className="lg:hidden block">
                          <h1 className="  tracking-wider text-[14px]">
                            {item.productName.slice(0, 30)}...
                          </h1>

                          <div className="flex items-center justify-between lg:hidden mt-2">
                            <div>
                              <h1 className="text-[14px]">
                                ${item.sellPrice}.00
                              </h1>
                            </div>

                            <div className="">
                              <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-primary text-white px-4 lg:px-10 lg:py-3 py-2 rounded-sm font-[500] tracking-wider border-[1px] border-primary hover:bg-transparent hover:text-primary text-[12px] lg:text-sm transition duration-500"
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col items-center w-52 lg:block hidden">
                        <h1 className="font-bold uppercase tracking-wider">
                          {item.productName}
                        </h1>
                      </div>

                      <div className="lg:block hidden">
                        <h1>${item.sellPrice}.00</h1>
                      </div>
                      <div className="lg:block hidden">
                        <h1>In Stock</h1>
                      </div>
                      <div className=" lg:block hidden">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-primary text-white px-10 py-3 rounded-sm font-[500] tracking-wider border-[1px] border-primary hover:bg-transparent hover:text-primary transition duration-500"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <button className="lg:flex items-center gap-2 mt-10 cursor-pointer tracking-wider hidden">
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
                  Your wishlist is currently empty.
                </h1>
                <p className="text-gray-500 mt-2 tracking-wider w-11/12 mx-auto">
                  You may check out all the available products and add some to
                  your wishlist.
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
  );
};

export default WishlistCard;
