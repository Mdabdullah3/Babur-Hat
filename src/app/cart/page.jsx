import React from "react";
import Cart from "../../components/Cart/Cart";
import Navbar from "../../components/layout/Navbar";
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
      
      
    </div>
  );
};

export default page;
