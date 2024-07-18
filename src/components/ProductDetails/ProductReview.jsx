/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import useReviewStore from "../../store/reviewStore";
import InputFileUpload from "../common/InputFileUpload";

const ProductReview = ({ productId }) => {
  const [newReview, setNewReview] = useState("");
  const { reviews, fetchReviewsByProduct, addReview } = useReviewStore();

  useEffect(() => {
    fetchReviewsByProduct(productId);
  }, [productId, fetchReviewsByProduct]);

  const formdata = {
    product: productId,
    review: newReview,
  };
  const handleAddReview = async () => {
    await addReview(formdata);
    document.getElementById("my_modal_2").close();
    setNewReview("");
  };

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };
  return (
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
              Based on {reviews.length} Reviews
            </span>
          </p>
        </div>
        <button
          className="font-[500] text-sm tracking-wider my-2 uppercase px-8 border-[1px] rounded-md border-black py-4 hover:bg-primary hover:border-primary hover:text-white transition duration-500"
          onClick={openModal}
        >
          Write a review
        </button>
      </div>
      <hr />
      <div>
        {reviews.length > 0 ? (
          reviews?.data.map((review, index) => (
            <div key={index} className="flex items-center gap-5 mb-8 mt-6">
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
                  {review?.user} -
                  <span className="text-[12px] text-gray-500 ml-2 font-normal">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </h2>
                <h1>{review.review}</h1>
              </div>
            </div>
          ))
        ) : (
          <div>No reviews</div>
        )}
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Write a Review</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Your review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <div className="modal-action">
            <button className="btn" onClick={handleAddReview}>
              Submit
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductReview;