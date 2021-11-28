import React, { useState } from 'react'

import Button from '@mui/material/Button'
import ModalDialog from './ModalDialog'

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
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default Auth;
