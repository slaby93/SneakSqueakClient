import React from 'react'
import {connect} from 'react-redux'
import SignUp from './SignUp'
import * as USER_ACTIONS from './../../../../ducks/user'

export const SignUpContainer = (props) => {
  return (<SignUp {...props} />)
}

function mapStateToProps (state) {
  return {
    isSigningUp: state.getIn(['user', 'isSigningUp'])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: (data) => {
      dispatch(USER_ACTIONS.USERS_SIGNUP_REQUEST(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
