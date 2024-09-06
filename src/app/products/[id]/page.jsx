/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "../../../components/ProductDetails/ProductImages";
import ProductInfo from "../../../components/ProductDetails/ProductInfo";
import ProductShipInfo from "../../../components/ProductDetails/ProductShipInfo";
import ProductInfoTab from "../../../components/ProductDetails/ProductInfoTab";
import { productInformation } from "../../../utils/constants";
import Navbar from "../../../components/layout/Navbar";
import useWishlistStore from "../../../store/wishlistStore";
import useRecentlyViewedStore from "../../../store/RecentViewProduct";
import { toast } from "react-toastify";
import useProductStore from "../../../store/ProductStore";
import Link from "next/link";
import { SERVER } from "../../../config";
import { FaHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import Report from "../../../components/Report";
import useCartStore from "../../../store/cartStore";
const ProductDetails = ({ params }) => {
  const [openDetails, setOpenDetails] = useState(
    productInformation[0]?.Description
  );
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const { id } = params;
  const [isReportModalOpen, setReportModalOpen] = useState(false);
  const { recentlyViewed, addRecentlyViewed, initializeRecentlyViewed } =
    useRecentlyViewedStore();

  const handleDetailClick = (details) => {
    setOpenDetails(details);
  };
  const { product, fetchProductByIdOrSlug } = useProductStore();
  useEffect(() => {
    fetchProductByIdOrSlug(id);
  }, [id, fetchProductByIdOrSlug]);

  const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore();
  const [selectedVariant, setSelectedVariant] = useState(
    product?.productVariants[0]
  );
  console.log(selectedVariant);
  const handleAddToWishlist = () => {
    const productAdded = addToWishlist(product);
    if (!productAdded) {
      toast.error("Product already in wishlist");
    } else {
      toast.success("Product added to wishlist");
    }
  };
  const handleAddToCart = () => {
    if (selectedVariant?.quantity <= quantity) {
      toast.error("Product is out of stock");
      return;
    }
    const result = addToCart(product, selectedVariant, quantity);
    if (!result) {
      toast.error("Product already in cart");
    } else {
      toast.success("Product added to cart");
    }
  };
  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    toast.success("Product removed from wishlist");
  };
  const openReportModal = () => {
    setReportModalOpen(true);
  };

  const closeReportModal = () => {
    setReportModalOpen(false);
  };

  return (
    <section className="">
      <Navbar />
      <div className="flex items-center justify-between w-11/12 mx-auto  mt-10">
        <div className=" w-11/12 mx-auto">
          {product?.user && (
            <div>
              <Link
                href={`/vendor/${product?.user?._id}`}
                className="flex items-center gap-2 cursor-pointer"
              >
                {product?.user?.avatar ? (
                  <img
                    src={`${SERVER}${product?.user?.avatar?.secure_url}`}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <img
                    src="/avatar.png"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <h1 className="font-semibold capitalize">
                  {product?.user?.name}
                </h1>
              </Link>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={openReportModal}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Report
          </button>{" "}
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="w-11/12 mt-2 lg:mt-6 mx-auto">
            <div className="lg:grid grid-cols-8 gap-6 ">
              <ProductImages product={product} />
              <ProductInfo
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                product={product}
              />
              <ProductShipInfo
                handleAddToWishlist={handleAddToWishlist}
                handleRemoveFromWishlist={handleRemoveFromWishlist}
                wishlist={wishlist}
                selectedVariant={selectedVariant}
                product={product}
              />
            </div>
            <hr className="mt-4 mb-2" />
          </div>
        </div>
        <div>
          <ProductInfoTab
            product={product}
            Details={productInformation}
            openDetails={openDetails}
            handleDetailClick={handleDetailClick}
          />
        </div>
      </div>
      <div className="flex lg:hidden border-t gap-4 border-gray-200 p-2 bg-white sticky bottom-0 w-full justify-between items-center ">
        <button
          onclick={handleAddToCart}
          className="w-full  py-3 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 font-bold"
        >
          Add To Cart
        </button>
        {/* <button className="w-full py-2 rounded-full  border-[1px] hover:border-primary border-black text-black tracking-wider  hover:bg-primary hover:text-white transition duration-500 font-bold">
          Buy Now
        </button> */}
        <button className="w-32 py-3 border border-primary rounded-full flex font-bold text-lg justify-center">
          {wishlist?.find((item) => item?._id === product?._id) ? (
            <h1
              onClick={() => handleRemoveFromWishlist(product?._id)}
              className="text-primary cursor-pointer"
            >
              <FaHeart size={22} />
            </h1>
          ) : (
            <h1
              onClick={handleAddToWishlist}
              className="text-primary cursor-pointer"
            >
              <GoHeart size={22} />
            </h1>
          )}
        </button>
      </div>
      <Report
        isOpen={isReportModalOpen}
        id={id}
        onRequestClose={closeReportModal}
      />
    </section>
  );
};

export default ProductDetails;
