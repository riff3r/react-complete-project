import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="  bg-blue-800">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center text-white">
          <h2 className="text-2xl font-bold">HotelBooking.com</h2>

          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
