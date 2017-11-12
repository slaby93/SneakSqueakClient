import styled, {css} from 'styled-components'
import { prop, ifProp } from 'styled-tools'

const StyledComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 16px;
  background-color: white;
  border-radius: 2px;
  border-color: #c1c1c1;
  padding: 10px;
  color:  ${prop('color', 'black')};
  background-color:  ${prop('bgColor', 'white')};
  height: 50px;
  box-shadow: 0px 1px 8px 1px #dedede;
  transition: all .05s linear;
  outline: none;
  &:active {
    box-shadow: 2px 2px 7px 0px #9e9d9d;
  }
  ${ifProp('grow', css`
      width: 100%;
  `)}

  ${ifProp('noBorder', css`
    border: none;
  `)}
`

export default StyledComponent
