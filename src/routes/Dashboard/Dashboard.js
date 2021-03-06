import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Header from 'components/layout/Header';
import SVGIcon from 'components/special/SVGIcon';
import listIcon from 'resources/icons/list.svg';
import mapIcon from 'resources/icons/map.svg';
import DashboardList from './DashboardList';
import DashboardMap from './DashboardMap';

export const Dashboard = ({
  className,
  logout,
  onModeChange,
  mapMode,
  offers,
}) => {
  return (
    <div className={className} >
      <Header transparent />
      {
        mapMode
        ? <DashboardMap offers={offers} />
        : <DashboardList offers={offers} />
      }

      <IconWrapper
        onClick={onModeChange}
      >
        <SVGIcon size={60} src={mapMode ? listIcon : mapIcon} />
      </IconWrapper>
    </div>
  );
};

const IconWrapper = styled.div`
`;

const StyledComponent = styled(Dashboard)`
  display: grid;
  grid-template-areas: 
  "header"
  "body"
  "footer";
  grid-template-rows: auto 100%;
  flex-grow: 1;

  .mapboxgl-ctrl-top-right {
    z-index: 1;
    top: ${prop('theme.components.header.height')}px;
  }

  ${Header} {
    grid-area: header;
  }

  ${IconWrapper}{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    padding: 0;
  }
`;

export default StyledComponent;
