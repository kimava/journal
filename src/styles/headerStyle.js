import styled, { css } from 'styled-components';

const StyledHeader = styled.div`
  ${({ theme }) => {
    const { paddings } = theme;
    return css`
      padding: ${paddings.large};
      display: flex;
      justify-content: center;
      height: 10vh;
    `;
  }}
`;

export default StyledHeader;
