/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import useReviewStore from "../../store/reviewStore";
import useUserStore from "../../store/userStore";
import { SERVER } from "../../config";
import InputFileUpload from "../common/InputFileUpload";
import { toDataURL } from "../../utils/DataUrl";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const ProductComment = ({ productId }) => {
  const [newComments, setNewComments] = useState("");
  const [newReply, setNewReply] = useState(""); // Separate state for replies
  const [image, setImages] = useState(null);
  const [editComment, setEditComment] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [editReply, setEditReply] = useState(null);
  const {
    addReview,
    replys,
    fetchReviewsByProduct,
    fetchAllReplies,
    reviews,
    updateReview,
    deleteReview,
  } = useReviewStore();
  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
    fetchAllReplies(productId);
    fetchReviewsByProduct(productId);
  }, [fetchUser, fetchReviewsByProduct, fetchAllReplies, productId]);

  // Handle adding or updating a comment
  const handleAddComment = async () => {
    const message = editComment
      ? "Comment Updated Successfully"
      : "Comment Added Successfully";
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
        userId: user?._id,
        comment: newComments,
        image: image,
      };
      await addReview(formdata, message);
    }
    setNewComments("");
    setImages(null);
    document.getElementById(editComment ? "edit_modal" : "my_modal_2").close();
  };

  // Handle adding or editing a reply
  const handleAddReply = async () => {
    const message = editReply
      ? "Reply Updated Successfully"
      : "Reply Added Successfully";
    if (editReply) {
      await updateReview(
        editReply._id,
        {
          ...editReply,
          comment: newReply,
          image: image || editReply?.image,
        },
        message
      );
      setEditReply(null);
    } else {
      const formdata = {
        product: productId,
        userId: user?._id,
        comment: newReply,
        image: image,
        replyTo: commentId,
      };
      console.log(formdata);
      await addReview(formdata, message);
    }
    setNewReply("");
    setImages(null);
    document.getElementById("my_reply_modal").close();
  };

  // Open modal for adding or editing a reply
  const openReplyModal = (id) => {
    if (!user) {
      toast.error("Please Login First");
      return;
    }
    setEditReply(null);
    setNewReply("");
    setCommentId(id);
    document.getElementById("my_reply_modal").showModal();
  };

  const openEditReplyModal = (reply) => {
    if (user && user._id === reply.user._id) {
      setEditReply(reply);
      setNewReply(reply.comment);
      document.getElementById("my_reply_modal").showModal();
    }
  };

  // Handle deleting a comment or reply
  const handleDeleteCommentOrReply = async (item) => {
    if (user && user._id === item.user._id) {
      const message = "Deleted Successfully";
      await deleteReview(item._id, message);
    }
  };

  // Preload images if editing a comment or reply
  useEffect(() => {
    if (editComment?.image?.secure_url) {
      const imageUrl = `${SERVER}${editComment.image.secure_url}`;
      toDataURL(imageUrl).then((base64) => {
        setImages(base64);
      });
    }
  }, [editComment?.image?.secure_url]);

  const comments = reviews?.filter(
    (review) => review.comment && !review.replyTo
  );
  const commentIds = comments.map((comment) => comment._id);

  const replies = replys?.filter(
    (reply) => reply.replyTo && commentIds.includes(reply.replyTo._id)
  );

  const repliesMap = replies.reduce((acc, reply) => {
    if (!acc[reply.replyTo._id]) {
      acc[reply.replyTo._id] = [];
    }
    acc[reply.replyTo._id].push(reply);
    return acc;
  }, {});
  return (
    <div>
      <div className="my-6">
        <div>
          <h1 className="md:text-2xl text-sm font-[500] tracking-wider mb-7">
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
            onClick={() => document.getElementById("my_modal_2").showModal()}
            value={editComment ? "Update" : "Write Comment"}
          />
        </div>
      </div>
      <div className="mt-8">
        {comments?.length > 0 ? (
          comments?.map((comment) => (
            <div key={comment._id} className="mb-4 p-4 border rounded">
              <div className="flex items-center gap-4">
                <img
                  src={
                    comment?.user?.avatar
                      ? `${SERVER}${comment.user.avatar.secure_url}`
                      : "/avatar.png"
                  }
                  alt=""
                  className="md:w-14 md:h-14 h-10 w-10 rounded-full"
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
                  className="md:w-40 md:h-40 w-28 h-28 my-3"
                />
              ) : null}
              <div className="flex items-center justify-between">
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
                      onClick={() => handleDeleteCommentOrReply(comment)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                )}
              </div>
              <div className="ml-10 mt-4">
                <button
                  className="text-blue-500"
                  onClick={() => openReplyModal(comment?._id)}
                >
                  Reply
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-sm md:text-xl tracking-wider">
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
            label="Image"
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

      <dialog id="my_reply_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Write a Reply</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Your reply"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          <InputFileUpload
            label="Image"
            name="avatar"
            setFile={setImages}
            file={image}
          />
          <div className="modal-action">
            <button className="btn" onClick={handleAddReply}>
              Submit
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("my_reply_modal").close()}
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
