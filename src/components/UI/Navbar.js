import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper } from '.';

const Navbar = () => {
  return (
    <Wrapper>
      <div class={style}>
        <li class={leftItemStyle}>
          <Link to="/">Campaigns</Link>
        </li>
        <li class={leftItemStyle}>
          <Link to="/npcs">Npcs</Link>
        </li>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const style = `
  flex
  list-none
`;

const leftItemStyle = `
  m-2
  `;
