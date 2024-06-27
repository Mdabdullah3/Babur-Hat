"use client";
import React, { useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import useAuthStore from "../../store/authStore";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, googleLogin } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password, router);
    } catch (error) {
      toast.error("Failed to login. Please try again.");
    }
  };

  return (
    <section>
      <p className="text-xl text-gray-600 text-center">Welcome Back</p>
      <div className="flex justify-center">
        <button
          className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          onClick={googleLogin}
        >
          <div className="px-4 py-3">
            <FcGoogle size={24} />
          </div>
          <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
            Sign in with Google
          </h1>
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>
        <a href="#" className="text-xs text-center text-gray-500 uppercase">
          or login with email
        </a>
        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <InputField
            label="Email"
            placeholder="Enter Email"
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <InputField
            label="Password"
            placeholder="Enter Password"
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-2 flex justify-end">
          <h1 className="text-sm underline">Forgot Password?</h1>
        </div>
        <div className="mt-5">
          <PrimaryButton type="submit" value="Login" disabled={isLoading} />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
