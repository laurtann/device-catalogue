import React from 'react';
import DeviceGrid from '../components/shared/DeviceGrid';
import DeviceCard from '../components/shared/DeviceCard';
import { mount } from 'enzyme';

const testData = [
  {
    name: 'Apple Watch Series 6',
    brand: 'Apple',
    price: 529
  },
  {
    name: 'Apple Watch SE',
    brand: 'Apple',
    price: 369
  },
  {
    name: 'Apple Watch Series 3',
    brand: 'Apple',
    price: 259
  }
];

describe('Device grid', () => {
  it('displays the correct number of device cards', () => {
    const wrapper = mount(<DeviceGrid deviceData={testData} deviceImage={''} />);
    expect(wrapper.find(DeviceCard)).toHaveLength(testData.length);
  });
});