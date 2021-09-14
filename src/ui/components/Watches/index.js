import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import DeviceGrid from '../DeviceGrid';
import axios from 'axios';
import watchImg from '../../../../public/images/watch.jpg';


const Watches = () => {
  const [watchData, setWatchData] = useState([]);

  // Fetch watch data from server then set into state
  useEffect(() => {
    axios.get('http://localhost:8081/watches/').then(res => setWatchData(res.data.data));
  }, []);

  return (
    <Fragment>
      <Heading level="h1">Watches</Heading>
      <DeviceGrid deviceData={watchData} deviceImage={watchImg} />
    </Fragment>
  );
}

export default Watches;