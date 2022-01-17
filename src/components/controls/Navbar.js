import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper } from '../UI';

const Navbar = () => {
  return (
    <Wrapper class={'flex list-none'}>
      <li class={'m-2'}>
        <Link to="/">Campaigns</Link>
      </li>
      <li class={'m-2'}>
        <Link to="/npcs">Npcs</Link>
      </li>
    </Wrapper>
  );
};

export default Navbar;
