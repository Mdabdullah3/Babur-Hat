import React from "react";
import Cart from "../../components/Cart/Cart";
import Navbar from "../../components/layout/Navbar";
import DeafultProducts from "../../components/Home/DeafultProducts";
export const metadata = {
  title: "Cart - Babur Hat",
  description: "Cart section of Babur Hat",
};
const page = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Cart />
      </section>
      <hr className="my-4" />
      <section>
        <div className="w-11/12 mx-auto">
          <h1 className="text-md lg:text-2xl my-4 font-bold">
            Related Products
          </h1>
        </div>
        <DeafultProducts />
      </section>
      <section className="flex lg:hidden border-t gap-4 border-gray-200 p-2 bg-white sticky bottom-0 w-full justify-between items-center ">
        <button className="w-full  py-2 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 text-sm font-bold">
          Check Out
        </button>
      </section>
    </div>
  );
};

export default page;
