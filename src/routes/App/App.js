import React from 'react'
import styled from 'styled-components';

export class App extends React.PureComponent {
  render() {
    const { className } = this.props;
    return <span className={className}>App</span>
  }
}

const StyledComponent = styled(App) `
background-color: red;
`;

export default StyledComponent