import styled, { css } from 'styled-components';

const CustomContainer = styled.div`
  ${({ theme }) => {
    const { colors, devices, fonts, paddings } = theme;
    return css`
      width: 100%;
      height: 100vh;
      display: flex;
      background-color: ${colors.pale};
      ${devices.tablet} {
        background-color: ${colors.white};
        flex-direction: column;
      }

      h1 {
        font-size: ${fonts.size.title};
        padding: ${paddings.large};
        text-align: center;
      }
    `;
  }}
`;

const Grid = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Grid;
