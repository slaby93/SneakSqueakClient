import React from 'react'
import styled from 'styled-components'
import Button from './../../../../components/general/Button'
import {NavLink} from 'react-router-dom'

export const Login = () => {
  return (<div>Login

<Button text>
  <NavLink to='/authorize'>
    <span>Go Back</span>
  </NavLink>
</Button>
  </div>)
}

const StyledComponent = styled(Login)`
`

export default StyledComponent
