import React from "react";
import Navbar from "../../components/layout/Navbar";
import DeafultProducts from "../../components/Home/DeafultProducts";
import WhishlistCard from "../../components/Wishlist/WishlistCard";
export const metadata = {
  title: "wishlist ",
  description: "wishlist section of Babur Hat",
};
const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <section>
        <WhishlistCard />
      </section>
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

export default Wishlist;
