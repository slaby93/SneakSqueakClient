/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { App } from './../App'

test('<App/>', () => {
  const mountedComponent = shallow(<App />)
  expect(mountedComponent).toMatchSnapshot()
})
