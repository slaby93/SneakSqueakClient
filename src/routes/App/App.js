import React from 'react'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

export const App = class extends React.PureComponent {
  parseUsers (users) {
    return users && users.map((item) =>
      <p key={item.get('id')}>{item.get('name')}</p>
    )
  }

  render () {
    const { className, fetchUsers, isRequesting, users } = this.props
    return (
      <div>

      </div>
    )
  }
}

const StyledComponent = styled(App)`
background-color: pink;
`

export default StyledComponent
