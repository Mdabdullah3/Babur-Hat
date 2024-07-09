/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/authStore";

const Register = () => {
  const router = useRouter();
  const { register, googleLogin, isLoading } = useAuthStore();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
    const { name, email, password, confirmPassword, avatar } = form;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!avatar) newErrors.avatar = "Avatar is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error(
        newErrors.name ||
          newErrors.email ||
          newErrors.password ||
          newErrors.confirmPassword ||
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
    await register(form);
  };

  return (
    <div className="w-full">
      <button
        onClick={googleLogin}
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="px-4 py-3">
          <FcGoogle size={24} />
        </div>
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </h1>
      </button>
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
        {form?.avatar ? (
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
        ) : (
          <InputField
            label="Avatar"
            type="file"
            name="avatar"
            onChange={handleAvatarChange}
            accept="image/*"
            required
            error={errors.avatar}
          />
        )}

        <PrimaryButton
          type="submit"
          className="mt-4"
          disabled={isLoading}
          value={`${isLoading ? "Loading..." : "Register"}`}
        />
      </form>
    </div>
  );
};

export default Register;
