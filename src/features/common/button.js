import React from 'react';
import styled, { css } from 'styled-components';

function Button({ disabled, children, ...rest }) {
  return (
    <StyledBtn disabled={disabled} {...rest}>
      {children}
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled.button`
  ${({ theme }) => {
    const { paddings, fonts, colors, border, shadow } = theme;
    return css`
      margin: auto;
      margin-top: 0;
      margin-bottom: 0;
      padding: ${paddings.small} ${paddings.large};
      display: block;
      outline: none;
      fonts: ${fonts.family};
      font-size: ${fonts.size.regular};
      color: ${colors.black};
      border: ${border.default};
      background: ${colors.orange};
      box-shadow: ${shadow.default};
      cursor: pointer;

      &:disabled,
      &:disabled:hover {
        opacity: 0.7;
        cursor: default;
      }
    `;
  }}
`;
