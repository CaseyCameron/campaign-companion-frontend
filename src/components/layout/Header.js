import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from '../UI';

const Header = () => {
  const { pathname } = useLocation();
  let location = pathname;

  if (pathname === '/') location = 'campaigns';

  return (
    <Wrapper class="flex justify-between p-4 border-b-2 border-black">
      <div><Link to='/'>{'Campaign Companion'}</Link> {`> ${location}`}</div>
    </Wrapper>
  );
};

export default Header;
