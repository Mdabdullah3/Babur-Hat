import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
const AuthSnap = () => {
  return (
    <div className="px-4 bg-info py-5 flex items-center justify-center w-80 rounded-2xl">
      <div>
        <div className="flex gap-3">
          <Link href="/auth/register">
            <button className="px-4 text-lg font-bold tracking-wider transition duration-300 bg-secondary text-white hover:bg-transparent hover:text-secondary py-3 rounded-full border-[1px] border-secondary">
              Register
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="px-4 text-lg font-bold tracking-wider transition duration-300 py-3 bg-white rounded-full hover:bg-secondary hover:text-white border-[1px] border-secondary">
              Sign In
            </button>
          </Link>
        </div>
        <h1 className="text-lg text-center my-3">Or Continue With </h1>
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <FcGoogle size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSnap;
