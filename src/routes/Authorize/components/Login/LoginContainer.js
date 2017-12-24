import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import * as USER_ACTIONS from './../../../../ducks/user';

export const LoginContainer = (props) => {
  return (<Login {...props} />);
};

function mapStateToProps(state) {
  return {
    isLogging: state.getIn(['user', 'isLogging']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: ({ login, password }) => {
      dispatch(USER_ACTIONS.USERS_LOGIN_REQUEST({
        login,
        password,
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
