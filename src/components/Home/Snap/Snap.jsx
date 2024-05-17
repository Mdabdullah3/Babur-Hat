import React from "react";
import AuthSnap from "./AuthSnap";
import DellSnap from "./DellSnap";
import SuperDells from "./SuperDells";
import NewProductSnap from "./NewProductSnap";
import PlusSnap from "./PlusSnap";
const Snap = () => {
  return (
    <div className="flex gap-5 py-8 w-11/12 mx-auto">
      <div className="flex-col spcace-y-4">
        <AuthSnap />
        <DellSnap />
      </div>
      <div>
        <SuperDells />
      </div>
      <div className="flex flex-col gap-5">
        <NewProductSnap />
        <PlusSnap />
      </div>
    </div>
  );
};

export default Snap;
