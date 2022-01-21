import { useEffect, useState } from 'react';
import { addNpc, updateNpc } from '../services/routes/routes';
import { useCampaigns, useNpcs } from '../contexts/CampaignProvider';

const useNpcForm = (addForm, npc, handleClose, setValue) => {
  const { setNpcs } = useNpcs();
  const { campaigns } = useCampaigns();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (npc) {
      setSelected(npc.campaignId);
      Object.entries(npc).forEach(([key, value]) => {
        if (key !== 'campaignId' && key !== 'userId') {
          setValue(key, value);
        } else if (key === 'campaignId' && value !== null) {
          const campaignName = campaigns.find(
            (campaign) => campaign.id === value
          );
          setValue(key, campaignName.name);
        } else if (key === 'campaignId' && value === null) {
          setValue(key, null);
        }
      });
    }
    setLoading(false);
  }, [campaigns, npc, setValue]);

  const onSubmit = async (formData) => {
    if (!addForm) {
      updateNpc(npc.id, formData, selected);
    }

    if (addForm) {
      const [addedNpc] = await addNpc(formData, selected);
      setNpcs((prevState) => [...prevState, addedNpc]);
      handleClose(true);
    }
  };
  return { campaigns, loading, onSubmit, selected, setSelected };
};

export { useNpcForm };
