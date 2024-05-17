import React from 'react';
import Navbar from '../components/layout/Navbar';
import Banner from '../components/Home/Banner';
import Snap from "../components/Home/Snap/Snap"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Snap />
    </div>
  );
};

export default Home;