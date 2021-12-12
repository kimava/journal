import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from '../styles/headerStyle';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>Journal</Link>
    </StyledHeader>
  );
};

export default Header;
