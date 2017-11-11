import React from 'react'
import {connect} from 'react-redux'
import Authorize from './Authorize'

export const AuthorizeContainer = (props) => {
  return (<Authorize {...props} />)
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeContainer)
