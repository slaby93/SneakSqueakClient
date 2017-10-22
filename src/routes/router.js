import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import App from './App'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/a' component={() => <span>TEST</span>} />
      </Switch>
    </Router>
  )
}
