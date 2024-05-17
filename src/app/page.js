import React from 'react';
import Navbar from '../components/layout/Navbar';
import Banner from '../components/Home/Banner';
import Snap from "../components/Home/Snap/Snap"
import Category from "../components/Home/Category"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Snap />
      <Category />
    </div>
  );
};

export default Home;