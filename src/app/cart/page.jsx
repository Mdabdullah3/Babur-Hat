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
      <section>
        <DeafultProducts />
      </section>
      <section className="flex lg:hidden border-t gap-4 border-gray-200 p-2 bg-white sticky bottom-0 w-full justify-between items-center ">
        <button className="w-full my-2 py-3 rounded-full border hover:border-black border-primary bg-primary text-white tracking-wider  hover:bg-black hover:text-white transition duration-500 text-sm font-bold">
          Add To Cart
        </button>
        <button className="w-full py-3 rounded-full my-2 border-[1px] hover:border-primary border-black text-black tracking-wider  hover:bg-primary hover:text-white transition duration-500 font-bold">
          Buy Now
        </button>
      </section>
    </div>
  );
};

export default page;
