import React from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import SVGIcon from 'components/special/SVGIcon';
import menuIcon from 'resources/icons/menu.svg';
import crossIcon from 'resources/icons/cross.svg';
import profileDefaultImage from 'resources/images/profile_default.png';
import MobileMenu from 'components/special/MobileMenu';

export const Header = ({
  className,
  toggleMobileMenu,
  isMobileMenuVisible,
}) => {
  return [
    <div key="header" className={className}>
      {
        isMobileMenuVisible
        ? <SVGIcon
          src={crossIcon}
          size={30}
          onClick={toggleMobileMenu}
        />
      : <SVGIcon
        src={menuIcon}
        size={35}
        onClick={toggleMobileMenu}
      />
      }

      <ProfileBox src={profileDefaultImage} />
    </div>,
    <MobileMenu
      key="mobileMenu"
      visible={isMobileMenuVisible}
    />,
  ];
};

const ProfileBox = styled.img`
  width: 35px;
  height: 35px;
`;

const StyledComponent = styled(Header)`
  position: sticky;
  top: 0px;
  z-index: 3;
  height: ${prop('theme.components.header.height')}px;
  display: grid;
  grid-template-areas: "menu empty profile";
  grid-template-columns: 60px auto minmax(70px, max-content);
  align-items: center;
  box-shadow: 0px 0px 15px 0px #9e9e9e;
  background-color: ${prop('theme.colors.darkWhite')};

  ${SVGIcon} {
    grid-area: menu;
    align-self: center;
    justify-self: center;
    pointer-events: all;
  }

  ${ProfileBox} {
    grid-area: profile;
    align-self: center;
    justify-self: center;
    pointer-events: all;
  }

  ${ifProp('transparent', css`
    box-shadow: initial;
    background-color: transparent;
    pointer-events: none;
  `)}
`;

export default StyledComponent;
