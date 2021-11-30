import React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from '../UI';

const Header = () => {
  const { pathname } = useLocation();
  let location = pathname;

  if (pathname === '/') location = 'campaigns';

  return (
    <Wrapper class="flex justify-between p-4 border-b-2 border-black">
      <div>{`Campaign Companion > ${location}`}</div>
    </Wrapper>
  );
};

export default Header;
