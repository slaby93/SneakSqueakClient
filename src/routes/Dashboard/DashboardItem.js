import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import SVGIcon from 'components/special/SVGIcon';
import { ICONS, COLORS } from 'consts/disciplines';

export const DashboardItem = ({ className, title, type }) => {
  const icon = ICONS[type] || ICONS.UNKONWN;

  return (
    <div className={className}>
      <Title>{title}</Title>
      <IconWrapper>
        <SVGIcon size={40} src={icon} />
      </IconWrapper>
    </div>
  );
};

const Title = styled.span`
  margin-left: 10px;
`;

const IconWrapper = styled.div`
  height: -moz-available;
  height: -webkit-fill-available;
  width: 60px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledComponent = styled(DashboardItem)`
  --beforeWidth: 10px;

  background-color: #ffffff;
  width: 90%;
  margin-left: calc(var(--beforeWidth) + 10px);
  margin-bottom: 8px;
  border-radius: 3px;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:before {
    --radius: 3px;
    content: '';
    position: absolute;
    left: calc(var(--beforeWidth) * -1);
    top: 0;
    height: 60px;
    width: var(--beforeWidth);
    background-color: ${props => COLORS[props.type] || COLORS.UNKONWN};
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
`;

export default StyledComponent;
