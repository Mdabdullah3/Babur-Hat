/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const SuperDells = () => {
  return (
    <div className="bg-rose-200/60 px-6 py-4 rounded-2xl w-96">
      <h1 className="text-2xl text-primary font-bold mb-4">Super Dells</h1>
      <div className="bg-white rounded-2xl pb-2">
        <img
          src="https://ae01.alicdn.com/kf/S83c5ed2a2e684c16acc6d9943282401bm.jpg_480x480.jpg_.webp"
          className="rounded-2xl mx-auto w-60"
          alt="Super Dells"
        />
        <h1 className="text-primary text-md text-center">
          BDT <span className="text-2xl font-bold">23.00</span>
          <span className="bg-primary text-white px-1 py-1 text-lg rounded ml-1 ml-1">
            -20%
          </span>
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div>
            <img
              src="https://ae01.alicdn.com/kf/Sd20b194de16346a2a94b5266cce21f65v.jpg_480x480.jpg_.webp"
              className="w-36"
              alt="sd"
            />
            <h1 className="text-primary text-md text-center">
              BDT <span className="text-2xl font-bold">23.00</span>
              <span className="bg-primary text-white px-1 py-1 text-lg rounded ml-1">
                -20%
              </span>
            </h1>
          </div>
          <div>
            <img
              src="https://ae01.alicdn.com/kf/S28738cdae6b343fbb0bc833a1de001f8B.jpg_480x480.jpg_.webp"
              alt="sd"
              className="w-36"
            />
            <h1 className="text-primary text-md text-center">
              BDT <span className="text-2xl font-bold">23.00</span>
              <span className="bg-primary text-white px-1 py-1 text-lg rounded">
                -20%
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperDells;
