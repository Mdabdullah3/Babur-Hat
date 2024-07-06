"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import InputField from "../common/InputField";
import { API_URL } from "../../config";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/auth/forgot-password`, {
        email,
      });
      toast.success("Success! Check your email for further instructions.");
      router.push(`/auth/reset-password?token=${response.data.resetToken}`);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      <InputField
        label="Email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
