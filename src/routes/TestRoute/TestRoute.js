import React from 'react'
import {
  Link
} from 'react-router-dom'
export const TestRoute = () => {
  return <div>
    <span>TEST ROUTE</span>
    <Link to='/'>GO TO HOME </Link>
  </div>
}

export default TestRoute
