// components/Profile.js
"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import useUserStore from "../../store/userStore";
import InputField from "../common/InputField";
import InputFileUpload from "../common/InputFileUpload";
import SelectField from "../common/SelectField";
import { SERVER } from "../../config";

const Profile = () => {
  const { user, loading, error, fetchUser, updateUser } = useUserStore();
  console.log("user", user);
  const [avatar, setavatar] = useState(null);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
    },
    avatar: avatar,
    phone: "",
    gender: "",
  });

  useEffect(() => {
    setFormData((prevForm) => ({
      ...prevForm,
      avatar: avatar,
    }));
  }, [avatar]);
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        location: user.location,
        avatar: user.avatar,
        phone: user.phone || "",
        gender: user.gender || "",
      });
      setavatar(`${SERVER}${user?.avatar.secure_url}`);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const gender = ["Male", "Female", "Other"];
  console.log(formData);
  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };
  console.log(avatar);
  return (
    <form onSubmit={handleSubmit}>
      <InputFileUpload
        label="Profile Picture"
        name="ProfileImage"
        setFile={setavatar}
        file={avatar}
      />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <InputField
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <SelectField
            label="Gender"
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            options={gender.map((div, index) => ({
              value: div,
              label: div,
              key: index,
            }))}
            placeholder="Select Gender"
          />
          <InputField
            label="Address 1"
            id="address1"
            name="address1"
            value={formData.location.address1}
            onChange={handleLocationChange}
          />
          <InputField
            label="Address 2"
            id="address2"
            name="address2"
            value={formData.location.address2}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <InputField
            label="City"
            id="city"
            name="city"
            value={formData.location.city}
            onChange={handleLocationChange}
          />
          <InputField
            label="State"
            id="state"
            name="state"
            value={formData.location.state}
            onChange={handleLocationChange}
          />
          <InputField
            label="Postcode"
            id="postcode"
            name="postcode"
            value={formData.location.postcode}
            onChange={handleLocationChange}
          />
          <InputField
            label="Country"
            id="country"
            name="country"
            value={formData.location.country}
            onChange={handleLocationChange}
          />
        </div>
      </div>

      <PrimaryButton type="submit" value="Update Profile" />
    </form>
  );
};

export default Profile;
