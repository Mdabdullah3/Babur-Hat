import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../config";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.currentPassword)
      newErrors.currentPassword = "Current password is required";
    if (!formData.password) newErrors.password = "New password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.patch(
        `${API_URL}/update-password`,
        formData,
        {
          withCredentials: true,
        }
      );
      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error("Failed to update password.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <InputField
        label="Current Password"
        id="currentPassword"
        name="currentPassword"
        type="password"
        value={formData.currentPassword}
        onChange={handleChange}
        required
        error={errors.currentPassword}
      />
      <InputField
        label="New Password"
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        error={errors.password}
      />
      <InputField
        label="Confirm New Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        error={errors.confirmPassword}
      />
      <PrimaryButton type="submit" value="Update Password" />
    </form>
  );
};

export default UpdatePassword;
