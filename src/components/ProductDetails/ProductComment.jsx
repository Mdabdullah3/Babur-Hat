import React, { useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import useReviewStore from "../../store/reviewStore";
import useUserStore from "../../store/userStore";
const ProductComment = ({ productId, product }) => {
  const [newComments, setNewComments] = useState("");
  const { addReview } = useReviewStore();
  const { user, fetchUser } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, [productId, fetchUser]);
  const formdata = {
    product: productId,
    userId: user?._id,
    comment: newComments,
  };
  const handleAddReview = async () => {
    await addReview(formdata);
    setNewComments("");
  };
  return (
    <div>
      <div>
        <div className="my-6">
          <div>
            <h1 className="text-2xl font-[500] tracking-wider mb-7">
              Comment & Answer
            </h1>
            <p>0 Comment</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-5">
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Write Your Comments"
            value={newComments}
            onChange={(e) => setNewComments(e.target.value)}
          />
          <PrimaryButton onClick={handleAddReview} value={"Send"} />
        </div>
        <h1 className="mt-8 text-center text-xl tracking-wider">
          There are no Comment found.
        </h1>
      </div>
    </div>
  );
};

export default ProductComment;
