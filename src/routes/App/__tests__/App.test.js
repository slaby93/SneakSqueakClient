/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './../App';

describe('<App/>', () => {
  test('basic render', () => {
    const mountedComponent = shallow(<App />);
    expect(mountedComponent).toMatchSnapshot();
  });
});
