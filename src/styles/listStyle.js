import styled, { css } from 'styled-components';

const StyledList = styled.article`
  ${({ theme }) => {
    const { margins, paddings, fonts, border, shadow } = theme;
    return css`
      margin: auto;
      margin-bottom: ${margins.regular};
      width: 100%;
      padding: ${paddings.small};
      border: ${border.default};
      box-shadow: ${shadow.default};
      -webkit-box-shadow: ${shadow.default};

      h3 {
        margin-bottom: ${margins.small};
        font-size: ${fonts.size.medium};
      }

      p {
        font-size: ${fonts.size.regular};
      }

      span {
        margin-bottom: ${margins.small};
        display: inline-block;
      }
    `;
  }}
`;

export default StyledList;
