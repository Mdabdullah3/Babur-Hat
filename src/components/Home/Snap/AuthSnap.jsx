"use client";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import useUserStore from "../../../store/userStore";
const AuthSnap = () => {
  const { user, fetchUser } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <div className="px-4 bg-info py-5 flex items-center justify-center w-80 rounded-2xl">
      <div>
        <div className="flex gap-3 justify-center">
          {user ? (
            <div className="">
              <Link href="/shop" className="flex justify-center">
                <button className="px-6 text-lg font-bold tracking-wider transition duration-300 py-2 bg-primary rounded-full hover:bg-secondary hover:text-white text-white border-[1px] hover:border-secondary border-primary">
                  Shop
                </button>
              </Link>
            </div>
          ) : (
            <Link href="/auth/login">
              <button className="px-4 text-lg font-bold tracking-wider transition duration-300 py-3 bg-white rounded-full hover:bg-secondary hover:text-white border-[1px] border-secondary">
                Sign In
              </button>
            </Link>
          )}
        </div>
        {user ? (
          <div className="mt-7 flex gap-2 mb-1">
            <Link href="/profile">
              <button className="px-4 text-md font-bold tracking-wider transition duration-300 py-2 bg-white rounded-full hover:bg-secondary hover:text-white border-[1px] border-secondary">
                My Orders
              </button>
            </Link>
            <Link href="/cart">
              <button className="px-4 text-lg font-bold tracking-wider transition duration-300 py-2 bg-white rounded-full hover:bg-secondary hover:text-white border-[1px] border-secondary">
                My Cart
              </button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-lg text-center my-3">Or Continue With </h1>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <FcGoogle size={35} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthSnap;
