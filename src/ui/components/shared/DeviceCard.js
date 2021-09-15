import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Paragraph from '@tds/core-paragraph';
import PriceLockup from '@tds/core-price-lockup';
import Image from '@tds/core-image';
import HairlineDivider from '@tds/core-hairline-divider';

const DeviceCard = ({ brand, name, price, image }) => {
  return (
    <Card fullHeight>
      <Box between={4}>
        <Image
          id="device-card-img"
          src={image}
          alt={name}
          width={200}
        />
        <Heading level="h3" id="device-card-brand">{brand}</Heading>
        <Heading level="h4" id="device-card-name">
          {name}
        </Heading>
        <PriceLockup
          id="device-card-price"
          size="small"
          price={price}
        />
        <HairlineDivider />
        <Paragraph size="small">
          TELUS Easy Payment and Bring-It-Back applied.<br></br>Read legal footnote<br></br>Taxes due upfront.
        </Paragraph>
      </Box>
    </Card>
  )
}

export default DeviceCard;