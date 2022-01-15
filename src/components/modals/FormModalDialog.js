import React from "react"
import Dialog from '@material-ui/core/Dialog'
import AuthForm from '../forms/AuthForm'
import CampaignForm from "../forms/CampaignForm"
import Loading from '../loading/Loading';
import NpcForm from '../forms/NpcForm';
import { useFetchCampaigns } from '../../hooks/hooks';

const FormModalDialog = ({ open, handleClose, formType, npc }) => {
  const [campaign, loading] = useFetchCampaigns();

  if (loading) return <Loading />;
  return (
    <Dialog open={open} onClose={handleClose}>
      {formType === 'auth' && <AuthForm handleClose={handleClose} />}
      {formType === 'addCampaign' && (
        <CampaignForm handleClose={handleClose} addForm={true} />
      )}
      {formType === 'addNpc' && (
        <NpcForm handleClose={handleClose} addForm={true} campaign={campaign} />
      )}
      {formType === 'updateNpc' && (
        <NpcForm
          npc={npc}
          handleClose={handleClose}
          addForm={false}
          campaign={campaign}
        />
      )}
    </Dialog>
  );
};

export default FormModalDialog
