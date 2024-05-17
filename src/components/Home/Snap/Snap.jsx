import React from "react";
import AuthSnap from "./AuthSnap";
import DellSnap from "./DellSnap";
const Snap = () => {
  return (
    <div className="grid grid-cols-3 px-5 py-5">
      <div className="flex-col spcace-y-4">
        <AuthSnap />
        <DellSnap />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Snap;
