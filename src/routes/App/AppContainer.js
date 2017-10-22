import React from 'react'
import App from './App'
import {connect} from 'react-redux'
import {FETCH_USERS_REQUEST} from './../../ducks/users'

const AppContainer = (props) => {
  return <App {...props} />
}

function mapStateToProps ({users: {isRequesting, users}}) {
  return {
    isRequesting,
    users
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUsers: () => {
      dispatch(FETCH_USERS_REQUEST())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
