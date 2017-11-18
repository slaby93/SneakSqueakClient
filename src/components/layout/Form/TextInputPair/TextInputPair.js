import React from 'react'
import styled, {css} from 'styled-components'
import { Text } from 'react-form'
import { ifProp } from 'styled-tools'

export const TextInputPair = ({className, error, label, ...props}) => {
  return (
    <div className={className}>
      <Text {...props} placeholder={label} field={label} id={label} />
    </div>
  )
}

const StyledComponent = styled(TextInputPair)`

  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 2px;
  }

  input {
    height: 50px;
    border: 1px solid #dedede;
    border-radius: 1px;
    padding:0 10px;
    &::placeholder {
      color: #a9a9a9;
    }
    transition: all .5s ease-out;
    ${ifProp('error', css`
      border-color: #ff5858;
      background-color: #ffefef;
      &::placeholder {
        color: #ff5858;
      }
    `)}
  }
`

export default StyledComponent
