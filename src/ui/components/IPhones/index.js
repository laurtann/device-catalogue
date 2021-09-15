import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import TdsLink from '@tds/core-link';
import DeviceGrid from '../shared/DeviceGrid';
import axios from 'axios';
import iPhoneImg from '../../../../public/images/iphone.jpg';
import Link from '../shared/LinkWrapper';
import DeviceNotFound from '../shared/DeviceNotFound';
import BottomLink from '../shared/BottomLink';

// Mock for unit tests
// const iPhoneImg = '';

const IPhones = () => {
  const [iphoneData, setIPhoneData] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Fetch iPhone data from server then set into state
  useEffect(() => {
    axios.get("http://localhost:8081/iphones/").then(res => {
      setIPhoneData(res.data.data);
      setFetching(false);
    }).catch(err => {
      console.log(err);
      setFetching(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="title-text">
        <Heading level="h1">iPhones</Heading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
      {
        iphoneData.length === 0 && !fetching ? (
          <Fragment>
            <DeviceNotFound text="iPhones" />
            <BottomLink path={"/watches"} text={"Browse Watches"} />
          </Fragment>
        ) : !fetching ? (
          <Fragment>
            <DeviceGrid deviceData={iphoneData} deviceImage={iPhoneImg} />
            <BottomLink path={"/watches"} text={"Browse Watches"} />
          </Fragment>
        ) : null
      }
    </Fragment>
  );
}

export default IPhones;