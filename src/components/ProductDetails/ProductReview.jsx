/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import useReviewStore from "../../store/reviewStore";
import useUserStore from "../../store/userStore";
import { toast } from "react-toastify";
import { SERVER } from "../../config";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import InputFileUpload from "../common/InputFileUpload";
import { toDataURL } from "../../utils/DataUrl";

const ProductReview = ({ productId, product }) => {
  const [newReview, setNewReview] = useState("");
  const [image, setImage] = useState(null);
  const [editReview, setEditReview] = useState(null);
  const { fetchReviewsByProduct, addReview, updateReview, deleteReview } =
    useReviewStore();
  const { user, fetchUser } = useUserStore();
  const reviews = product?.reviews?.filter((review) => review.review);

  useEffect(() => {
    fetchReviewsByProduct(productId);
    fetchUser();
  }, [productId, fetchUser, product, fetchReviewsByProduct]);

  const handleAddReview = async () => {
    const formData = {
      product: productId,
      userId: user?._id,
      review: newReview,
      image: image,
    };

    await addReview(formData, "Review Added Successfully");
    document.getElementById("my_modal_2").close();
    setNewReview("");
    setImage(null);
  };

  useEffect(() => {
    if (editReview?.image?.secure_url) {
      const imageUrl = `${SERVER}${editReview.image.secure_url}`;
      toDataURL(imageUrl).then((base64) => {
        setImage(base64);
      });
    }
  }, [editReview?.image?.secure_url]);

  const handleEditReview = async () => {
    const updatedReviewData = {
      ...editReview,
      review: newReview,
      image: image || editReview.image,
    };
    console.log(updatedReviewData);

    if (editReview) {
      await updateReview(
        editReview._id,
        updatedReviewData,
        "Review Updated Successfully"
      );
      document.getElementById("edit_modal").close();
      setEditReview(null);
      setNewReview("");
      setImage(null);
    }
  };

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const openEditModal = (review) => {
    if (user && user._id === review.user._id) {
      setEditReview(review);
      setNewReview(review.review);
      document.getElementById("edit_modal").showModal();
    } else {
      toast.error("You are not authorized to edit this review.");
    }
  };

  const handleDeleteReview = async (review) => {
    if (user && user._id === review.user._id) {
      await deleteReview(review._id, "Review Deleted Successfully");
    } else {
      toast.error("You are not authorized to delete this review.");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-around mb-4 md:mb-6 flex-wrap">
        <div>
          <h1 className="md:text-2xl hidden md:block mb-5 font-[500] tracking-wider">
            Rating & Review
          </h1>
          {/* <p className="flex items-center">
            <CiStar size={19} />
            <CiStar size={19} />
            <CiStar size={19} />
            <CiStar size={19} />
            <CiStar size={19} />
            <span className="text-lg tracking-wider ml-3">
              Based on {reviews.length} Reviews
            </span>
          </p> */}
        </div>
        {/*  */}
        {/* <button
          className="font-[500] text-sm tracking-wider my-2 uppercase px-5 md:px-8 border-[1px] rounded-md border-black py-2 md:py-4 hover:bg-primary hover:border-primary hover:text-white transition duration-500"
          onClick={openModal}
        >
          Write a review
        </button> */}
      </div>
      {/* <hr /> */}
      <div>
        {reviews?.length > 0 ? (
          reviews?.map((review) => (
            <div key={review?._id} className="flex  gap-5 mb-8 mt-6">
              {review?.user?.avatar ? (
                <img
                  src={`${SERVER}${review?.user?.avatar?.secure_url}`}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
              ) : (
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
              )}
              <div>
                <h2 className="text-sm gap-1 text-orange-400 flex items-center">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </h2>
                <h2 className="tracking-wider font-bold text-[15px] my-1">
                  {review?.user?.name} -
                  <span className="text-[12px] text-gray-500 ml-2 font-normal">
                    {new Date(review?.createdAt).toLocaleDateString()}
                  </span>
                </h2>
                {review?.image?.secure_url ? (
                  <img
                    src={`${SERVER}${review?.image?.secure_url}`}
                    alt=""
                    className="w-40 h-40 my-3"
                  />
                ) : null}
                <h1>{review?.review}</h1>
                {user && user._id === review?.user._id && (
                  <div className="mt-2">
                    <button
                      className="text-blue-500 text-xl "
                      onClick={() => openEditModal(review)}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="text-red-500 ml-4 text-xl"
                      onClick={() => handleDeleteReview(review)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-center">No reviews</h1>
          </div>
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
          <InputFileUpload
            label="Profile Picture"
            name="avatar"
            setFile={setImage}
            file={image}
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
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Review</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Update your review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <InputFileUpload
            label="Profile Picture"
            name="avatar"
            setFile={setImage}
            file={image}
          />
          <div className="modal-action">
            <button className="btn" onClick={handleEditReview}>
              Update
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("edit_modal").close()}
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
