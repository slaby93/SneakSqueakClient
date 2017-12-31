import React from 'react';
import styled from 'styled-components';

export const Header = ({ className }) => {
  return (<div className={className}>Header</div>);
};

const StyledComponent = styled(Header)`
  height: 50px;
`;

export default StyledComponent;
