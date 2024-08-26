import React from "react";
import useUserStore from "../store/userStore";

const categories = ["Technology", "Health", "Finance", "Education", "Sports"]; // example categories

const SurveyModal = () => {
  const {
    isSurveyModalOpen,
    toggleSurveyModal,
    selectCategory,
    selectedCategories,
    submitSurvey,
  } = useUserStore();

  if (!isSurveyModalOpen) return null;

  return (
    <div className="fixed z-[100] inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Select Your Interests</h2>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <div
              key={category}
              className={`p-2 border rounded-md cursor-pointer ${
                selectedCategories.includes(category)
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => selectCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={submitSurvey}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/70"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyModal;
