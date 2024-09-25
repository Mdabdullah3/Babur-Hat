import React, { useEffect, useState } from "react";
import InputFileUpload from "./common/InputFileUpload";
import useReviewStore from "../store/reviewStore";
import useUserStore from "../store/userStore";
import { FaStar } from "react-icons/fa";

const AddReviewModal = ({ isOpen, onClose, product }) => {
  const { user, fetchUser } = useUserStore();
  const [image, setImage] = useState(null);
  const [newReview, setNewReview] = useState("");
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  const [currentValue, setCurrentValue] = useState(1);
  const stars = Array(5).fill(1);
  const { addReview } = useReviewStore();
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleAddReview = async () => {
    const formData = {
      product: product?.product?._id,
      userId: user?._id,
      review: newReview,
      image: image,
      rating: currentValue,
    };

    await addReview(formData, "Review Added Successfully");
    setNewReview("");
    onClose();
    setImage(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md md:w-[500px]">
        <h2 className="text-xl font-bold mb-4">
          Add Review for {product?.name}
        </h2>
        <section>
          <div className="flex items-center mb-4">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={30}
                color={currentValue > index ? "#fcd800" : "#d3d3d3"}
                onClick={() => handleClick(index + 1)}
                className="cursor-pointer"
              />
            ))}
          </div>
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Write..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <InputFileUpload label="Picture" name="image" setFile={setImage} />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleAddReview}
              className="btn text-white  btn-primary"
            >
              Submit Review
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddReviewModal;
