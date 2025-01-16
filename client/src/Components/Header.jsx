import React from 'react';
import logo from '../logo-books.png';

const Header = () => {
  return (
    <header className="bg-darkerBlue py-5 flex items-center justify-center space-x-4 px-10">
      <h1 className="text-white text-4xl font-croissant tracking-wider">
        The Books Engine
      </h1>
      <img src={logo} className="h-12" alt="logo" />
    </header>
  );
};

export default Header;
