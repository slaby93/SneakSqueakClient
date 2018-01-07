import React from 'react';
import styled from 'styled-components';
import SVGIcon from 'components/special/SVGIcon';
import { ICONS, COLORS } from 'consts//disciplines';

export const Popout = ({ className, data }) => {
  const { type, title } = data;

  return (
    <div className={className}>
      <Title>{title}</Title>
      <SVGIcon src={ICONS[type]} />
    </div>
  );
};

const Title = styled.span`

`;

const StyledComponent = styled(Popout)`

  display: grid;
  grid-template-areas: "title" "body";
  grid-template-rows: 30px auto;
  min-height: 100px;
  min-width: 100px;

  border: 2px solid ${props => COLORS[props.data.type] || COLORS.UNKONWN};
  background: white;
  border-radius: 3px;
  padding: 10px;

  ${Title} {
    grid-area: title;
  }

  ${SVGIcon} {
    grid-area: body;
  }
`;

export default StyledComponent;
