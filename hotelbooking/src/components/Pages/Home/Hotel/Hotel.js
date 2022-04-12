import React from 'react';

const Hotel = ({ hotel }) => {
  const { name, location, rent, image } = hotel;

  return (
    <div>
      <img className="mb-3" src={image} alt={name} />
      <h2 className="text-l font-semibold">{name}</h2>

      <p>{location}</p>
      <p>$ {rent}</p>
    </div>
  );
};

export default Hotel;
