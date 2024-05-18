import React from 'react';
import Navbar from '../components/layout/Navbar';
import Banner from '../components/Home/Banner';
import Snap from "../components/Home/Snap/Snap"
import Category from "../components/Home/Category"
import RecomendedProducts from "../components/Home/RecomendedProducts"
import BestDeal from "../components/Home/BestDeal"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Snap />
      <Category />
      <RecomendedProducts />
      <BestDeal />
    </div>
  );
};

export default Home;