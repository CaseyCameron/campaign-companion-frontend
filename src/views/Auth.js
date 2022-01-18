import React, { useState } from 'react'

import Button from '@mui/material/Button'
import FormModalDialog from '../components/modals/FormModalDialog'

const Auth = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='App'>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Signup
      </Button>
      <FormModalDialog open={open} handleClose={handleClose} formType={'auth'} />
    </div>
  );
}

export default Auth;
