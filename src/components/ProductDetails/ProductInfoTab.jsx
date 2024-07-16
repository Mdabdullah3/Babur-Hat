/* eslint-disable @next/next/no-img-element */
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import ProductReview from "../../components/ProductDetails/ProductReview";
import ProductComment from "../../components/ProductDetails/ProductComment"
const ProductInfoTab = ({
  Details,
  openDetails,
  handleDetailClick,
  product,
}) => (
  <section>
    <div className="w-11/12 mx-auto mt-10 hidden lg:block">
      <div className="flex  items-center mb-3 text-xl  text-gray-500 gap-16 relative">
        <button
          className={openDetails === Details[0].Description ? "text-black" : ""}
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
          Reviews (0)
        </button>
        <button
          className={
            JSON.stringify(openDetails) === JSON.stringify(Details[0].Questions)
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
        {JSON.stringify(openDetails) === JSON.stringify(Details[0].reviews) && (
          <ProductReview productId={product?._id} />
        )}
        {JSON.stringify(openDetails) ===
          JSON.stringify(Details[0].Questions) && (
          <ProductComment />
        )}
      </div>
    </div>
    <div className="px-4 block lg:hidden">
      <h1 className="text-md font-bold tracking-wider mb-2">Description</h1>
      {Details[0].Description && (
        <div>
          <p className="">{Details[0].Description}</p>
        </div>
      )}
      <h2 className="text-md font-bold tracking-wider mt-4">Reviews</h2>
      {JSON.stringify(Details[0].reviews) && (
        <div className="">
          <div>
            <div className="lg:flex items-center justify-around mb-6">
              <div>
                <p className="flex items-center">
                  <CiStar size={19} />
                  <CiStar size={19} />
                  <CiStar size={19} />
                  <CiStar size={19} />
                  <CiStar size={19} />
                  <span className="text-lg tracking-wider ml-3">
                    Based on 0 Reviews
                  </span>
                </p>
              </div>
              <button className="font-[500] text-[12px] tracking-wider my-2 uppercase px-8 border-[1px] rounded-md  border-black py-2 hover:bg-primary hover:border-primary hover:text-white transition duration-500">
                Write a review
              </button>
            </div>
            <hr />
          </div>

          {Details[0].reviews.map((review) => (
            <div
              className="flex items-center gap-5 mb-8 mt-6"
              key={review.review}
            >
              <img
                className="w-16 rounded-full"
                src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=120&d=mm&r=g"
                alt=""
              />
              <div>
                <h2 className="text-sm gap-1 text-orange-400 flex items-center">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </h2>
                <h2 className="tracking-wider font-bold text-[15px] my-1">
                  Abir Ahmed -
                  <span className="text-[12px] text-gray-500 ml-2 font-normal">
                    12 Jan 2024
                  </span>
                </h2>
                <h1>{review?.review}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default ProductInfoTab;
