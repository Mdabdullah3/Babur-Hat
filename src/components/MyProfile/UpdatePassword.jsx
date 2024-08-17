import React, { useState } from "react";
import { toast } from "react-toastify";
import useUserStore from "../../store/userStore";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";

const UpdatePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const updatePassword = useUserStore((state) => state.updatePassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    await updatePassword(
      formData.currentPassword,
      formData.password,
      formData.confirmPassword
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8" autoComplete="off">
      <InputField
        label="Current Password"
        id="currentPassword"
        name="currentPassword"
        type={showCurrentPassword ? "text" : "password"}
        value={formData.currentPassword}
        onChange={handleChange}
        required
        showPassword={showCurrentPassword}
        toggleShowPassword={() => setShowCurrentPassword((prev) => !prev)}
        autoComplete="current-password" // Add this
      />
      <InputField
        label="New Password"
        id="password"
        name="password"
        type={showNewPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        required
        showPassword={showNewPassword}
        toggleShowPassword={() => setShowNewPassword((prev) => !prev)}
        autoComplete="new-password" // Add this
      />
      <InputField
        label="Confirm New Password"
        id="confirmPassword"
        name="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        showPassword={showConfirmPassword}
        toggleShowPassword={() => setShowConfirmPassword((prev) => !prev)}
        autoComplete="new-password" // Add this
      />
      <div className="mt-5">
        <PrimaryButton type="submit" value="Update Password" />
      </div>
    </form>
  );
};

export default UpdatePassword;
