"use client";
import React, { useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", form);
      toast.success(
        "Registration successful! Please check your email for verification."
      );
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="px-4 py-3">
          <FcGoogle size={24} />
        </div>
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </h1>
      </a>
      <div className="divider text-gray-500 mt-4 text-sm uppercase">Or</div>
      <form
        className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <InputField
          label="Name"
          placeholder="Name"
          id="name"
          required
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <InputField
          label="Email Address"
          required
          placeholder="johnsnow@example.com"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <InputField
          label="Phone Number"
          required
          placeholder="XXX-XX-XXXX-XXX"
          value={form.phone}
          name="phone"
          onChange={handleChange}
        />
        <InputField
          label="Password"
          id="password"
          required
          placeholder="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          placeholder="confirm password"
          required
          value={form.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
        <PrimaryButton value={"Register"} />
      </form>
    </div>
  );
};

export default Register;
