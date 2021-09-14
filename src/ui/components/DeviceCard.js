import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Text from '@tds/core-text';
import PriceLockup from '@tds/core-price-lockup';
import Image from '@tds/core-image';

const DeviceCard = ({ brand, name, price, image }) => {
  const text = 'TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes due upfront.';

  return (
    <Card fullHeight>
      <Box between={3}>
        <Image
          src={image}
          alt={name}
        />
        <Heading level="h3">{brand}</Heading>
        <Text>
          {name}
        </Text>
        <PriceLockup
          size="small"
          price={price}
        />
        <Text>
          {text}
          <sup>3</sup>
        </Text>
      </Box>
    </Card>
  )
}

export default DeviceCard;