import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import DeviceGrid from '../DeviceGrid';
import axios from 'axios';
import iPhoneImg from '../../../../public/images/iphone.jpg';


const IPhones = () => {
  const [iphoneData, setiPhoneData] = useState([]);

  // Fetch iPhone data from server then set into state
  useEffect(() => {
    axios.get('http://localhost:8081/iphones/').then(res => setiPhoneData(res.data.data));
  }, []);

  return (
    <Fragment>
      <Heading level="h1">iPhones</Heading>
      <DeviceGrid deviceData={iphoneData} deviceImage={iPhoneImg} />
    </Fragment>
  );
}

export default IPhones;