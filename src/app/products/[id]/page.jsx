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

const ProductDetails = ({ params }) => {
  const [openDetails, setOpenDetails] = useState(
    productInformation[0]?.Description
  );
  const { id } = params;

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

  const handleAddToWishlist = () => {
    const productAdded = addToWishlist(product);
    if (!productAdded) {
      toast.error("Product already in wishlist");
    } else {
      toast.success("Product added to wishlist");
    }
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    toast.success("Product removed from wishlist");
  };

  return (
    <section className="">
      <Navbar />
      <div className="mt-10 w-11/12 mx-auto">
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
      <div className="">
        <div className="">
          <div className="w-11/12 mt-2 lg:mt-6 mx-auto">
            <div className="lg:grid grid-cols-8 gap-6 ">
              <ProductImages product={product} />
              <ProductInfo product={product} />
              <ProductShipInfo
                handleAddToWishlist={handleAddToWishlist}
                handleRemoveFromWishlist={handleRemoveFromWishlist}
                wishlist={wishlist}
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
        <button className="w-full  py-3 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 font-bold">
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
    </section>
  );
};

export default ProductDetails;
