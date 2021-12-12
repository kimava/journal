import styled, { css } from 'styled-components';

const StyledHeader = styled.div`
  ${({ theme }) => {
    const { paddings, border, fonts } = theme;
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
    `;
  }}
`;

export default StyledHeader;
