import React from 'react';
import { connect } from 'react-redux';
import GlobalWrapper from './GlobalWrapper';
import { USERS_TOKEN_LOAD } from './../../ducks/user';

export const GlobalWrapperContainer = (props) => {
  return (<GlobalWrapper {...props} />);
};

function mapDispatchToProps(dispatch) {
  return {
    loadTokenToRedux: () => {
      dispatch(USERS_TOKEN_LOAD());
    },
  };
}

export default connect(null, mapDispatchToProps)(GlobalWrapperContainer);
