import React, { useState, useEffect } from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('hotels.json')
      .then(res => res.json())
      .then(data => setHotels(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-3">Explore Bangladesh</h2>
        <p>These popular destinations have a lot to offer</p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {hotels.map(hotel => (
          <Hotel key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
