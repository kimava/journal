import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StyledHeader from '../styles/headerStyle';
import { logout, selectUserId } from '../features/users/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <Link to='/journals'>Journal</Link>
      {userId && <button onClick={onLogout}>Sign Out</button>}
    </StyledHeader>
  );
};

export default React.memo(Header);
