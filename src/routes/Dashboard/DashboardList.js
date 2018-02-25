import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import DashboardItem from './DashboardItem';

export const DashboardList = ({ className, offers }) => {
  const mappedOffers = offers.map(({ title, type, id }) => <DashboardItem key={id} title={title} type={type} />);

  return (
    <div className={className}>
      {mappedOffers}
    </div>
  );
};

const StyledComponent = styled(DashboardList)`
  background-color: ${prop('theme.color.gray')};
  padding-top: 10px;
  height: -webkit-fill-available;
  overflow: auto;
  padding-bottom: calc(${prop('theme.components.header.height')}px + 10px);
`;

export default StyledComponent;
