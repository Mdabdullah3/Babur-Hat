import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import {
  FaBangladeshiTakaSign,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHeart,
} from "react-icons/fa6";
import { FiShare2, FiCopy } from "react-icons/fi";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
import { FaFacebook } from "react-icons/fa";

const ProductShipInfo = ({
  product,
  selectedVariant,
  handleAddToWishlist,
  wishlist,
  handleRemoveFromWishlist,
}) => {
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [shareOpen, setShareOpen] = useState(false);

  console.log(quantity);
  const handleAddToCart = () => {
    if (selectedVariant?.quantity <= quantity) {
      toast.error("Product is out of stock");
      return;
    }
    const result = addToCart(product, selectedVariant, quantity);
    if (!result) {
      toast.error("Product already in cart");
    } else {
      toast.success("Product added to cart");
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleSocialShare = (platform) => {
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this product: ${product.name}`);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div className="shadow-lg hidden lg:block px-5 py-4 bg-white col-span-2 rounded-2xl border border-gray-300">
      <h1 className="flex items-center justify-between font-bold">
        Ship to{" "}
        <span className="flex items-center gap-1 font-normal">
          <CiLocationOn /> Bangladesh
        </span>
      </h1>
      <hr className="my-4" />
      <h1 className="font-bold mb-2 flex items-center justify-between">
        Standard Delivery{" "}
        <span className="flex items-center gap-1 font-normal">
          <FaBangladeshiTakaSign size={21} /> 60
        </span>
      </h1>
      <h1>Estimated delivery on Jul 18 </h1>
      <h1 className="mt-2 font-bold">Cash on Delivery Available</h1>
      <hr className="my-4" />
      <label htmlFor="" className="w-full text-md font-semibold mt-2">
        Quantity :
      </label>
      <div className="relative flex item-center bg-transparent rounded-lg my-3 mb-5 w-32">
        <button
          onClick={handleDecreaseQuantity}
          className="px-2 text-white rounded-full bg-primary/80 text-2xl font-bold "
        >
          -
        </button>
        <input
          className="flex items-center placeholder-black w-full font-semibold text-center outline-none text-md"
          value={quantity}
          readOnly
        />
        <button
          onClick={handleIncreaseQuantity}
          className="px-1 text-white rounded-full bg-primary/80 text-2xl font-bold ml-4"
        >
          +
        </button>
      </div>
      {selectedVariant?.quantity > 0 ? (
        <button
          onClick={handleAddToCart}
          className="w-full font-bold py-3 rounded-full my-2 bg-primary text-white tracking-wider hover:bg-primary/70 transition duration-500"
        >
          Add To Cart
        </button>
      ) : (
        <button
          disabled
          className="w-full font-bold py-3 rounded-full my-2 bg-primary text-white tracking-wider"
        >
          Add To Cart
        </button>
      )}
      <div
        className="relative grid grid-cols-3 items-center gap-2 mt-2"
        onMouseEnter={() => setShareOpen(true)}
        onMouseLeave={() => setShareOpen(false)}
      >
        <button className="w-full font-bold py-3 rounded-full my-2 bg-primary/20 justify-center hover:border-primary col-span-2 flex items-center gap-2 text-primary tracking-wider hover:bg-primary hover:text-white transition duration-500 relative">
          <FiShare2 /> Share
        </button>
        {shareOpen && (
          <div className="absolute top-14 items-center gap-5 flex left-0 bg-white shadow-lg rounded-lg p-4 z-10">
            <button
              onClick={() => handleSocialShare("facebook")}
              className="flex items-center gap-2 py-2 text-blue-600  rounded-full"
            >
              <FaFacebook size={28} />
            </button>
            <button
              onClick={() => handleSocialShare("twitter")}
              className="flex items-center gap-2 py-2 text-blue-400"
            >
              <FaTwitter size={28} />
            </button>
            <button
              onClick={() => handleSocialShare("instagram")}
              className="flex items-center gap-2 py-2 text-pink-500"
            >
              <FaInstagram size={28} />
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 py-2 text-gray-600"
            >
              <FiCopy size={28} />
            </button>
          </div>
        )}
        {wishlist?.find((item) => item._id === product._id) ? (
          <h1
            onClick={() => handleRemoveFromWishlist(product._id)}
            className="tooltip tooltip-left border rounded-full py-3 px-5 mx-auto border-primary text-primary cursor-pointer"
            data-tip="Remove From Wishlist"
          >
            <FaHeart size={22} />
          </h1>
        ) : (
          <h1
            onClick={handleAddToWishlist}
            className="tooltip tooltip-left border rounded-full py-3 px-5 mx-auto border-primary text-primary cursor-pointer"
            data-tip="Add To Wishlist"
          >
            <GoHeart size={22} />
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductShipInfo;
