import styled, { css } from 'styled-components';

const StyledHeader = styled.div`
  ${({ theme }) => {
    const { paddings, border } = theme;
    return css`
      padding: ${paddings.large};
      display: flex;
      justify-content: center;
      height: 10vh;
      border-bottom: ${border.default};
    `;
  }}
`;

export default StyledHeader;
