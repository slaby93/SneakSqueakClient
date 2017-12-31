import React from 'react';
import styled from 'styled-components';
import Map from './../../components/general/Map';

export const Dashboard = ({ className, logout }) => {
  return (
    <div className={className} >
      <Map />
    </div>
  );
};

const StyledComponent = styled(Dashboard)`
  display: flex;
  flex-grow: 1;
`;

export default StyledComponent;
