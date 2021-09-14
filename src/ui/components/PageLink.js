import React from 'react';
import TdsLink from '@tds/core-link';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Image from '@tds/core-image';
import Link from './LinkWrapper';

const PageLink = ({ image, path, linkText, altText }) => {
  return (
    <Card variant="defaultOnlyBorder">
      <Box between={3} className="page-links">
        <Image
          src={image}
          alt={altText}
          width={70}
        />
        <div>
          <Link TDSLink={TdsLink} to={path}>
            {linkText}
          </Link>
        </div>
      </Box>
    </Card>
  )
}

export default PageLink;