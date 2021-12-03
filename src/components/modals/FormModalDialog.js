import React from "react"
import Dialog from '@material-ui/core/Dialog'
import AuthForm from '../forms/AuthForm'
import CampaignForm from "../forms/CampaignForm"
import NpcForm from "../forms/NpcForm"

const FormModalDialog = ({ open, handleClose, formType }) => {
  return (
    // props received rom App.js
    <Dialog open={open} onClose={handleClose}>
      {formType === 'auth' && <AuthForm handleClose={handleClose} />}
      {formType === 'addCampaign' && <CampaignForm handleClose={handleClose} addForm={true} />}
      {formType === 'addNpc' && <NpcForm handleClose={handleClose} addForm={true} />}
    </Dialog>
  )
}

export default FormModalDialog
