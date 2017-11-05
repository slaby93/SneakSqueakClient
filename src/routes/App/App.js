import React from 'react'
import styled from 'styled-components'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'

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
          <button>
            <Link to='/a'>LINK TO A</Link>
          </button>
          <button>
            <Link to='/b'>LINK TO B</Link>
          </button>
          <button>
            <Link to='/c'>LINK TO C</Link>
          </button>
        </div>
        <div >
          <span> VALUE : </span> <br />
          <Switch>
            <Route exact path='/a' component={A} />
            <Route exact path='/b' component={B} />
            <Route exact path='/c' component={C} />
          </Switch>
        </div>
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
