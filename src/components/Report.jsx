"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../store/userStore";
import { API_URL } from "../config";
import { toast } from "react-toastify";

const Report = () => {
  const { user, fetchUser } = useUserStore();

  const [formData, setFormData] = useState({
    user: "",
    title: "",
    message: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user?._id) {
      setFormData((prevData) => ({
        ...prevData,
        user: user._id,
      }));
    }
  }, [user]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/reports`, formData);
      toast.success("Report submitted:", response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error submitting report");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Submit a Report
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter report title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter a short summary"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter detailed description"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
