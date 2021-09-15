import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import ChevronLink from '@tds/core-chevron-link';
import TdsLink from '@tds/core-link';
import DeviceGrid from '../shared/DeviceGrid';
import axios from 'axios';
import iPhoneImg from '../../../../public/images/iphone.jpg';
import Link from '../shared/LinkWrapper';
import DeviceNotFound from '../shared/DeviceNotFound';

// Mock for unit tests
// const iPhoneImg = '';

const IPhones = () => {
  const [iphoneData, setIPhoneData] = useState([]);

  // Fetch iPhone data from server then set into state
  useEffect(() => {
    axios.get("http://localhost:8081/iphones/").then(res => setIPhoneData(res.data.data).catch(err => console.log(err)));
  }, []);

  return (
    <Fragment>
      <div className="title-text">
        <Heading level="h1">iPhones</Heading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
      {
        iphoneData.length === 0 ? (
          <DeviceNotFound text="iPhones" />
        ) : (
          <DeviceGrid deviceData={iphoneData} deviceImage={iPhoneImg} />
        )
      }
      <div className="bottom-link">
        <Link TDSLink={ChevronLink} to="/watches">Browse Watches</Link>
      </div>
    </Fragment>
  );
}

export default IPhones;