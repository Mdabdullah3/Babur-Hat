/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import useReviewStore from "../../store/reviewStore";
import useUserStore from "../../store/userStore";
import { SERVER } from "../../config";
import InputFileUpload from "../common/InputFileUpload";

const ProductComment = ({ productId, product }) => {
  const [newComments, setNewComments] = useState("");
  const [image, setImages] = useState(null);
  const [editComment, setEditComment] = useState(null);
  const { addReview, updateReview, deleteReview } = useReviewStore();
  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleAddComment = async () => {
    const message = "Comment Added Successfully";
    if (user && newComments.trim()) {
      if (editComment) {
        const message = "Comment Updated Successfully";
        await updateReview(
          editComment._id,
          {
            ...editComment,
            comment: newComments,
          },
          message
        );
        setEditComment(null);
      } else {
        const formdata = {
          product: productId,
          userId: user._id,
          comment: newComments,
          image: image,
        };
        await addReview(formdata, message);
      }
      setNewComments("");
    }
  };

  const handleEditComment = (comment) => {
    if (user && user._id === comment.user._id) {
      setEditComment(comment);
      setNewComments(comment.comment);
    }
  };

  const handleDeleteComment = async (comment) => {
    if (user && user._id === comment.user._id) {
      const message = "Comment Deleted Successfull";
      await deleteReview(comment._id, message);
    }
  };

  const comments = product?.reviews?.filter((review) => review.comment);

  return (
    <div>
      <div className="my-6">
        <div>
          <h1 className="text-2xl font-[500] tracking-wider mb-7">
            Comment & Answer
          </h1>
          <p>
            {comments.length} Comment{comments.length !== 1 && "s"}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-5">
        <div className="flex-1">
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Write Your Comments"
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
          />
          <InputFileUpload
            label="Upload Image"
            setFile={setImages}
            name="image"
          />
        </div>
        <div className="mt-5">
          <PrimaryButton
            onClick={handleAddComment}
            value={editComment ? "Update" : "Send"}
          />
        </div>
      </div>
      <div className="mt-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="mb-4 p-4 border rounded">
              <div className="flex items-center gap-4">
                <img
                  src={
                    comment?.user?.avatar
                      ? `${SERVER}${comment.user.avatar.secure_url}`
                      : "/avatar.png"
                  }
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                
                <div>
                  <h4 className="font-bold">{comment?.user.name}</h4>
                  <p>{new Date(comment?.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              {comment?.image?.secure_url ? (
                <img
                  src={`${SERVER}${comment?.image?.secure_url}`}
                  alt=""
                  className="w-40 h-40 my-3"
                />
              ) : null}
              <p className="mt-4">{comment.comment}</p>
              {user && user._id === comment.user._id && (
                <div>
                  <button
                    className="text-blue-500 mr-4"
                    onClick={() => handleEditComment(comment)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteComment(comment)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <h1 className="text-center text-xl tracking-wider">
            There are no Comments found.
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductComment;
