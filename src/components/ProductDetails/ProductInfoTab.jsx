/* eslint-disable @next/next/no-img-element */
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
const ProductInfoTab = ({ Details, openDetails, handleDetailClick }) => (
  <div className="w-11/12 mx-auto mt-10">
    <div className="flex items-center mb-3 text-xl  text-gray-500 gap-16 relative">
      <button
        className={openDetails === Details[0].Description ? "text-black" : ""}
        onClick={() => handleDetailClick(Details[0].Description)}
      >
        Description
      </button>
      <button
        className={
          JSON.stringify(openDetails) === JSON.stringify(Details[0].color)
            ? "text-black"
            : ""
        }
        onClick={() => handleDetailClick(Details[0].color)}
      >
        Additional information
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
        Questions
      </button>
    </div>
    <hr />
    <div className="mt-8">
      {openDetails === Details[0].Description && (
        <div>
          <p className="tracking-wider">{Details[0].Description}</p>
        </div>
      )}
      {JSON.stringify(openDetails) === JSON.stringify(Details[0].color) && (
        <div>
          <div className="tracking-wider flex gap-3">
            <h1 className="text-gray-600">Color</h1>
            <div className="flex items-center">
              {Details[0].color.map((color, index) => (
                <div key={index}>
                  <span className="ml-1 capitalize">{color}</span>
                  {index < Details[0].color.length - 1 && <span>,</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="tracking-wider flex gap-3 mt-2">
            <h1 className="text-gray-600">Size</h1>
            <div className="flex items-center">
              {Details[0].size.map((size, index) => (
                <div key={index}>
                  <span className="ml-1 capitalize">{size}</span>
                  {index < Details[0].size.length - 1 && <span>,</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {JSON.stringify(openDetails) === JSON.stringify(Details[0].reviews) && (
        <div className="">
          <div>
            <div className="flex items-center justify-around mb-6">
              <div>
                <h1 className="text-2xl mb-5 font-[500] tracking-wider">
                  Rating & Review
                </h1>
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
              <button className="font-[500] text-sm tracking-wider my-2 uppercase px-8 border-[1px] rounded-md  border-black py-4 hover:bg-primary hover:border-primary hover:text-white transition duration-500">
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
      {JSON.stringify(openDetails) === JSON.stringify(Details[0].Questions) && (
        <div>
          <div className="flex items-center justify-around my-6">
            <div>
              <h1 className="text-2xl font-[500] tracking-wider mb-7">
                Question & Answer
              </h1>
              <p>0 Questions</p>
            </div>
            <div>
              <button className="font-[500] text-sm tracking-wider my-2 uppercase px-8 border-[1px] rounded-md  border-black py-4 hover:bg-primary hover:border-primary hover:text-white transition duration-500">
                Ask a Question
              </button>
            </div>
          </div>
          <hr />
          <h1 className="mt-8 text-center text-xl tracking-wider">
            There are no question found.
          </h1>
        </div>
      )}
    </div>
  </div>
);

export default ProductInfoTab;
