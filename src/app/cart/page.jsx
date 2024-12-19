import React from "react";
import Cart from "../../components/Cart/Cart";
import Navbar from "../../components/layout/Navbar";
import DeafultProducts from "../../components/Home/DeafultProducts";
export const metadata = {
  title: "Cart - Ready How",
  description: "Cart section of Ready How",
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
      
    </div>
  );
};

export default page;
