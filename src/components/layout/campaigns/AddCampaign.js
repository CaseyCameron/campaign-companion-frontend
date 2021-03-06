import React from 'react'
import Button from '@material-ui/core/Button';
import FormModalDialog from '../../modals/FormModalDialog';
import formTypes from '../../../data/form-types';


const AddCampaign = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <Button
        class={button}
        type="submit"
        variant="outlined"
        onClick={handleOpen}
      >
        Add Campaign
      </Button>
      <FormModalDialog
        open={open}
        handleClose={handleClose}
        formType={formTypes.addCampaign}
      />
    </>
  );
};

export default AddCampaign;

const button = `
  bg-white
  border-solid
  border-2
  rounded-md
  w-auto
  shadow-sm
  px-4
`;
