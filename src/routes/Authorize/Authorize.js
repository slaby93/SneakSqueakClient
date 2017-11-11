import React from 'react'
import styled from 'styled-components'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import SignUp from './components/SignUp'

export const Authorize = ({className, match, location}) => {
  return (<div className={className}>
    <Switch location={location}>
      <Route exact path={`${match.url}/`} component={Welcome} />
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/register`} component={SignUp} />
      <Redirect to={`${match.url}/`} />
    </Switch>
  </div>)
}

const StyledComponent = styled(Authorize)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export default StyledComponent
