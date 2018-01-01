import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

export class Icon extends React.PureComponent {
  translateIcon(icon) {
    if (!icon) {
      return;
    }
    let result = icon
      .substr(1, icon.length - 1) // takes values between ""
      .replace(/%3C/g, '<')
      .replace(/%3E/g, '>')
      .replace(/%23/g, '#')
      .replace(/"/g, '');
    result = result
      .substr(result.search(/<svg/g));

    return result;
  }

  render() {
    const {
      src, className, size, ...props
    } = this.props;
    const translatedIcon = this.translateIcon(src);

    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: translatedIcon }}
        {...props}
      />
    );
  }
}
const StyledComponent = styled(Icon)`
  width: fit-content;
  height: fit-content;
  
  svg {
    height: ${prop('height', '20')}px;
    width: ${prop('width', '20')}px;

  ${ifProp('size', css`
      --size: ${prop('size')}px;
      height: var(--size);
      width: var(--size);
  `)}

  ${ifProp('color', css`
      fill: ${prop('color')};
  `)}
  }
`;
Icon.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default StyledComponent;
