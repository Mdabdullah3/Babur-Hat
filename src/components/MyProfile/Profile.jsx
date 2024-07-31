"use client";
import { useEffect, useState } from "react";
import useUserStore from "../../store/userStore";
import InputFileUpload from "../common/InputFileUpload";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import PrimaryButton from "../common/PrimaryButton";
import { SERVER } from "../../config";
import { toDataURL } from "../../utils/DataUrl";

const Profile = () => {
  const { user, fetchUser, updateUser } = useUserStore();
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: {
      address1: user?.location.address1 || "",
      address2: user?.location.address2 || "",
      city: user?.location.city || "",
      state: user?.location.state || "",
      postcode: user?.location.postcode || "",
      country: user?.location.country || "",
    },
    avatar: null,
    phone: user?.phone || "",
    gender: user?.gender || "",
  });

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user?.avatar?.secure_url) {
      const avatarUrl = `${SERVER}${user.avatar.secure_url}`;
      toDataURL(avatarUrl).then((base64) => {
        setAvatar(base64);
        setFormData((prevData) => ({
          ...prevData,
          avatar: base64,
        }));
      });
    }
  }, [user?.avatar?.secure_url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
    setFormData((prevData) => ({
      ...prevData,
      avatar: newAvatar,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputFileUpload
        label="Profile Picture"
        name="avatar"
        setFile={handleAvatarChange} 
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
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" },
            ]}
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
