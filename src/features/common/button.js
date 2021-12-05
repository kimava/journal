import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  display: inline-flex;
  outline: none;
  border: 1px solid gray;
  color: black;
  padding: 1rem;

  background: black;
  color: white;
`;

function Button({ children, ...rest }) {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
}

export default Button;
