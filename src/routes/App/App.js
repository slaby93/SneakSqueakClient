import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './../../components/elements/Button';
import Header from './../../components/elements/Header';

export const App = class extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Header>Sneak Squeak</Header>
        <Button>
          <Link to="/authorize">
            JOIN US NOW
          </Link>
        </Button>
      </div>
    );
  }
};

const StyledComponent = styled(App)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;

  margin-top: 5%;

  h1 {
    margin-bottom: 10%;
  }
`;

export default StyledComponent;
