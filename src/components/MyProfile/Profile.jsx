import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import useAuthStore from "../../store/authStore";
const Profile = () => {
  const { user } = useAuthStore((state) => ({
    user: state.user,
  }));
  return (
    <section>
      <h1 className="text-3xl text-gray-700 mb-10 font-bold">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-5">
        <div>
          <h1 className="font-bold mb-1">Full Name</h1>
          <h2>{user?.data?.name}</h2>
        </div>
        <div>
          <h1 className="font-bold mb-1">Email Address</h1>
          <h2>{user?.data?.email}</h2>
        </div>
        <div>
          <h1 className="font-bold mb-1">Mobile</h1>
          <h2>0123456789</h2>
        </div>
        <div>
          <h1 className="font-bold mb-1">Address</h1>
          <h2>Dhaka, Bangladesh</h2>
        </div>
        <div>
          <h1 className="font-bold mb-1">Gender</h1>
          <h2>Male</h2>
        </div>
      </div>
      <div className="mt-10 w-48">
        <PrimaryButton value="Edit Profile" />
      </div>
    </section>
  );
};

export default Profile;
