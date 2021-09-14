import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Text from '@tds/core-text';

const DeviceCard = ({ brand, name, price }) => {

  return (
    <Card fullHeight>
      <Box between={3}>
        <Heading level="h3">{brand}</Heading>
        <Text>
          {name}
        </Text>
        <Text>
          {price}
        </Text>
        <Text>
          TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes due upfront.
        </Text>
      </Box>
    </Card>
  )
}

export default DeviceCard;