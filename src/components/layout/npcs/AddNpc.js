import React from 'react'
import Button from '@material-ui/core/Button';
import FormModalDialog from '../../modals/FormModalDialog';
import formTypes from '../../../data/form-types';

const AddNpc = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <Button class={button} type="submit" variant="outlined" onClick={handleOpen}>
        Add Npc
      </Button>
      <FormModalDialog open={open} handleClose={handleClose} formType={formTypes.addNpc} />
    </>
  )
}

export default AddNpc;

const button = `
  p-2
  border-solid
  border-2
  rounded-md
  w-auto
  shadow-sm
  px-4
`;
