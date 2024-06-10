/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    avatar: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error for this field
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should be less than 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, phone, avatar } = form;
    const newErrors = {};
    const phoneRegex = /^(?:\+88|01)?\d{11}$/;

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!phoneRegex.test(phone))
      newErrors.phone = "Invalid phone number format for Bangladesh.";
    if (!avatar) newErrors.avatar = "Avatar is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error(
        newErrors.name ||
          newErrors.email ||
          newErrors.password ||
          newErrors.confirmPassword ||
          newErrors.phone ||
          newErrors.avatar
      );
      return false;
    }
    return true;
  };
  const handleRemoveAvatar = () => {
    setForm({ ...form, avatar: null });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await axios.post("http://localhost:8000/api/auth/register", form);
      toast.success(
        "Registration successful! Please check your email for verification."
      );
      router.push("/auth/login");
    } catch (error) {
      const errorData = error.response?.data;
      if (errorData.errors) {
        const fieldErrors = Object.keys(errorData.errors).reduce((acc, key) => {
          acc[key] = errorData.errors[key].message;
          return acc;
        }, {});
        setErrors(fieldErrors);
      }
      toast.error(
        errorData.message || "Registration failed. Please try again."
      );
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
          error={errors.name}
        />
        <InputField
          label="Email Address"
          required
          placeholder="johnsnow@example.com"
          value={form.email}
          name="email"
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          required
          placeholder="01XXXXXXXXX"
          value={form.phone}
          name="phone"
          onChange={handleChange}
          error={errors.phone}
        />
        <div className="relative">
          <InputField
            label="Password"
            id="password"
            required
            placeholder="password"
            value={form.password}
            name="password"
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            error={errors.password}
          />
          <div className="absolute top-12 right-0 flex items-center pr-3">
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(false)}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShowPassword(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="relative">
          <InputField
            label="Confirm Password"
            placeholder="confirm password"
            required
            value={form.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            type={showConfirmPassword ? "text" : "password"}
            error={errors.confirmPassword}
          />
          <div className="absolute top-12 right-0 flex items-center pr-3">
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowConfirmPassword(false)}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShowConfirmPassword(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        {form.avatar && (
          <div className="relative">
            <img
              src={form.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-md"
            />
            <button
              onClick={handleRemoveAvatar}
              className="absolute top-0 right-0 m-2 text-red-600 font-bold rounded-full p-1"
            >
              ×
            </button>
          </div>
        )}
        {!form.avatar && (
          <div>
            <label className="block font-mono text-secondary">Avatar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="block mt-1 file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>
        )}
        <PrimaryButton value={"Register"} />
      </form>
    </div>
  );
};

export default Register;
