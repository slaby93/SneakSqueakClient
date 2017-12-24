import React from 'react';
import { connect } from 'react-redux';
import Authorize from './Authorize';

export const AuthorizeContainer = (props) => {
  return (<Authorize {...props} />);
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeContainer);
