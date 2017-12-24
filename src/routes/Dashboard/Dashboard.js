import React from 'react';
import styled from 'styled-components';

export const Dashboard = ({ logout }) => {
  return (<div onClick={logout}>DASHBOARD</div>);
};

const StyledComponent = styled(Dashboard)`
`;

export default StyledComponent;
