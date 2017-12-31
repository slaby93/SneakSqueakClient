import React, { PureComponent } from 'react';
import FullScreenLoader from './../../components/special/FullScreenLoader';

export default class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  componentWillMount() {
    if (!this.state.Component) {
      this.props.moduleProvider().then((Component) => {
        this.setState({ Component: Component.default });
      });
    }
  }

  render() {
    const { Component } = this.state;

    return (
      Component ? <Component {...this.props} /> : <FullScreenLoader />
    );
  }
}
