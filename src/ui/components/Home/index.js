import React, { Fragment } from 'react';
import Heading from '@tds/core-heading';
import iPhoneImg from '../../../../public/images/iphone.jpg';
import watchImg from '../../../../public/images/watch.jpg';
import PageLink from './PageLink';
import FlexGrid from '@tds/core-flex-grid';

// Mock for unit tests
// const iPhoneImg = '';
// const watchImg = '';

const Home = () => {
  // Page information to pass into the PageLink Component
  const pageInfo = [
    {
      image: iPhoneImg,
      path: "/iphones",
      altText: "Apple iPhone",
      linkText: "iPhones"
    },
    {
      image: watchImg,
      path: "/watches",
      altText: "Apple Watch",
      linkText: "Watches"
    }
  ];

  return (
    <Fragment>
      <div className="title-text">
        <Heading level="h1">TELUS Device Catalogue</Heading>
      </div>
      <div className="home-links">
        <div className="info-text">
          <Heading level="h3">Browse our Devices Below</Heading>
        </div>
        <FlexGrid limitWidth>
          <FlexGrid.Row>
            {
              pageInfo.map((page, index) => {
                const { image, path, linkText, altText } = page;
                return (
                  <FlexGrid.Col key={index} xs={12} sm={6}>
                    <PageLink
                      key={index}
                      image={image}
                      path={path}
                      linkText={linkText}
                      altText={altText}
                    />
                  </FlexGrid.Col>
                )
              })
            }
          </FlexGrid.Row>
        </FlexGrid>
      </div>
    </Fragment>
  )
};

export default Home;
