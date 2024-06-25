import React from "react";
import Navbar from "../../components/layout/Navbar";
import ProfileMenu from "../../components/MyProfile/ProfileMenu";
export const metadata = {
  title: "Profile - Babur Hat",
  description: "Profile section of Babur Hat",
};
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <ProfileMenu />
    </div>
  );
};

export default ProfilePage;
