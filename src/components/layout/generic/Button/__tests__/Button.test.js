import React from 'react'
import { shallow } from 'enzyme'
import Button from './../Button'
import styledComponentsSerilizeHelper from './../../../../../utils/testing/styledComponentsSerilizeHelper'
styledComponentsSerilizeHelper(expect)

describe('<Button />', () => {
  test('styling', () => {
    const mountedComponent = shallow(<Button
      group={'1'}
      value={'a'}
      field={'test'}
      className='test'>
      TEST
    </Button>)
    expect(mountedComponent).toMatchSnapshot()
  })
})