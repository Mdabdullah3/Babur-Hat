import React from "react";

const ProductSizeSelector = ({ sizes, selectedSize, onSizeClick }) => {
  return (
    <div>
      <div className="flex gap-2 text-black mt-1 mb-1">
        <button
          key={sizes}
          onClick={() => onSizeClick(sizes)}
          className={`py-2 tracking-wide mb-2 mr-1 border w-full px-3 hover:bg-primary hover:text-white transition duration-500 ${
            selectedSize === sizes ? "text-white bg-primary" : ""
          }`}
        >
          {sizes}
        </button>
      </div>
    </div>
  );
};

export default ProductSizeSelector;
