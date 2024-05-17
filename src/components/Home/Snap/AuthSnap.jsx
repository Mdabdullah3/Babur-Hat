import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoApple } from "react-icons/bi";
const AuthSnap = () => {
  return (
    <div className="px-4 bg-info py-5 flex items-center justify-center w-80 rounded-2xl">
      <div>
        <div className="flex gap-3">
          <button className="px-4 text-lg font-bold tracking-wider transition duration-300 bg-secondary text-white hover:bg-transparent hover:text-secondary py-3 rounded-full border-[1px] border-secondary">
            Register
          </button>
          <button className="px-4 text-lg font-bold tracking-wider transition duration-300 py-3 bg-white rounded-full hover:bg-secondary hover:text-white border-[1px] border-secondary">
            Sign In
          </button>
        </div>
        <h1 className="text-lg text-center my-3">Or Continue With </h1>
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <FcGoogle size={35} />
            <FaFacebook size={35} className="text-blue-900" />
            <AiFillTwitterCircle size={40} className="text-blue-500" />
            <h1 className="px-2 py-2 bg-black text-white rounded-full">
              <BiLogoApple size={22} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSnap;
