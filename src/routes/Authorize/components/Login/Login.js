import React from 'react'
import styled from 'styled-components'
import Button from './../../../../components/general/Button'
import {NavLink} from 'react-router-dom'

export const Login = ({className}) => {
  return (
    <Button text className={className}>
      <NavLink to='/authorize'>
        <span>Go Back</span>
      </NavLink>
    </Button>
  )
}

const StyledComponent = styled(Login)`
  width:300px;
  height: 400px; 
`

export default StyledComponent
