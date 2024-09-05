/* eslint-disable @next/next/no-img-element */
"use client";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import ProductReview from "../../components/ProductDetails/ProductReview";
import ProductComment from "../../components/ProductDetails/ProductComment";
import { useState } from "react";

const ProductInfoTab = ({
  Details,
  openDetails,
  handleDetailClick,
  product,
}) => {
  const reviews = product?.reviews?.filter((review) => review.review);
  const [activeMenu, setActiveMenu] = useState("Review's");
  const menu = ["Review's", "Comment"];
  return (
    <section>
      <div className="w-11/12 mx-auto mt-10 hidden lg:block">
        <div className="flex  items-center mb-3 text-xl  text-gray-500 gap-16 relative">
          <button
            className={
              openDetails === Details[0].Description ? "text-black" : ""
            }
            onClick={() => handleDetailClick(Details[0].Description)}
          >
            Description
          </button>
          <button
            className={
              JSON.stringify(openDetails) === JSON.stringify(Details[0].reviews)
                ? "text-black"
                : ""
            }
            onClick={() => handleDetailClick(Details[0].reviews)}
          >
            Reviews ({reviews ? reviews?.length : 0})
          </button>
          <button
            className={
              JSON.stringify(openDetails) ===
              JSON.stringify(Details[0].Questions)
                ? "text-black"
                : ""
            }
            onClick={() => handleDetailClick(Details[0].Questions)}
          >
            Comment
          </button>
        </div>
        <hr />
        <div className="mt-8">
          {openDetails === Details[0].Description && (
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          )}
          {JSON.stringify(openDetails) ===
            JSON.stringify(Details[0].reviews) && (
            <ProductReview productId={product?._id} product={product} />
          )}
          {JSON.stringify(openDetails) ===
            JSON.stringify(Details[0].Questions) && (
            <ProductComment productId={product?._id} product={product} />
          )}
        </div>
      </div>
      <div className="px-4 block lg:hidden">
        <h1 className="text-md font-bold tracking-wider mb-4">Description</h1>
        {Details[0].Description && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          </div>
        )}
        <hr className="my-4" />
        <div className="flex gap-4 items-center">
          {menu?.map((item) => (
            <h1
              onClick={() => setActiveMenu(item)}
              key={item}
              className={`transition duration-300 capitalize cursor-pointer${
                activeMenu === item
                  ? "text-red-500 border-b-2 border-primary"
                  : "text-black "
              }`}
            >
              {item}
            </h1>
          ))}
        </div>
        {activeMenu === "Review's" ? (
          <div>
            <ProductReview productId={product?._id} product={product} />
          </div>
        ) : (
          <ProductComment />
        )}
      </div>
    </section>
  );
};
export default ProductInfoTab;
