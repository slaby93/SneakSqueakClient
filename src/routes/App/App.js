import React from 'react'
import styled from 'styled-components'
import {
  Link,
  Route
} from 'react-router-dom'
import store from './../../store'
import { push } from 'react-router-redux'

export const App = class extends React.PureComponent {
  parseUsers (users) {
    return users && users.map((item) =>
      <p key={item.get('id')}>{item.get('name')}</p>
    )
  }

  render () {
    const { className } = this.props
    return (
      <div className={className}>
        <div>
          <button onClick={() => {
            store.dispatch(push('/testRoute'))
          }}>
          GO TO TEST
          </button>
          <button>
            <Link to='/b'>LINK TO B</Link>
          </button>
          <button>
            <Link to='/c'>LINK TO C</Link>
          </button>
        </div>

        <div />
        <Route path='/a' component={A} />
        <Route path='/b' component={B} />
        <Route path='/c' component={C} />
      </div>
    )
  }
}

const StyledComponent = styled(App)`
background-color: pink;
`

const A = () => {
  return <span>A</span>
}
const B = () => {
  return <span>B</span>
}
const C = () => {
  return <span>C</span>
}

export default StyledComponent
