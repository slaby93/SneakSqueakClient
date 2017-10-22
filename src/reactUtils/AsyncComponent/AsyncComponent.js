import React, { PureComponent } from 'react'

export default class AsyncComponent extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      Component: null
    }
  }

  componentWillMount () {
    if (!this.state.Component) {
      this.props.moduleProvider().then((Component) => {
        this.setState({ Component: Component.default })
        console.log('COMPONENT', Component.default)
      })
    }
  }

  render () {
    const { Component } = this.state

    // The magic happens here!
    return (
      <div>
        {Component ? <Component /> : <span>Loading</span>}
      </div>
    )
  }
};
