import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Map from 'components/special/Map';
import Header from 'components/layout/Header';

export const Dashboard = ({ className, logout }) => {
  return (
    <div className={className} >
      <Header transparent />
      <Map />
    </div>
  );
};

const StyledComponent = styled(Dashboard)`
  display: grid;
  grid-template-areas: 
  "header"
  "body"
  "footer";
  grid-template-rows: auto 100%;
  flex-grow: 1;

  .mapboxgl-ctrl-top-right {
    top: ${prop('theme.components.header.height')}px;
  }

  ${Header} {
    grid-area: header;
  }

  ${Map} {
    margin-top: -${prop('theme.components.header.height')}px;
    grid-area: body;
  }
`;

export default StyledComponent;
