import React from 'react'
import styled, {css} from 'styled-components'
import { Text } from 'react-form'
import { ifProp, prop } from 'styled-tools'

export const TextInputPair = ({className, error, id, label, ...props}) => {
  return (
    <div className={className}>
      <Text {...props} placeholder={label} field={id || label} id={id || label} />
    </div>
  )
}

const StyledComponent = styled(TextInputPair)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 2px;
  }

  &:after {
      content:'';
      margin-top: 5px;
      text-transform: capitalize;
      color: red;
  }

  input {
    font-size: 17px;
    height: 50px;
    border: 1px solid #dedede;
    border-radius: 1px;
    padding:0 10px;
    &::placeholder {
      color: #a9a9a9;
    }

    transition: all .5s ease-out;
  }

  ${ifProp('error', css`
      input {
        border-color: #ff5858;
        background-color: #ffefef;
        &::placeholder {
          color: #ff5858;
        }
      }
      &:after {
        content: '${prop('error')}';
      }
    `)}
`

export default StyledComponent
