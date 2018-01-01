import { connect } from 'react-redux';
import React from 'react';
import App from './App';

const AppContainer = (props) => {
  return <App {...props} />;
};

function mapStateToProps(state) {
  const isRequesting = state.getIn(['users', 'isRequesting']);
  const users = state.getIn(['users', 'users']);

  return {
    isRequesting,
    users,
  };
}

export default connect(mapStateToProps)(AppContainer);
