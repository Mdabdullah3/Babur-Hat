"use client";
import React, { useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password }
      );
      if (response.status === 200) {
        const userData = response.data;
        if (userData) {
          localStorage.setItem("user", JSON.stringify(userData));
          router.push("/");
          toast.success("Login successful");
        } else {
          toast.error("Login failed. User data not found.");
        }
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message || "Login failed. Please try again."
        );
      } else {
        toast.error("Login failed. Please try again.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <section>
      <p className="text-xl text-gray-600 text-center">Welcome Back</p>
      <div className="flex justify-center">
        <button
          className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          onClick={() => signIn("google")}
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
        <div className="mt-8">
          <PrimaryButton type="submit" value="Login" />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
