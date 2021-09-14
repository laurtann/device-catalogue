import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import ChevronLink from '@tds/core-chevron-link';
import TdsLink from '@tds/core-link';
import DeviceGrid from '../DeviceGrid';
import axios from 'axios';
import watchImg from '../../../../public/images/watch.jpg';
import Link from '../LinkWrapper';
import DeviceNotFound from '../DeviceNotFound';

const Watches = () => {
  const [watchData, setWatchData] = useState([]);

  // Fetch watch data from server then set into state
  useEffect(() => {
    axios.get('http://localhost:8081/watches/').then(res => setWatchData(res.data.data));
  }, []);

  return (
    <Fragment>
      <div className="title-text">
        <Heading level="h1">Watches</Heading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
      {
        watchData.length === 0 ? (
          <DeviceNotFound text="watches" />
        ) : (
          <DeviceGrid deviceData={watchData} deviceImage={watchImg} />
        )
      }
      <div className="bottom-link">
        <Link TDSLink={ChevronLink} to="/iphones">Browse iPhones</Link>
      </div>
    </Fragment>
  );
}

export default Watches;