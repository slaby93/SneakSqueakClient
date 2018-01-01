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
  background-color: #f7f7f7d4;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all .2s linear;
  top: -100vh;
  z-index: 2;
  ${ifProp('visible', css`
      top: 0;
  `)}
`;

export default StyledComponent;
