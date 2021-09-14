import React from 'react';
import FlexGrid from '@tds/core-flex-grid';
import DeviceCard from './DeviceCard';

const DeviceGrid = ({ deviceData, deviceImage }) => {

  return (
    <FlexGrid>
      <FlexGrid.Row>
        {
          deviceData.map((device, index) => {
            return (
              <FlexGrid.Col key={index} xs={12} md={4} className="grid-column">
                <DeviceCard brand={device.brand} name={device.name} price={device.price} image={deviceImage} />
              </FlexGrid.Col>
            )
          })
        }
      </FlexGrid.Row>
    </FlexGrid>
  )
}

export default DeviceGrid;