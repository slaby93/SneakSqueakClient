import React from 'react'
import {
  Route
} from 'react-router-dom'

import App from './App'
import TestRoute from './TestRoute'

export default () => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route path='/testRoute' component={TestRoute} />
    </div>
  )
}
