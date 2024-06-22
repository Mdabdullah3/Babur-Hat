import React from "react";
import Navbar from "../../components/layout/Navbar";
import DeafultProducts from "../../components/Home/DeafultProducts";
import Whishlist from "../../components/Wishlist/Wishlist";
export const metadata = {
  title: "Wishlist - Babur Hat",
  description: "Wishlist section of Babur Hat",
};
const WishlistPage = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Whishlist />
      </section>
      <section>
        <DeafultProducts />
      </section>
    </div>
  );
};

export default WishlistPage;
