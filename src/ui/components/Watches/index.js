import React, { Fragment, useState, useEffect } from 'react';
import Heading from '@tds/core-heading';
import TdsLink from '@tds/core-link';
import DeviceGrid from '../shared/DeviceGrid';
import axios from 'axios';
import watchImg from '../../../../public/images/watch.jpg';
import Link from '../shared/LinkWrapper';
import DeviceNotFound from '../shared/DeviceNotFound';
import BottomLink from '../shared/BottomLink';

// Mock for unit tests
// const watchImg = '';

const Watches = () => {
  const [watchData, setWatchData] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Fetch watch data from server then set into state
  useEffect(() => {
    axios.get("http://localhost:8081/watches/").then(res => {
      setWatchData(res.data.data);
      setFetching(false);
    }).catch(err => {
      console.log(err);
      setFetching(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="title-text">
        <Heading level="h1">Watches</Heading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
      {
        watchData.length === 0 && !fetching ? (
          <Fragment>
            <DeviceNotFound text="iPhones" />
            <BottomLink path={"/watches"} text={"Browse Watches"} />
          </Fragment>
        ) : !fetching ? (
          <Fragment>
            <DeviceGrid deviceData={watchData} deviceImage={watchImg} />
            <BottomLink path={"/iphones"} text={"Browse iPhones"} />
          </Fragment>
        ) : null
      }
    </Fragment>
  );
}

export default Watches;