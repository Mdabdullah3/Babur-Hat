import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import PieChart from "../../../components/Dashboard/Chart/PieChart";
import BarChart from "../../../components/Dashboard/Chart/BarChart";
const page = () => {
  return (
    <section className="grid grid-cols-4 gap-5 rounded-xl">
      <div className="mt-4 shadow-lg pl-2 h-64">
        <h1 className="text-gray-500 text-lg flex items-center font-bold pt-3">
          $ <span className="text-3xl text-black mr-2">56,9923</span>
          <span className="flex items-center bg-green-200 text-sm rounded-lg px-2 py-1 text-green-600">
            <AiOutlineArrowUp /> <span>+20%</span>
          </span>
        </h1>
        <h2 className="text-md text-gray-500">Expected Earning</h2>
        <div className="-mt-6">
          <PieChart />
        </div>
      </div>
      <div className="mt-4 shadow-lg pl-2 h-64 rounded-xl">
        <h1 className="text-gray-500 text-lg flex items-center font-bold pt-3">
          $ <span className="text-3xl text-black mr-2">56,9923</span>
          <span className="flex items-center bg-green-200 text-sm rounded-lg px-2 py-1 text-green-600">
            <AiOutlineArrowUp /> <span>+20%</span>
          </span>
        </h1>
        <h2 className="text-md text-gray-500">Average Daily Sale</h2>
        <div className="mt-10">
          <BarChart />
        </div>
      </div>
    </section>
  );
};

export default page;
