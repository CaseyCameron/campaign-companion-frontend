import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import FormModalDialog from '../modals/FormModalDialog';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { Wrapper } from '../UI';

const Header = () => {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState();
  const { pathname } = useLocation();
  let location = pathname;

  if (pathname === '/') location = 'campaigns';

  useEffect(() => {
    !user ? setFormType('auth') : setFormType('logout') 
  }, [user])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper class={headerStyle}>
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
          <Button className={button} variant="outlined" onClick={signOut}>
            Logout
          </Button>
        )}
        <FormModalDialog
          open={open}
          handleClose={handleClose}
          formType={formType}
        />
      </div>
    </Wrapper>
  );
};

export default Header;

const headerStyle=`
flex
justify-between
p-4
border-b-4
border-gray-200
bg-white`

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  shadow-sm
  px-3
`;
