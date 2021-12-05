import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>HEADER</h1>
    </Wrapper>
  );
};

export default Header;
