import React from "react"
import Dialog from '@material-ui/core/Dialog'
import AuthForm from '../forms/AuthForm'
import CampaignForm from "../forms/CampaignForm"

const FormModalDialog = ({ open, handleClose, formType }) => {
  return (
    // props received rom App.js
    <Dialog open={open} onClose={handleClose}>
      {formType === 'auth' && <AuthForm handleClose={handleClose} />}
      {formType === 'add' && <CampaignForm handleClose={handleClose} addForm={true} />}
    </Dialog>
  )
}

export default FormModalDialog
