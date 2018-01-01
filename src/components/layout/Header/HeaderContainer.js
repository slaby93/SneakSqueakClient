import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './Header';

export const HeaderContainer = (props) => {
  return (<Header {...props} />);
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleMobileMenu: () => {
      console.log('TOGGLE MOBILE MENU');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(styled(HeaderContainer)``);
