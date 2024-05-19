import React from 'react';
import Banner from '../components/Home/Banner';
import Snap from "../components/Home/Snap/Snap"
import Category from "../components/Home/Category"
import RecomendedProducts from "../components/Home/RecomendedProducts"
import BestDeal from "../components/Home/BestDeal"
import DeafultProducts from "../components/Home/DeafultProducts"
import TopRated from "../components/Home/TopRated"
const Home = () => {
  return (
    <div>
      <Banner />
      <Snap />
      <Category />
      <RecomendedProducts />
      <BestDeal />
      <DeafultProducts />
      <TopRated />
    </div>
  );
};

export default Home;