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
  const [newReply, setNewReply] = useState("");
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
      await addReview(formdata, message);
    }
    setNewReply("");
    setImages(null);
    document.getElementById("my_reply_modal").close();
  };

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

  const handleDeleteCommentOrReply = async (item) => {
    if (user && user._id === item.user._id) {
      const message = "Deleted Successfully";
      await deleteReview(item._id, message);
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

  const comments = reviews?.filter(
    (review) => review.comment && !review.replyTo
  );
  const commentIds = comments.map((comment) => comment._id);

  // const replies = replys?.filter(
  //   (reply) => reply.replyTo && commentIds.includes(reply.replyTo._id)
  // );

  // Create a map for quick lookup of replies by comment ID
  const repliesMap = replys?.reduce((acc, reply) => {
    if (reply.replyTo) {
      const commentId = reply.replyTo._id;
      if (!acc[commentId]) {
        acc[commentId] = [];
      }
      acc[commentId].push(reply);
    }
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
      <div className="mt-8 h-full w-full">
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
              <div className="mt-4">
                <button
                  className="text-blue-500"
                  onClick={() => openReplyModal(comment._id)}
                >
                  Reply
                </button>
              </div>
              <h1>Hello Replpy</h1>
              {/* Display Replies */}
              {repliesMap[comment?._id]?.length > 0 ? (
                <div className="mt-4 ml-10">
                  {repliesMap[comment._id].map((reply) => (
                    <div key={reply._id} className="p-4 border rounded mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            reply?.user?.avatar
                              ? `${SERVER}${reply.user.avatar.secure_url}`
                              : "/avatar.png"
                          }
                          alt=""
                          className="md:w-12 md:h-12 h-8 w-8 rounded-full"
                        />
                        <div>
                          <h4 className="font-bold">{reply?.user.name}</h4>
                          <p>
                            {new Date(reply?.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      {reply?.image?.secure_url ? (
                        <img
                          src={`${SERVER}${reply?.image?.secure_url}`}
                          alt=""
                          className="md:w-32 md:h-32 w-24 h-24 my-3"
                        />
                      ) : null}
                      <p className="mt-4">{reply.comment}</p>
                      {user && user._id === reply.user._id && (
                        <div>
                          <button
                            className="text-blue-500 mr-4"
                            onClick={() => openEditReplyModal(reply)}
                          >
                            <FiEdit />
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() => handleDeleteCommentOrReply(reply)}
                          >
                            <RiDeleteBin6Line />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <h1>Reply not found</h1>
              )}
              <h1>Hello</h1>
            </div>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>

      {/* Add Comment Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold mb-4">
            {editComment ? "Edit Comment" : "Add Comment"}
          </h2>
          <textarea
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
            className="textarea textarea-bordered w-full mb-4"
            rows="4"
            placeholder="Write your comment here..."
          ></textarea>
          <InputFileUpload
            setFile={setImages}
            image={image}
            id="edit_comment_image"
            name="Edit Comment Image"
          />
          <div className="modal-action">
            <PrimaryButton onClick={handleAddComment} value="Save" />
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      {/* Add Reply Modal */}
      <dialog id="my_reply_modal" className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold mb-4">
            {editReply ? "Edit Reply" : "Add Reply"}
          </h2>
          <textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            className="textarea textarea-bordered w-full mb-4"
            rows="4"
            placeholder="Write your reply here..."
          ></textarea>
          <InputFileUpload
            setFile={setImages}
            image={image}
            id="edit_reply_image"
            name="Edit Reply Image"
          />
          <div className="modal-action">
            <PrimaryButton onClick={handleAddReply} value="Save" />
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_reply_modal").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductComment;
