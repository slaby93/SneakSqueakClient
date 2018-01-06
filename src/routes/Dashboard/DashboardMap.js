import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Map from 'components/special/Map';

export const DashboardMap = ({ className }) => {
  return (<Map className={className} />);
};

DashboardMap.propTypes = {
  className: PropType.string.isRequired,
};

const StyledComponent = styled(DashboardMap)`
    margin-top: -${prop('theme.components.header.height')}px;
    grid-area: body;
`;

export default StyledComponent;
