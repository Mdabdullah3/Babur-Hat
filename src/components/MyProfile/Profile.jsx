// components/Profile.js
import React, { useEffect, useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import useUserStore from "../../store/userStore";
import InputField from "../common/InputField";
import InputFileUpload from "../common/InputFileUpload";
const Profile = () => {
  const { user, loading, error, fetchUser, updateUser } = useUserStore();
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
    avatar: null,
  });

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        location: user.location,
        avatar: user.avatar,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <form onSubmit={handleSubmit}>
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
      <InputFileUpload
        setSelectedFile={handleFileChange}
        label="Profile Picture"
        image={formData.avatar ? formData.avatar.secure_url : null}
      />
      <PrimaryButton type="submit" value="Update Profile" />
    </form>
  );
};

export default Profile;
