import React from 'react'
import { shallow } from 'enzyme'
import TextStyled, {TextInput} from './../Text'
import styledComponentsSerilizeHelper from './../../../../../utils/testing/styledComponentsSerilizeHelper'
styledComponentsSerilizeHelper(expect)

describe('<Text />', () => {
  test('styling', () => {
    const mountedComponent = shallow(<TextStyled
      className='test'>
      TEST
    </TextStyled>)
    expect(mountedComponent).toMatchSnapshot()
  }),

  test('HTML', () => {
    const mountedComponent = shallow(<TextInput
      className='test'>
      TEST
    </TextInput>)
    expect(mountedComponent).toMatchSnapshot()
  })
})