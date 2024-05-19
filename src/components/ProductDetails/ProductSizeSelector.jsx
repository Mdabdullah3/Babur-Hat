import React from "react";

const ProductSizeSelector = ({ sizes, selectedSize, onSizeClick }) => {
  return (
    <div>
      <div className="flex gap-2 text-black mt-1 mb-1 w-8/12">
        {sizes?.map((sizeOption) => (
          <button
            key={sizeOption}
            onClick={() => onSizeClick(sizeOption)}
            className={`py-2 tracking-wide mb-2 mr-1 border w-full px-3 hover:bg-primary hover:text-white transition duration-500 ${
              selectedSize === sizeOption ? "text-white bg-primary" : ""
            }`}
          >
            {sizeOption}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizeSelector;
