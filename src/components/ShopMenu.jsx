import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const ShopMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-medium ">{title}</h3>
        {isOpen ? (
          <FiMinus className="text-xl transition-all duration-500" />
        ) : (
          <FiPlus className="text-xl transition-all duration-500" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ShopMenu;
