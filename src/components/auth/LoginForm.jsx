"use client";
import React, { useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

      console.log("Login response:", response); // Log the entire response

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
  );
};

export default LoginForm;
