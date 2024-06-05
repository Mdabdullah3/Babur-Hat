import React from "react";

const Profile = () => {
  return (
    <section>
      <h1>My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h1>Full Name</h1>
          <h2>Md Abdullah</h2>
        </div>
        <div>
          <h1>Email Address</h1>
          <h2>abdullah@gmail.com</h2>
        </div>
        <div>
          <h1>Mobile</h1>
          <h2>0123456789</h2>
        </div>
        <div>
          <h1>Address</h1>
          <h2>Dhaka, Bangladesh</h2>
        </div>
        <div>
          <h1>Gender</h1>
          <h2>Male</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;
