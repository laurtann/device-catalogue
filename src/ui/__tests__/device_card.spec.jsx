import React from 'react';
import renderer from 'react-test-renderer';
import DeviceCard from '../components/shared/DeviceCard';

describe('Device card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DeviceCard brand={"Apple"} name={"iPhone12"} price={121} image={''} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when not passed all props', () => {
    const tree = renderer
      .create(<DeviceCard brand={"Apple"} name={"iPhone12"} price={121} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});