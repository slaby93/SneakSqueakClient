import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import localStorageManager from './../utils/localStorageManager';

export const ProtectedRoute = ({
  isLoggedIn, component: Component, ...rest
}) => {
  const getProperComponent = (props) => {
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return <Component {...rest} {...props} />;
  };

  return <Route {...rest} render={getProperComponent} />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  const token = state.getIn(['user', 'token']) || localStorageManager.get('token');

  return {
    isLoggedIn: !!token,
  };
}

export function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
