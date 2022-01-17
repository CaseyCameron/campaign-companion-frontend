import React from 'react'
import Button from '@material-ui/core/Button';
import FormModalDialog from '../../modals/FormModalDialog';

const AddNpc = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <Button class={button} type="submit" variant="outline" onClick={handleOpen}>
        Add Npc
      </Button>
      <FormModalDialog open={open} handleClose={handleClose} formType={'addNpc'} />
    </>
  )
}

export default AddNpc;

const button = `
  border-solid
  border-2
  rounded-md
  w-auto
  shadow-sm
`;
