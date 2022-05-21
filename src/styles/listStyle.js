import styled, { css } from 'styled-components';

const StyledList = styled.article`
  ${({ theme }) => {
    const { margins, paddings, fonts, border, shadow } = theme;
    return css`
      margin: auto;
      margin-bottom: ${margins.regular};
      padding: ${paddings.regular};
      position: relative;
      display: flex;
      width: 100%;
      border: ${border.default};
      box-shadow: ${shadow.default};
      -webkit-box-shadow: ${shadow.default};

      div {
        margin-left: ${margins.small};
      }

      h3 {
        margin-bottom: ${margins.small};
        display: inline-block;
        font-size: ${fonts.size.medium};
      }

      p {
        margin-bottom: ${margins.small};
        font-size: ${fonts.size.regular};
      }

      span {
        margin-bottom: ${margins.small};
        display: block;
      }
    `;
  }}
`;

export default StyledList;
