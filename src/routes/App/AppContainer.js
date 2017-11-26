import React from 'react'
import App from './App'
import {connect} from 'react-redux'

const AppContainer = (props) => {
  return <App {...props} />
}

function mapStateToProps (state) {
  const isRequesting = state.getIn(['users', 'isRequesting'])
  const users = state.getIn(['users', 'users'])

  return {
    isRequesting,
    users
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
