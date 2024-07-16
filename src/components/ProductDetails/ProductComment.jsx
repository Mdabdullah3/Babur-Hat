import React from "react";
import PrimaryButton from "../common/PrimaryButton";
const ProductComment = () => {
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
            placeholder="Your review"
          />
          <PrimaryButton value={"Send"} />
        </div>
        <h1 className="mt-8 text-center text-xl tracking-wider">
          There are no Comment found.
        </h1>
      </div>
    </div>
  );
};

export default ProductComment;
