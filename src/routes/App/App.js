import React from 'react'
import styled from 'styled-components'
import Button from './../../components/general/Button'
import {Link} from 'react-router-dom'

export const App = class extends React.PureComponent {
  render () {
    const { className } = this.props
    return (
      <div className={className}>
        <Button>
          <Link to='/authorize'>
          AUTHORIZE
          </Link>
        </Button>
      </div>
    )
  }
}

const StyledComponent = styled(App)`
`
export default StyledComponent
