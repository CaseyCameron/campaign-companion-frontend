import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from '../UI';

const Navbar = () => {
  const location = useLocation();

  return (
    <Wrapper class={wrapperStyle}>
      <div class={style}>
        <li class={leftItemStyle}>
          <Link to="/">Campaigns</Link>
        </li>
        <li class={leftItemStyle}>
          <Link to="/npcs">Npcs</Link>
        </li>
        {location.pathname === '/' && (
          <div class={rightItemStyle}>Add Campaign</div>
        )}
        {location.pathname === '/npcs' && (
          <div class={rightItemStyle}>Add Npc</div>
        )}
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

const rightItemStyle = `
flex
absolute 
right-0
m-2
`
const wrapperStyle = `

`;
