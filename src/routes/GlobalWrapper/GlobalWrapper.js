import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'themes/default';

export class GlobalWrapper extends React.Component {
  componentDidMount() {
    const { loadTokenToRedux } = this.props;
    loadTokenToRedux();
  }

  render() {
    const { className, children } = this.props;

    return <ThemeProvider theme={theme} className={className} >{children}</ThemeProvider>;
  }
}

const Styled = styled(GlobalWrapper)`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: white;
`;

export default Styled;
