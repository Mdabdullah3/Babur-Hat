import { FaRegStar, FaStar, FaStarHalfAlt, FaEye } from "react-icons/fa";
import ProductSizeSelector from "../../components/ProductDetails/ProductSizeSelector";
import { useState } from "react";
const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => setSelectedSize(size);

  return (
    <div className="col-span-3">
      <h2 className="bg-primary px-3 font-bold text-white tracking-wider w-14 py-1 rounded-sm">
        Sale
      </h2>
      <div className="flex items-center justify-between w-full mt-5">
        <h1 className="text-2xl font-bold capitalize tracking-wider">
          {product?.productName}
        </h1>
        <FaRegStar size={22} />
      </div>
      <h2 className="text-md text-orange-500 flex items-center mt-2">
        <FaStar /> <FaStar /> <FaStar /> <FaStar />
        <FaStarHalfAlt />
        <span className="text-black tracking-wider ml-2">(21 reviews)</span>
      </h2>
      <div className="flex items-center justify-between">
        <p className="leading-6 mt-4 text-lg font-[600] tracking-wider text-primary ">
          BDT <span className="text-2xl">{product?.sellPrice}.00</span>
          <span className="text-red-300 line-through ml-4 text-md font-normal">
            $45.00
          </span>
        </p>
      </div>
      <h2 className="flex items-center gap-3 tracking-wider mt-3">
        <FaEye size={18} /> <span className="font-bold">21</span> people are
        viewing this right now
      </h2>
      <h1 className="mt-2 font-bold tracking-wider">
        Size: <span className="font-normal">{selectedSize}</span>
      </h1>
      <ProductSizeSelector
        sizes={product?.size}
        selectedSize={selectedSize}
        onSizeClick={handleSizeClick}
      />
      <label htmlFor="" className="w-full text-md font-semibold">
        Quantity :
      </label>
      <div className="grid items-center grid-cols-4 mt-2 w-full gap-6">
        <div className="">
          <div className="relative flex flex-row w-full h-12 bg-transparent rounded-lg">
            <button className="w-20 h-full  bg-gray-200 rounded-l outline-none cursor-pointer hover:text-gray-700  hover:bg-gray-400">
              <span className="m-auto text-2xl font-thin">-</span>
            </button>

            <input
              type="number"
              className="flex items-center placeholder-black w-full font-semibold text-center   bg-gray-200 outline-none  text-md "
              placeholder="1"
            />

            <button className="w-20 h-full  bg-gray-200 rounded-r outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-400">
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <button className="w-full px-24 py-3 rounded-md border-[1px] hover:border-black border-primary bg-primary text-white tracking-wider uppercase hover:bg-black hover:text-white transition duration-500">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-5 mb-7">
        <button className="w-full py-3 rounded-md border-[1px] hover:border-primary border-black text-black tracking-wider uppercase hover:bg-primary hover:text-white transition duration-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
