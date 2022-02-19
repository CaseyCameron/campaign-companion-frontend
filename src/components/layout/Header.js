import React, { useState } from 'react';
import Button from '@mui/material/Button';
import formTypes from '../../data/form-types';
import FormModalDialog from '../modals/FormModalDialog';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { Wrapper } from '../UI';

const Header = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  let location = pathname;

  if (pathname === '/') location = 'campaigns';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper class="flex justify-between p-4 border-b-2 border-black">
      <div>
        <Link to="/">{'Campaign Companion'}</Link> {`> ${location}`}
      </div>
      <div className="App">
        {!user && (
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Signup/Sign In
          </Button>
        )}
        {user && (
          <Button class={button} variant="outlined" onClick={handleOpen}>
            Logout
          </Button>
        )}
        <FormModalDialog
          open={open}
          handleClose={handleClose}
          formType={formTypes.auth}
        />
      </div>
    </Wrapper>
  );
};

export default Header;

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  shadow-sm
  px-3
`;
