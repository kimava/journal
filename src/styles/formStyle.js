import styled, { css } from 'styled-components';

const StyledForm = styled.article`
  ${({ theme }) => {
    const { margins, paddings, fonts, border } = theme;
    return css`
      margin-bottom: ${margins.regular};
      width: 100%;
      height: 60%;
      font: ${fonts.family};
      font-size: ${fonts.size.regular};

      input {
        margin-bottom: ${margins.regular};
        padding: ${paddings.small};
        width: 100%;
        background-color: transparent;
        border: ${border.default};
      }

      textarea {
        width: 100%;
        height: 70%;
        padding: ${paddings.small};
        background-color: transparent;
        border: ${border.default};
      }
    `;
  }}
`;

export default StyledForm;
