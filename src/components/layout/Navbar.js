import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from '../UI';
import FormModalDialog from '../modals/FormModalDialog';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
          <div class={rightItemStyle}>
            <Button class={button} type="submit" variant="outline" onClick={handleOpen}>
              Add Campaign
            </Button>
            <FormModalDialog open={open} handleClose={handleClose} formType={'addCampaign'} />
          </div>
        )}
        {location.pathname === '/npcs' && (
          <div class={rightItemStyle}>
            <Button class={button} type="submit" variant="outline" onClick={handleOpen}>
              Add Npc
            </Button>
            <FormModalDialog open={open} handleClose={handleClose} formType={'addNpc'} />
          </div>
        )}
        {location.pathname.includes('detail') && (
          <div class={rightItemStyle}>
            <Button class={button} type="submit" variant="outline" onClick={handleOpen}>
              Add Npc
            </Button>
            <FormModalDialog open={open} handleClose={handleClose} formType={'addNpc'} />
          </div>
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
`;

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
`;
const wrapperStyle = `

`;
