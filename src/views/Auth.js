import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import FormModalDialog from '../components/modals/FormModalDialog'
import formTypes from '../data/form-types'
import { useAuth } from '../contexts/AuthProvider'

const Auth = () => {
  const { user, } = useAuth();
  const [open, setOpen] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {
    if(user) navigate('/')
  }, [user]);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='App'>
      {!user && 
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Signup/Sign In
        </Button>}
      {user && 
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Logout
        </Button>
      }
      <FormModalDialog open={open} handleClose={handleClose} formType={formTypes.auth} />
    </div>
  );
}

export default Auth;
