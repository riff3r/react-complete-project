import React from 'react';

const Banner = () => {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl mb-5">A lifetime of discounts? It's Genius.</h1>

        <p className="text-xl mb-5">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Booking.com account
        </p>

        <button className="bg-sky-600 px-5 py-3 rounded-sm font-bold">
          Sign in / Register
        </button>
      </div>
    </section>
  );
};

export default Banner;
