import React from "react"
import Dialog from '@material-ui/core/Dialog'
import AuthForm from '../forms/AuthForm'
import CampaignForm from "../forms/CampaignForm"
import NpcForm from "../forms/NpcForm"

const FormModalDialog = ({ open, handleClose, formType, npc }) => {
  // console.log(formType)
  return (
    <Dialog open={open} onClose={handleClose}>
      {formType === 'auth' && <AuthForm handleClose={handleClose} />}
      {formType === 'addCampaign' && (
        <CampaignForm handleClose={handleClose} addForm={true} />
      )}
      {formType === 'addNpc' && (
        <NpcForm handleClose={handleClose} addForm={true} />
      )}
      {formType === 'updateNpc' && (
        <NpcForm npc={npc} handleClose={handleClose} addForm={false} />
      )}
    </Dialog>
  );
}

export default FormModalDialog
