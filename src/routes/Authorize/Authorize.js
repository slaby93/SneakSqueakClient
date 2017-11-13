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
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Authorize = ({className, match, location}) => {
  return (<div className={className}>
    <TransitionGroup>
      <CSSTransition
        classNames='fade-authorize'
        timeout={500}
        key={location.key}>
        <Switch location={location}>
          <Route exact path={`${match.url}/`} component={Welcome} />
          <Route exact path={`${match.url}/login`} component={Login} />
          <Route exact path={`${match.url}/register`} component={SignUp} />
          <Redirect to={`${match.url}/`} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>)
}

const StyledComponent = styled(Authorize)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  max-height: 100vh;
  overflow: hidden;
  @media screen and (orientation:landscape) {
    margin-top: 5%;
  }
`

export default StyledComponent
