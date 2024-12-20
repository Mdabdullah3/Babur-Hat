/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCartStore from "../../store/cartStore";
import Link from "next/link";
import { API_URL, SERVER } from "../../config";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useUserStore from "../../store/userStore";
import Loading from "../../components/common/Loading";
import DeafultProducts from "../Home/DeafultProducts";
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, updatePrice, clearCart } =
    useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const router = useRouter();
  const { user, fetchUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${API_URL}/products?_limit=10000&_fields=_id,productVariants`;
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProductsData(data.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setIsClient(true);
    const savedCart = JSON.parse(localStorage.getItem("cart-storage"))?.state
      ?.cart;
    if (savedCart) {
      const discountAmount = savedCart.reduce((total, item) => {
        if (item?.couponApplied) {
          const discountValue =
            (item?.originalPrice - item?.price) * item?.quantity;
          return total + discountValue;
        }
        return total;
      }, 0);
      setDiscount(discountAmount);
    }
  }, []);
  useEffect(() => {
    const loadUser = async () => {
      await fetchUser();
      setLoading(false);
    };

    loadUser();
  }, [fetchUser]);

  if (loading) {
    return <Loading />;
  }
  if (!isClient) return null;

  const handleRemove = (id, size) => {
    removeFromCart(id, size);
  };

  const handleUpdateQuantity = (id, size, quantity) => {
    updateQuantity(id, size, quantity);
  };

  const handleClearCart = () => {
    clearCart();
    setDiscount(0);
  };
  const handleApplyCoupon = async () => {
    try {
      const response = await axios.get(`${API_URL}/vouchers`);
      const vouchers = response?.data?.data;
      const validVoucher = vouchers.find(
        (voucher) =>
          voucher.redeemCode === coupon && voucher.status === "active"
      );

      if (validVoucher) {
        let discountAmount = 0;

        cart.forEach((item) => {
          if (
            validVoucher.user.role === "admin" ||
            item.userId === validVoucher.user._id
          ) {
            if (!item.couponApplied) {
              const newPrice =
                item.originalPrice -
                (item.originalPrice * validVoucher.discount) / 100;
              discountAmount += (item.originalPrice - newPrice) * item.quantity;
              updatePrice(item._id, newPrice);
            }
          }
        });

        setDiscount(discountAmount);
        setCouponApplied(true);
        setError("");
      } else {
        setDiscount(0);
        setCouponApplied(false);
        setError("Invalid or expired coupon code.");
      }
    } catch (error) {
      setError("An error occurred while applying the coupon.");
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal;
  };

  const checkProductStock = () => {
    for (const item of cart) {
      const product = productsData?.find((p) =>
        p?.productVariants?.some((variant) => variant?._id === item?.variantId)
      );
      const variant = product?.productVariants?.find(
        (variant) => variant?._id === item?.variantId
      );

      if (!product || !variant) {
        return `Product not found. ${item?.name}  Please remove it from the cart.`;
      }
      if (variant.quantity === 0) {
        return `"${item?.name}" is out of stock. Please remove it from the cart.`;
      }
      if (item?.quantity > variant?.quantity) {
        return `The quantity of "${item?.name}" exceeds available stock. Please reduce the quantity.`;
      }
    }
    return null;
  };

  const handleProceedToCheckout = () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }
    const stockError = checkProductStock();
    if (stockError) {
      setError(stockError);
      return;
    }
    router.push("/shipping");
  };

  return (
    <section>
      <div className="w-11/12 mx-auto lg:mt-10 mt-4 tracking-wider">
        <h1 className="lg:text-3xl text-lg font-bold">
          Shopping Cart ({cart?.length})
        </h1>
        {cart?.length !== 0 ? (
          <div className="lg:grid grid-cols-3 lg:mt-8 mt-4 px-1 lg:px-4 w-full">
            <div className="col-span-2">
              <div>
                {cart?.map((item, index) => (
                  <React.Fragment key={item?.size}>
                    {index !== 0 && (
                      <hr className="border-t border-gray-300 mt-6 w-[95%]" />
                    )}
                    <div className="lg:flex items-center lg:w-11/12 w-full justify-between mt-6">
                      <div className="flex items-center">
                        <div className="relative">
                          <img
                            src={`${SERVER}${item?.coverPhoto?.secure_url}`}
                            className="lg:w-20 lg:h-18 h-20 rounded-sm mx-2"
                            alt="cart image"
                          />
                          <h1
                            className="tooltip tooltip-top text-primary cursor-pointer font-bold absolute top-1/3 -left-5"
                            data-tip="Remove"
                            onClick={() => handleRemove(item._id, item?.size)}
                          >
                            <RiDeleteBin6Line size={14} />
                          </h1>
                        </div>
                        <div className="flex-col items-center lg:w-52 w-full justify-between">
                          <h1 className="font-bold tracking-wider text-center capitalize">
                            {item?.name?.slice(0, 20)}...
                          </h1>
                          <div className="flex items-center w-full justify-between lg:hidden mt-1">
                            <div className="">
                              <h1 className="md:font-bold tracking-wider ml-5">
                                {item?.quantity}pcs
                              </h1>
                            </div>
                            <div>
                              <h1 className="flex items-center gap-1">
                                <FaBangladeshiTakaSign />

                                {(
                                  item.price * parseInt(item?.quantity)
                                ).toFixed(2)}
                              </h1>
                            </div>
                            <div className="">
                              <div className="relative flex flex-row lg:w-36 w-20 lg:h-12 h-8 bg-transparent rounded-lg">
                                <button
                                  className="w-20 h-full bg-gray-200 cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item._id,
                                      item?.size,
                                      item.quantity - 1
                                    )
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
                                    handleUpdateQuantity(
                                      item?._id,
                                      item?.size,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  <span className="m-auto text-xl">+</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col hidden lg:block  items-center w-20">
                        <h1 className="font-bold tracking-wider">
                          {item?.quantity} pcs
                        </h1>
                      </div>
                      <div className="hidden lg:block w-20">
                        <h1 className="text-gray-500 uppercase">
                          {item?.size}
                        </h1>
                      </div>
                      <div className="hidden lg:block">
                        <h1 className="text-gray-500">
                          ({item?.quantity} x {item?.originalPrice}) ={""}
                          <span className="font-semibold text-black">
                            {(item.price * parseInt(item?.quantity)).toFixed(2)}
                          </span>
                          BDT
                        </h1>
                      </div>
                      <div className="w-28 mt-2 lg:block hidden">
                        <div className="relative flex flex-row w-32 h-12 bg-transparent rounded-lg">
                          <button
                            className="w-20 h-full bg-gray-200 cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                            onClick={() =>
                              handleUpdateQuantity(
                                item?._id,
                                item?.size,
                                item?.quantity - 1
                              )
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
                              handleUpdateQuantity(
                                item?._id,
                                item?.size,
                                item?.quantity + 1
                              )
                            }
                          >
                            <span className="m-auto text-xl">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <hr className="m-4" />
                <div className="flex gap-2 justify-center items-center mt-6 mx-4">
                  <InputField
                    id="coupon"
                    name="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter your coupon code"
                  />
                  <PrimaryButton value="Apply" onClick={handleApplyCoupon} />
                </div>
                {error && (
                  <p className="text-red-500 text-center mt-2">{error}</p>
                )}
                {couponApplied && (
                  <p className="text-green-500 text-center mt-2">
                    Coupon applied! You get a {discount.toFixed(2)}% discount.
                  </p>
                )}
                <div className="flex lg:hidden justify-center my-3 bg-red-500 px-2 text-white py-3 rounded-xl">
                  <div className="">
                    <h1 className="text-sm  font-bold">Cart Totals</h1>
                    <h1 className="text-sm tracking-wider mt-1 flex items-center">
                      SubTotal :
                      <span className="ml-10 flex font-[500] text-sm items-center">
                        <FaBangladeshiTakaSign />
                        {calculateTotal().toFixed(2)}
                        .00
                      </span>
                    </h1>
                    <h1 className="mt-1 tracking-wider  text-sm flex gap-10 items-start">
                      Shipping Fee:
                      <span className="flex items-center">
                        <FaBangladeshiTakaSign /> 60
                      </span>
                    </h1>
                    <div className="mt-2">
                      <div className="border-b-[0.5px] border-white"> </div>
                      <h1 className="font-bold tracking-widest text-sm uppercase mt-1 flex justify-between items-center">
                        Total{" "}
                        <span className="text-lg flex items-center">
                          <FaBangladeshiTakaSign />
                          {(calculateTotal() + 60).toFixed(2)} BDT
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center flex-col lg:hidden">
                  <img
                    src="https://minimog-4437.kxcdn.com/robust/wp-content/themes/minimog/assets/woocommerce/product-trust-badge.png"
                    alt="payment image"
                    className="w-9/12 mt-4 mx-auto"
                  />
                  <h1 className="my-2 text-center">
                    Guaranteed safe & secure checkout
                  </h1>
                </div>
                <div>
                  <button className="lg:flex items-center gap-2 mt-10 cursor-pointer  hidden tracking-wider">
                    <LuMoveLeft />
                    Go Back Shopping
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-primary lg:block hidden shadow-sm rounded-sm shadow-primary h-[510px]">
              <div className="mx-10 py-8 text-white">
                <h1 className="text-3xl font-[500]">Cart Totals</h1>
                <h1 className="text-sm tracking-wider mt-5 uppercase flex items-center">
                  SubTotal :
                  <span className="ml-10 flex font-[500] text-lg items-center">
                    <FaBangladeshiTakaSign />
                    {calculateTotal().toFixed(2)} BDT
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
                    <span className="text-xl flex items-center">
                      <FaBangladeshiTakaSign size={32} />
                      {(calculateTotal() + 60).toFixed(2)} BDT
                    </span>
                  </h1>
                  {/* <Link href="/shipping"> */}
                  <button
                    onClick={handleProceedToCheckout}
                    className="text-[14px] font-bold uppercase border-white border-[1px] text-primary w-full mt-8 py-4 bg-white rounded-full hover:bg-transparent hover:text-white transition duration-500"
                  >
                    Proceed to Checkout
                  </button>
                  {/* </Link> */}
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
            <div className="text-center mt-4">
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
      <div>
        <hr className="my-4" />
        <section>
          <div className="w-11/12 mx-auto">
            <h1 className="text-md lg:text-2xl my-4 font-bold">
              Related Products
            </h1>
          </div>
          <DeafultProducts />
        </section>
      </div>
      <section className="flex lg:hidden border-t gap-4 border-gray-200 p-2 bg-white sticky bottom-0 w-full justify-between items-center ">
        <button
          onClick={handleProceedToCheckout}
          className="w-full py-2 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 text-sm font-bold"
        >
          Check Out
        </button>
      </section>
    </section>
  );
};

export default Cart;
