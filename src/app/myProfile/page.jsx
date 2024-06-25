import React from "react";
import Navbar from "../../components/layout/Navbar";
import ProfileMenu from "../../components/MyProfile/ProfileMenu";
export const metadata = {
  title: "Profile - Babur-Hat",
  description: "My Profile Page",
  keywords: "My Profile Page, Babur-Hat",
};
const MyProfile = () => {
  return (
    <div>
      <Navbar />
      <ProfileMenu />
    </div>
  );
};

export default MyProfile;
