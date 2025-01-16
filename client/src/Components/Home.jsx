import React from 'react';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import '../Home.css';

const Home = () => {
  return (
    <div className="bg-babyBlue min-h-screen flex flex-col">
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
