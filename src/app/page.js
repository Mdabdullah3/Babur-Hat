import React from 'react';
import Banner from '../components/Home/Banner';
import Event from "../components/Home/Snap/Event"
import Category from "../components/Home/Category"
import RecomendedProducts from "../components/Home/RecomendedProducts"
import BestDeal from "../components/Home/BestDeal"
import DeafultProducts from "../components/Home/DeafultProducts"
import TopRated from "../components/Home/TopRated"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Event />
      <Category />
      <RecomendedProducts />
      <BestDeal />
      <DeafultProducts />
      <TopRated />
      <Footer />
    </div>
  );
};

export default Home;