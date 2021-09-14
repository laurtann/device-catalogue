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
              <FlexGrid.Col key={index} xs={12} md={3}>
                <DeviceCard brand={device.brand} name={device.name} price={device.price} />
              </FlexGrid.Col>
            )
          })
        }
        <FlexGrid.Col xs={12} md={3}>
          <DeviceCard />
        </FlexGrid.Col>
        <FlexGrid.Col xs={12} md={3}>
          <DeviceCard />
        </FlexGrid.Col>
        <FlexGrid.Col xs={12} md={3}>
          <DeviceCard />
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  )
}

export default DeviceGrid;