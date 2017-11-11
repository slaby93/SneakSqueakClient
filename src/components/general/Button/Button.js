import React from 'react'
import styled, {css} from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

const StyledComponent = styled.button`
  border: 1px solid black;
  font-size: 16px;
  background-color: white;
  border-radius: 2px;
  padding: 10px;
  color:  ${prop('color', 'black')};
  background-color:  ${prop('bgColor', 'white')};
  height: 50px;

  ${ifProp(
    'grow',
    css`
      width: 100%;
    `
  )}
  ${ifProp(
    'noBorder',
    css`
    border: none;
    `
  )}
`

export default StyledComponent
