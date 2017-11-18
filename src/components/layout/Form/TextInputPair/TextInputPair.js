import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-form'

export const TextInputPair = ({className, label}) => {
  return (
    <div className={className}>
      <Text placeholder={label} field={label} id={label} />
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

  label {
    margin-right: 10px;
    margin-bottom: 5px;
    font-weight: 400;
  }

  input {
    height: 50px;
    border: 1px solid #dedede;
    border-radius: 1px;
    padding:0 10px;
    &::placeholder {
      color: #a9a9a9;
    }
  }
`

export default StyledComponent
