import React from 'react'
import styled from 'styled-components'

export class App extends React.PureComponent {
  parseUsers (users) {
    return users && users.map(({id, name}) =>
      <p key={id}>{name}</p>
    )
  }

  render () {
    const { className, fetchUsers, isRequesting, users } = this.props
    return <div>
      {isRequesting && <span>Loading ...</span>}
      {
        !isRequesting && <button
          onClick={fetchUsers}
          className={className}>
        FETCH USERS
        </button>
        }
      {
          !isRequesting && this.parseUsers(users)
        }
    </div>
  }
}

const StyledComponent = styled(App)`
background-color: red;
`

export default StyledComponent
