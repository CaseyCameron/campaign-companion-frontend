import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useNpcEditForm } from '../../contexts/CampaignProvider';

import Button from '@material-ui/core/Button';
import FormModalDialog from '../modals/FormModalDialog';
import { Wrapper } from '../UI';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false)
  const { npcEditForm, setNpcEditForm } = useNpcEditForm();

  const handleOpen = () => {
    console.log('navbar handle open', npcEditForm);
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
            {console.log('exact path = /npcs')}
            <Button class={button} type="submit" variant="outline" onClick={handleOpen}>
              Add Npc
            </Button>
            <FormModalDialog open={open} handleClose={handleClose} formType={'addNpc'} />
          </div>
        )}
        {(location.pathname.includes('detail') && !npcEditForm) && (
          <div class={rightItemStyle}>
          {console.log('exact path = npcs/details')}
            <Button class={button} type="submit" variant="outline" onClick={handleOpen}>
              Add Npc
            </Button>
            {/* find a way to tell if there is another form modal dialog open
            if there is, set open to false */}
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
  shadow-sm
`;
const wrapperStyle = `

`;
