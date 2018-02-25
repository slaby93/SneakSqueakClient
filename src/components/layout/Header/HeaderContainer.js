import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './Header';

export class HeaderContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMobileMenuVisible: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    const { isMobileMenuVisible } = this.state;
    this.setState({
      isMobileMenuVisible: !isMobileMenuVisible,
    });
  }

  render() {
    const { isMobileMenuVisible } = this.state;

    return (<Header
      {...this.props}
      toggleMobileMenu={this.toggleMobileMenu}
      isMobileMenuVisible={isMobileMenuVisible}
    />);
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(styled(HeaderContainer)``);
