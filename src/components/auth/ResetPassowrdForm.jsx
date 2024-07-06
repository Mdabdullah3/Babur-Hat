"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import InputField from "../common/InputField";
import { API_URL } from "../../config";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { token } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.patch(`${API_URL}/auth/reset-password`, {
        resetToken: token,
        password,
        confirmPassword,
      });
      toast.success(
        "Password reset successfully. You can now log in with your new password."
      );
      router.push("/auth/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
      <InputField
        label="New Password"
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your new password"
        required
      />
      <InputField
        label="Confirm New Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your new password"
        required
      />
      <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ResetPasswordForm;
