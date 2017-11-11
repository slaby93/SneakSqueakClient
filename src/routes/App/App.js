import React from 'react'
import styled from 'styled-components'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const App = class extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      showBlinker: false
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        showBlinker: !this.state.showBlinker
      })
    }, 3500)
  }

  parseUsers (users) {
    return users && users.map((item) =>
      <p key={item.get('id')}>{item.get('name')}</p>
    )
  }

  render () {
    const { className, location } = this.props
    const { showBlinker } = this.state
    return (
      <div className={className}>
        <CSSTransition
          classNames='blinker'
          timeout={3000}
          key={'blinker'}
          in={showBlinker}
          >
          <Blinker />
        </CSSTransition>
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

          <TransitionGroup>
            <CSSTransition
              classNames='fade'
              timeout={1000}
              key={location.key}>
              <Switch location={location}>
                <Route exact path='/a' component={A} />
                <Route exact path='/b' component={B} />
                <Route exact path='/c' component={C} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

const StyledComponent = styled(App)`
background-color: pink;
`

const Blinker = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 300px;
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
