/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useReviewStore from "../../store/reviewStore";
import useUserStore from "../../store/userStore";
import { SERVER } from "../../config";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const MyReview = () => {
  const { user, fetchUser } = useUserStore();
  const { reviews, fetchReviewsByUser, deleteReview } = useReviewStore();

  useEffect(() => {
    if (user) {
      fetchReviewsByUser(user._id);
      fetchUser();
    }
  }, [user, fetchReviewsByUser, fetchUser]);
  const handleDelete = async (id) => {
    try {
      await deleteReview(id, "Review deleted successfully");
    } catch (error) {
      toast.error("Error deleting review:", error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
      <div className="flex flex-wrap gap-5">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <>
              <div
                key={review?._id}
                className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-start"
              >
                <img
                  src={`${SERVER}${review.user.avatar.secure_url}`}
                  alt={review.user.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">{review.user.name}</h2>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                  <p className="text-gray-700">{review.review}</p>
                </div>
              </div>
            </>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default MyReview;
