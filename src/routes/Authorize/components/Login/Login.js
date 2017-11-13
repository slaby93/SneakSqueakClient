import React from 'react'
import styled from 'styled-components'
import Button from './../../../../components/general/Button'
import {NavLink} from 'react-router-dom'
import ShadowWrapper from './../../../../components/layout/ShadowWrapper'

export const Login = () => {
  return (
    <ShadowWrapper>
      <Button text>
        <NavLink to='/authorize'>
          <span>Go Back</span>
        </NavLink>
      </Button>
    </ShadowWrapper>
  )
}

const StyledComponent = styled(Login)`
`

export default StyledComponent
