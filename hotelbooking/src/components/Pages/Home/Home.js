import React, { Fragment } from 'react';
import Banner from './Banner/Banner';
import Hotels from './Hotels/Hotels';
import Rooms from './Rooms/Rooms';

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Hotels />
    </Fragment>
  );
};

export default Home;
