import React, { createContext, useContext, useState } from 'react'

const CampaignCompanionContext = createContext()

export const CampaignProvider = ({ children }) => {
  const [campaign, setCampaign] = useState([]);
  const [npcs, setNpcs] = useState([]);
  const [npcEditForm, setNpcEditForm] = useState(false);

  const value = {
    campaign,
    setCampaign,
    npcs,
    setNpcs,
    npcEditForm,
    setNpcEditForm,
  };

  return (
    <CampaignCompanionContext.Provider value={value}>
      {children}
    </CampaignCompanionContext.Provider>
  );
};

export const useCampaign = () => {
  const { campaign, setCampaign } = useContext(CampaignCompanionContext);

  return { campaign, setCampaign };
};

export const useNpcs = () => {
  const { npcs, setNpcs } = useContext(CampaignCompanionContext);

  return { npcs, setNpcs };
};

export const useNpcEditForm = () => {
  const { npcEditForm, setNpcEditForm } = useContext(CampaignCompanionContext);

  return { npcEditForm, setNpcEditForm };
};
