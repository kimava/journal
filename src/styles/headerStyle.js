import styled, { css } from 'styled-components';

const StyledHeader = styled.div`
  ${({ theme }) => {
    const { paddings, border, fonts, colors } = theme;
    return css`
      padding: ${paddings.large};
      display: flex;
      justify-content: flex-end;
      height: 10vh;
      font-size: ${fonts.size.regular};
      border-bottom: ${border.default};

      a {
        padding-right: ${paddings.large};
      }

      button {
        font: inherit;
        font-color: inherit;
        font-size: ${fonts.size.regular};
        border: none;
        background: none;
        cursor: pointer;
      }

      button:hover {
        color: ${colors.orange};
      }
    `;
  }}
`;

export default StyledHeader;
