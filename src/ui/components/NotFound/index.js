import React, { Fragment } from 'react';
import Heading from '@tds/core-heading';
import TdsLink from '@tds/core-link';
import Link from '../shared/LinkWrapper';

const NotFound = () => {
  return (
    <Fragment>
      <div className="title-text">
        <Heading level="h1">404</Heading>
      </div>
      <div className="info-text">
        <Heading level="h3">Whoops! Sorry, this page cannot be found</Heading>
        <Link TDSLink={TdsLink} to="/">Return to the Device Catalogue</Link>
      </div>
    </Fragment>
  );
}

export default NotFound;
