import React, { Fragment } from 'react';
import Heading from '@tds/core-heading';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <Heading level="h1">Device Catalogue!</Heading>
      <Link to="/iphones">iPhones</Link>
      <Link to="/iphones">Watches</Link>
    </Fragment>
  )
};

export default Home;
