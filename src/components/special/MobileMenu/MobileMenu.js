import React from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

export const MobileMenu = ({ className }) => {
  return (
    <div className={className}>
      <button>Home</button>
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>Logout</button>
    </div>
  );
};

MobileMenu.defaultProps = {
  visible: false,
};

const StyledComponent = styled(MobileMenu)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(247, 247, 247, 0.83);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .3s linear;
  top: -100vh;
  z-index: 2;
  ${ifProp('visible', css`
      top: 0;
      padding-top: ${prop('theme.components.header.height')}px;
  `)}
`;

export default StyledComponent;
