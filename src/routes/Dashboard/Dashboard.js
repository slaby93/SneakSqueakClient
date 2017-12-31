import React from 'react';
import styled from 'styled-components';
import Map from 'components/special/Map';
import Header from 'components/layout/Header';

export const Dashboard = ({ className, logout }) => {
  return (
    <div className={className} >
      <Header />
      <Map />
    </div>
  );
};

const StyledComponent = styled(Dashboard)`
  display: grid;
  grid-template-rows: auto 100%;
  flex-grow: 1;
`;

export default StyledComponent;
