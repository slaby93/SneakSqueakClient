import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const App = ({ className }) => {
  return <div className={className}>
    <span>Test</span>
  </div>;
}

const StyledComponent = styled(App) `
  background-color: blue;
`;

ReactDOM.render(<StyledComponent />, document.getElementById('app'));