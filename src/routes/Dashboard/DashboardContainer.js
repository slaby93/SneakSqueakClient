import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { USERS_LOGOUT } from './../../ducks/user';

export const DashboardContainer = (props) => {
  return (<Dashboard {...props} />);
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(USERS_LOGOUT());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);