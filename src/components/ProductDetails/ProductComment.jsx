/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import useReviewStore from "../../store/reviewStore";
import useUserStore from "../../store/userStore";
import { SERVER } from "../../config";
import InputFileUpload from "../common/InputFileUpload";
import { toDataURL } from "../../utils/DataUrl";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductComment = ({ productId }) => {
  const [newComments, setNewComments] = useState("");
  const [image, setImages] = useState(null);
  const [editComment, setEditComment] = useState(null);
  const {
    addReview,
    fetchReviewsByProduct,
    reviews,
    updateReview,
    deleteReview,
  } = useReviewStore();
  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
    fetchReviewsByProduct(productId);
  }, [fetchUser, fetchReviewsByProduct, productId]);

  const handleAddComment = async () => {
    const message = editComment
      ? "Comment Updated Successfully"
      : "Comment Added Successfully";
    if (user && newComments.trim()) {
      if (editComment) {
        await updateReview(
          editComment._id,
          {
            ...editComment,
            comment: newComments,
            image: image || editComment?.image,
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
      setImages(null);
      document
        .getElementById(editComment ? "edit_modal" : "my_modal_2")
        .close();
    }
  };

  useEffect(() => {
    if (editComment?.image?.secure_url) {
      const imageUrl = `${SERVER}${editComment.image.secure_url}`;
      toDataURL(imageUrl).then((base64) => {
        setImages(base64);
      });
    }
  }, [editComment?.image?.secure_url]);

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const openEditModal = (comment) => {
    if (user && user._id === comment.user._id) {
      setEditComment(comment);
      setNewComments(comment.comment);
      document.getElementById("edit_modal").showModal();
    }
  };

  const handleDeleteComment = async (comment) => {
    if (user && user._id === comment.user._id) {
      const message = "Comment Deleted Successfully";
      await deleteReview(comment._id, message);
    }
  };

  const comments = reviews?.filter((review) => review.comment);

  return (
    <div>
      <div className="my-6">
        <div>
          <h1 className="text-2xl font-[500] tracking-wider mb-7">
            Comment & Answer
          </h1>
          <p>
            {comments?.length} Comment{comments?.length !== 1 && "s"}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-5">
        <div className="mt-5">
          <PrimaryButton
            onClick={openModal}
            value={editComment ? "Update" : "Write Comment"}
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
                    onClick={() => openEditModal(comment)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteComment(comment)}
                  >
                    <RiDeleteBin6Line />
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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Write a Comment</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Your comment"
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
          />
          <InputFileUpload
            label="Profile Picture"
            name="avatar"
            setFile={setImages}
            file={image}
          />
          <div className="modal-action">
            <button className="btn" onClick={handleAddComment}>
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
          <h3 className="font-bold text-lg">Edit Comment</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Update your comment"
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
          />
          <InputFileUpload
            label="Profile Picture"
            name="avatar"
            setFile={setImages}
            file={image}
          />
          <div className="modal-action">
            <button className="btn" onClick={handleAddComment}>
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

export default ProductComment;
