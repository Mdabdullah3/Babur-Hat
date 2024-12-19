import React from "react";
import Navbar from "../../components/layout/Navbar";
import ProfileMenu from "../../components/MyProfile/ProfileMenu";
export const metadata = {
  title: "Profile - Ready How",
  description: "Profile section of Ready How",
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
